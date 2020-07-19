const fs = require('fs');
const { promisify } = require('util');
const sidebars = require('./sidebars');
const read = promisify(fs.readFile);


const injectSideBars = async (categories) => {
    Object.keys(categories).forEach(category => {
        sidebars.someSidebar[category] = categories[category];
    });

    const string = `module.exports = ${JSON.stringify(sidebars, null, 2)}`
    if (categories) {
        fs.writeFileSync('./sidebars.js', string);
    }
}

const readHim = async () => {
    const data = await read('./README.md');
    const readme = data.toString();
    const lines = readme.split("<!--{");
    let counter = 1;
    const categories = {};
    lines.forEach(async line => {
        line = line.split('}-->');
        if (line[0].length > 0) {
            const json = JSON.parse(`{ ${line[0]} } `);
            const title = json.title;
            const name = `${title.replace(' ', '_').toLowerCase()}`;
            const nameWithExtension = `${title.replace(' ', '_').toLowerCase()}.md`;

            if (!categories[json.category]) {
                categories[json.category] = [name];
            } else {
                categories[json.category].push(name);
            }

            const data = `---\ntitle: ${title} \n--- ${line[1]} `.replace(`# ${title}`, '');
            fs.writeFileSync(`./docs/${nameWithExtension}`, data);
            counter++;
        }
    });

    await injectSideBars(categories);

}

readHim();