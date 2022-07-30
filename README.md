# **YakJS**
## this repo will also include the CLI
### YakJS is apart of the Yak family developed by yours truly SNOOT


simple code snippet of a `.yakjs` file
    
```
allow Hello -- "Hello";
make world -- "world";
string -- "number";
log(Hello:-world:-"I am ":-string:-9);
```

this in JS will make the following
```
let Hello = "Hello";
const world = "world";
string = "number";
log(Hello,world,"I am ",string,9);
```
`log` will return `console.log(Hello,world,"I am ",string,9)` because of the Soon™ cli that will create and import a script with all the **Yak** function types that are converted to the vanilla js equivalent