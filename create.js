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
            sidebars.docs.unshift({ id: categories[category][0], type: 'doc' });
            return;
        }
        sidebars.docs.push({ type: 'category', label: category, items: categories[category] });
    });

    const string = wrapInExport(sidebars);
    if (categories) {
        fs.writeFileSync('./sidebars.js', string);
    }
}


const writeConfig = async (main) => {
    const configFile = './docusaurus.config.js';
    config.presets[0][1].docs.homePageId = main;
    const string = wrapInExport(config);
    fs.writeFileSync(configFile, string);
}

const readHim = async () => {
    const data = await read('./README.md');
    const readme = data.toString();
    const lines = readme.split("<!--{");
    let counter = 1;
    let main = null;
    const categories = {};
    lines.forEach(async line => {
        line = line.split('}-->');
        if (line[0].length > 0) {
            const json = JSON.parse(`{ ${line[0]} } `);
            const title = json.title;
            const name = `${title.replace(' ', '_').toLowerCase()}`;
            const nameWithExtension = `${title.replace(' ', '_').toLowerCase()}.md`;

            if (!categories[json.category]) {
                categories[json.category || 'None'] = [name];
                if (!main || json.main) {
                    main = name
                }
            } else {
                categories[json.category].push(name);
            }

            const data = `---\ntitle: ${title} \n--- ${line[1]} `.replace(`# ${title}`, '');
            fs.writeFileSync(`./docs/${nameWithExtension}`, data);
            counter++;
        }
    });

    await injectSideBars(categories);
    await writeConfig(main);
}

readHim();