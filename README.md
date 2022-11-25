![image](https://user-images.githubusercontent.com/49733954/203977311-18855f1e-382b-47c0-972d-76c7b34881f7.png)
# `YakJS`
### **NOTE: This is not the full lang, for it is only a Yak to JS version which will bring/allow converting Yak to JS**
#### YakJS is apart of the Yak family developed by SNOOT in which this repo at some point will contain all the tools need to covert Yak grammar to JS grammar


simple code snippet of a `.yakjs` file
    
```
allow Hello -- "Hello";
make world -- "world";
string -- "number";
log(Hello:-world:-"I am ":-string:-9);
```
in JS will look like this
```
let Hello = "Hello";
const world = "world";
string = "number";
log(Hello,world,"I am ",string,9);
```
`log` will return a `console.log()` because of the Soon™ cli that will create and import a script with all the **Yak** function types that are converted to the vanilla js equivalent inside it

at the moment this is a work of progress and may or may not be abonded at some point

as of late the following thing are supported in conversion into JS
- `log` -> `console.log()`
- `allow` -> `let`
- `make` -> `const`

the lexer supports these follwing things types of characters
- `whitespaces`
- seperators as either `:-` or `,`
- equal sign is replaced with `--` as an assignment operator
- strings inside double quotes `"`
- numbers
- left and right parentheses `(` `)`
- keywords of `allow`, `make`
- code breakes as `;`
- linebreaks (happens when you hit return or enter key to make a new line in the code)

things to be supported that are specified in the lexer but not supported in grammar or parsing
- newline statements in JS and other known as `\n` but in Yak I plan it to be `|n|` bc I want to be different
- arrays `[]`
- functions `process`
- if and else if statements `is` `else is`
- for loops `for`
- comments
