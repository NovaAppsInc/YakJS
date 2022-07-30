const nearley = require('nearley');
const grammar = require('./grammar.js');
const fs = require('fs').promises;
const path = require('path');

async function main() {
    const filename = process.argv[2];
    if (!filename) {
        console.log("please provide file name");
        return;
    }
    const code = (await fs.readFile(filename)).toString();
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    
    parser.feed(code);
    const astFilename = path.basename(filename) + ".ast";
    const ast = parser.results[0];
    if(parser.results.length > 1) {
        await fs.writeFile(astFilename, JSON.stringify(ast, null, "  "));
        console.log(`I wrote the parse tree to ${astFilename}`);
    } else if(parser.results.length <= 0)  {
        console.warn("the parse tree generated is empty");
        await fs.writeFile(astFilename, JSON.stringify(ast, null, "  "));
        console.log(`I wrote the parse tree to ${astFilename}`);
    } else {
        await fs.writeFile(astFilename, JSON.stringify(ast, null, "  "));
        console.log(`I wrote the parse tree to ${astFilename}`);
    }
}

main().catch(err => console.log(err.stack));