const fs = require('fs');
const { promisify } = require('util');
const path = require('path')
const sidebars = require('../sidebars');
const config = require('../docusaurus.config');
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

function wrapInExport(data) {
  return `module.exports = ${JSON.stringify(data, null, 2)}`;
}

async function injectSideBars(categories) {
  sidebars.docs = [];
  Object.keys(categories).forEach((category) => {
    if (category === 'None') {
      categories[category]
        .reverse()
        .forEach((category) =>
          sidebars.docs.unshift({ id: category, type: 'doc' })
        );
      return;
    }
    sidebars.docs.push({
      type: 'category',
      label: category,
      items: categories[category],
    });
  });
  const string = wrapInExport(sidebars);
  if (categories) {
    await write('./sidebars.js', string);
  }
}

async function writeDocusaurusConfig() {
  const configFile = './docusaurus.config.js';
  const path = config.presets[0][1];
  path.docs.sidebarPath = require.resolve('../sidebars.js');
  path.theme.customCss = require.resolve('../src/css/custom.css');
  config.plugins = [require.resolve('docusaurus-lunr-search')];
  const string = wrapInExport(config);
  await write(configFile, string);
}

function noHands(lines, readme) {
  if (lines.length === 1) {
    // no formatting was added
    const regex = new RegExp(/^\s*# /, 'gm');
    lines = readme.split(regex);

    return lines.map((line) => {
      if (line) {
        const title = line.substring(0, line.indexOf('\n'));
        line = line.replace(`${title}`, '');
        return `"title": "${title}"}-->\n${line}`;
      } else {
        return '';
      }
    });
  } else {
    return lines;
  }
}

async function create(argv) {
  const data = await read(path.resolve(argv.path));
  const readme = data.toString();
  let lines = readme.split('<!--{');
  lines = noHands(lines, readme);

  let main = null;
  const categories = {};

  lines.forEach(async (line) => {
    line = line.split('}-->');
    if (line[0].length > 0) {
      const json = JSON.parse(`{ ${line[0]} } `);
      const title = json.title;
      const name = `${title.replace(' ', '_').toLowerCase()}`;
      const nameWithExtension = `${title.replace(' ', '_').toLowerCase()}.md`;
      const category = json.category || 'None';
      const isMain = !main || json.main;

      if (!categories[category]) {
        categories[category || 'None'] = [name];
        if (isMain) {
          main = name;
        }
      } else {
        categories[category].push(name);
      }

      const data = `---\ntitle: ${title}${
        isMain ? '\nslug: /' : '' && (main = '')
      } \n--- ${line[1]} `.replace(`# ${title}`, '');

      await write(`./docs/${nameWithExtension}`, data);
    }
  });

  await injectSideBars(categories);
  await writeDocusaurusConfig(main);

  if (argv.theme) {
    const cssPath = './src/css/custom.css';
    const hex = 'd17ceb';
    const css = await read(cssPath);
    const theme = argv.theme.replace('#', '');
    const regex = new RegExp(hex, 'gi');
    const newCss = css.toString().replace(regex, theme);
    await write(cssPath, newCss);
  }
}

module.exports = create;
