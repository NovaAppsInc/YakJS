// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const yaklingLexer = require('./lexer');
var grammar = {
    Lexer: yaklingLexer,
    ParserRules: [
    {"name": "program", "symbols": ["statements"], "postprocess": 
        (data) => {
            return {
                type: 'program',
                body: data[0]
            };
        }
                },
    {"name": "statements", "symbols": [], "postprocess": 
        () => []
                },
    {"name": "statements", "symbols": ["statement"], "postprocess": 
        (data) => [data[0]]
                },
    {"name": "statements", "symbols": ["statement", "linebreak", "statements"], "postprocess": 
        (data) => [data[0], ...data[2]]
                },
    {"name": "statement", "symbols": ["assignment"], "postprocess": id},
    {"name": "statement", "symbols": ["allowAssignment"], "postprocess": id},
    {"name": "statement", "symbols": ["makeAssignment"], "postprocess": id},
    {"name": "statement", "symbols": ["function_call"], "postprocess": id},
    {"name": "assignment", "symbols": [(yaklingLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (yaklingLexer.has("assignment_op") ? {type: "assignment_op"} : assignment_op), "_", "literal", "codebreak", "linebreak"], "postprocess": 
        (data) => {
            return {
                type: 'assignment',
                var_name: data[0],
                value: data[4]
            };
        }
            },
    {"name": "allowAssignment", "symbols": [(yaklingLexer.has("keywordAllow") ? {type: "keywordAllow"} : keywordAllow), "_", (yaklingLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (yaklingLexer.has("assignment_op") ? {type: "assignment_op"} : assignment_op), "_", "literal", "codebreak", "linebreak"], "postprocess": 
        (data) => {
            return {
                type: 'allowAssignment',
                var_name: data[2],
                value: data[6]
            };
        }
            },
    {"name": "makeAssignment", "symbols": [(yaklingLexer.has("keywordMake") ? {type: "keywordMake"} : keywordMake), "_", (yaklingLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (yaklingLexer.has("assignment_op") ? {type: "assignment_op"} : assignment_op), "_", "literal", "codebreak", "linebreak"], "postprocess": 
        (data) => {
            return {
                type: 'makeAssignment',
                var_name: data[2],
                value: data[6]
            };
        }
            },
    {"name": "function_call", "symbols": [(yaklingLexer.has("identifier") ? {type: "identifier"} : identifier), "_", (yaklingLexer.has("lparen") ? {type: "lparen"} : lparen), "_", "parameter_list", "_", (yaklingLexer.has("rparen") ? {type: "rparen"} : rparen), "codebreak", "linebreak"], "postprocess": 
        (data) => {
            return {
                type: 'function_call',
                function_name: data[0],
                parameters: data[4]
            }
        }
            },
    {"name": "parameter_list", "symbols": [], "postprocess": 
        () => []
                },
    {"name": "parameter_list", "symbols": ["expression"], "postprocess": 
        (data) => {
            return [data[0]];
        }
                },
    {"name": "parameter_list", "symbols": ["expression", "_", "seperator", "_", "parameter_list"], "postprocess": 
        (data) => {
            return [data[0], ...data[4]];
        }
                },
    {"name": "expression", "symbols": [(yaklingLexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "expression", "symbols": ["literal"], "postprocess": id},
    {"name": "literal", "symbols": [(yaklingLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "literal", "symbols": [(yaklingLexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "seperator", "symbols": [(yaklingLexer.has("seperator") ? {type: "seperator"} : seperator)], "postprocess": id},
    {"name": "seperator", "symbols": [(yaklingLexer.has("comma") ? {type: "comma"} : comma)], "postprocess": id},
    {"name": "codebreak", "symbols": []},
    {"name": "codebreak", "symbols": [(yaklingLexer.has("codebreak") ? {type: "codebreak"} : codebreak)]},
    {"name": "linebreak", "symbols": []},
    {"name": "linebreak", "symbols": [{"literal":"\n"}]},
    {"name": "linebreak", "symbols": [(yaklingLexer.has("linebreak") ? {type: "linebreak"} : linebreak)]},
    {"name": "linebreak", "symbols": [(yaklingLexer.has("whitespace") ? {type: "whitespace"} : whitespace)]},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": [(yaklingLexer.has("whitespace") ? {type: "whitespace"} : whitespace)]},
    {"name": "__", "symbols": []}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
