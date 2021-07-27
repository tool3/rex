const fs = require('fs');
const { promisify } = require('util');
const sidebars = require('./sidebars');
const config = require('./docusaurus.config');
const read = promisify(fs.readFile);

const wrapInExport = data => {
    return `module.exports = ${JSON.stringify(data, null, 2)}`
}

const injectSideBars = async (categories) => {
    sidebars.docs = [];
    Object.keys(categories).forEach(category => {
        if (category === "None") {
            categories[category].reverse().forEach(category => sidebars.docs.unshift({ id: category, type: 'doc' }));
            return;
        }
        sidebars.docs.push({ type: 'category', label: category, items: categories[category] });
    });
    const string = wrapInExport(sidebars);
    if (categories) {
        fs.writeFileSync('./sidebars.js', string);
    }
}

const getConfig = () => {
    const exists = fs.existsSync('./rex.config.js');
    if (exists) {
        return require('./rex.config');
    }
}


const writeDocusaurusConfig = async (main) => {
    const configFile = './docusaurus.config.js';
    const path = config.presets[0][1];
    path.docs.sidebarPath = require.resolve('./sidebars.js');
    path.theme.customCss = require.resolve('./src/css/custom.css')
    const string = wrapInExport(config);
    fs.writeFileSync(configFile, string);
}

const noHands = (lines, readme) => {
    if (lines.length === 1) {
        // no formatting was added
        const regex = new RegExp(/^\s*# /, 'gm');
        lines = readme.split(regex);

        return lines.map(line => {
            if (line) {
                const title = line.substring(0, line.indexOf('\n'));
                line = line.replace(`${title}`, '');
                return `"title": "${title}"}-->\n${line}`
            } else {
                return '';
            }
        });
    } else {
        return lines;
    }
}



const readHim = async () => {
    const rexCofig = getConfig();
    const data = await read('./README.md');
    const readme = data.toString();
    let lines = readme.split("<!--{");
    lines = noHands(lines, readme);

    let main = null;
    const categories = {};

    lines.forEach(async line => {
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
                    main = name
                }
            } else {
                categories[category].push(name);
            }

            const data = `---\ntitle: ${title}${isMain ? '\nslug: /' : '' && (main = '')} \n--- ${line[1]} `.replace(`# ${title}`, '');
            
            fs.writeFileSync(`./docs/${nameWithExtension}`, data);
        }
    });

    await injectSideBars(categories);
    await writeDocusaurusConfig(main);

    if (process.argv[2] === "--theme" && process.argv[3]) {
        const cssPath = './src/css/custom.css';
        const hex = '32b824';
        const css = await read(cssPath);
        const theme = process.argv[3].replace('#', '');
        const regex = new RegExp(hex, 'gi');
        const newCss = css.toString().replace(regex, theme);
        fs.writeFileSync(cssPath, newCss);
    }
}

readHim();