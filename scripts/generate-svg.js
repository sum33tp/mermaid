#!/usr/bin/env node
const { execSync } = require("child_process");

const folder = process.argv[2];

if (!folder) {
    console.error(
        "❌ Please provide a folder name. Example: npm run gen hello_world"
    );
    process.exit(1);
}

execSync(
    `npx mmdc -i diagrams/${folder}/diagram.md -o diagrams/${folder}/diagram.svg`,
    {
        stdio: "inherit",
    }
);
