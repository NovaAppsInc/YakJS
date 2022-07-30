let figlet = require('figlet'),
gradient = require("gradient-string"),
inquirer = require('inquirer');
const fs = require('fs'),
path = require("path");
let parser = require("../parse");
let generate = require("../generate")

const greet = async () => {
    figlet('YakJS CLI', function (err, data) {
        console.log(gradient.pastel.multiline(data))
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    inquirer.prompt({
        type: "input",
        name: "fileName",
        message: "What is the name of the yakjs file"
    }).then(resp => {
        fileName = resp['fileName'];
        fileNameNODE = fileName.split('.').slice(0, -1).join('.');
        let file = fs.existsSync(fileName);
        let fileEXT = fileName.slice(Math.max(fileName.lastIndexOf(".") + 1))
        if (!fileName.includes('.yakjs')) fileName = fileName + '.yakjs';
        if(fileEXT != "yakjs") return console.log(`Please makes sure the file is a YakJS file`);
        if(file != true) {
            console.log(`the file ${fileNameNODE}.${fileEXT} doesn't exist check the name again`);
            return
        } else {
            
        }
    });

}
greet();