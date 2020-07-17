const fs = require('fs');
const { promisify } = require('util');
const sidebars = require('./sidebars');
const read = promisify(fs.readFile);


const injectSideBars = async (names) => {
    const content = [...sidebars.someSidebar.Start, ...names];
    const side = await read('./sidebars.js');
    const sideBar = side.toString().replace("Start: ['doc1']", `Start: [${content.map(name => `'${name.replace('.md', '')}'`)}]`);

    if (names.length > 0) {
        fs.writeFileSync('./sidebars.js', sideBar);
    }
}

const readHim = async () => {
    const data = await read('./README.md');
    const readme = data.toString();
    const lines = readme.split("---");
    let counter = 2;
    const names = [];
    lines.forEach(async line => {
        const name = `doc${counter}.md`;
        const title = line.split('# ')[1].split('\n')[0];
        line = line.replace(`# ${title}`, '');
        const data = `---\ntitle: ${title}\n---\n ${line}`;

        fs.writeFileSync(`./docs/${name}`, data);
        names.push(name);
        counter++;
    });


    await injectSideBars(names);

}

readHim();