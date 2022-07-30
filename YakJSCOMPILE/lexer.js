const moo = require('moo');

module.exports = moo.compile({
    identifier: {match: /[a-zA-Z][a-zA-Z0-9]*/, type: moo.keywords({
        keyword: ['process', 'is', 'else', 'for'],
        keywordAllow: "allow",
        keywordMake: "make",
    })},
    whitespace: /[ \t]+/,
    assignment_op: "--",
    number: { match: /0|[1-9][0-9]*/, value: Number },
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    seperator: ':-',
    comment: /\/\/.*?$/,
    comma: ',',
    lparen: '(',
    rparen: ')',
    newline: { match: /\n/, lineBreaks: true },
    codebreak: { match: /;/, lineBreaks: false },
    linebreak: { match: /\r\n/, lineBreaks: true },
    error: moo.error
});