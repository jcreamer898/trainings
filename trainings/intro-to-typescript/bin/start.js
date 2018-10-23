#!/bin/env node
const path = require('path');
const dev = require('mdx-deck/lib/dev');
const chalk = require('chalk');

const [,, section] = process.argv;
const cwd = process.cwd();
const opts = {
    dirname: `${cwd}/sections/${section}`,
    globals: {
        FILENAME: `"${cwd}/sections/${section}/deck.md"`
    },
    host: 'localhost',
    port: 8080,
    outDir: `${cwd}/dist`,
    o: true,
    html: true
};

dev(opts)
    .then(res => {
        const { address, port } = res.server.address();
        const url = 'http://' + address + ':' + res.port;
        
        console.log('listening on', chalk.magenta(url));
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
