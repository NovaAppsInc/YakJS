const fs = require("fs").promises;
const path = require("path");

async function main() {
    const filename = process.argv[2];
    const runtime = `// runtime module this needed please do not remove this line
const {log, print} = require("${yaklrJS}");`
    if(!filename) {
        console.log("please provide file name");
        return;
    }
    const astCode = (await fs.readFile(filename)).toString();
    const ast = JSON.parse(astCode);
    const jsCODE = generate(ast);
    const baseName = path.basename(filename, ".yaklr.ast");
    const JSFileName = `${baseName}.js`;
    await fs.writeFile(JSFileName, runtime + jsCODE);
    console.log(`Wrote ${JSFileName} in ${basePATH}`);
}

function generate(node) {
    if(node.type === "program") {
        return node.body.map(generate).join(";\n") + ";";
    } else if(node.type === "assignment") {
        const varName = node.var_name.value;
        const value = node.value.value;
        return `var ${varName} = ${value}`;
    } else if(node.type === "makeAssignment") {
        const varName = node.var_name.value;
        const value = node.value.value;
        return `const ${varName} = ${value}`;
    } else if(node.type === "allowAssignment") {
        const varName = node.var_name.value;
        const value = node.value.value;
        return `let ${varName} = ${value}`;
    } else if(node.type === "function_call") {
        const functionName = node.function_name.value;
        const params = node.parameters.map(generate).join(", ");
        return `${functionName}(${params})`
    } else if(node.type === "identifier") {
        return node.value;
    } else if(node.type === "number") {
        return String(node.value);
    } else if (node.type === "string") {
        return node.value;
    } else {
        throw new Error(`Unknown node type: ${node.type}`);
    }
}

main().catch(err => console.log(err.stack));