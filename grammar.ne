@{%
const yaklingLexer = require('./lexer');
%}

@lexer yaklingLexer

program
    -> statements
        {%
            (data) => {
                return {
                    type: 'program',
                    body: data[0]
                };
            }
        %}

statements
    -> null
        {%
            () => []
        %}
    | statement
        {%
            (data) => [data[0]]
        %}
    | statement linebreak statements
        {%
            (data) => [data[0], ...data[2]]
        %}

statement
    -> assignment       {% id %}
    | allowAssignment    {% id %}
    | makeAssignment    {% id %}
    | function_call     {% id %}

assignment -> %identifier _ %assignment_op _ literal codebreak linebreak
    {%
        (data) => {
            return {
                type: 'assignment',
                var_name: data[0],
                value: data[4]
            };
        }
    %}

allowAssignment -> %keywordAllow _ %identifier _ %assignment_op _ literal codebreak linebreak
    {%
        (data) => {
            return {
                type: 'allowAssignment',
                var_name: data[2],
                value: data[6]
            };
        }
    %}

makeAssignment -> %keywordMake _ %identifier _ %assignment_op _ literal codebreak linebreak
    {%
        (data) => {
            return {
                type: 'makeAssignment',
                var_name: data[2],
                value: data[6]
            };
        }
    %}

function_call -> %identifier _ %lparen _ parameter_list _ %rparen codebreak linebreak
    {%
        (data) => {
            return {
                type: 'function_call',
                function_name: data[0],
                parameters: data[4]
            }
        }
    %}

parameter_list
    -> null
        {%
            () => []
        %}
    | expression
        {%
            (data) => {
                return [data[0]];
            }
        %}
    | expression _ seperator _ parameter_list
        {%
            (data) => {
                return [data[0], ...data[4]];
            }
        %}

expression
    -> %identifier  {% id %}
    | literal       {% id %}

literal
    -> %number {% id %}
    |  %string {% id %}

# this specifies the two types of seperators
seperator
    -> %seperator   {% id %}
    | %comma        {% id %}

codebreak
    -> null
    | %codebreak

linebreak
    -> null
    | "\n"
    | %linebreak
    | %whitespace
_ -> null
    | %whitespace # this is to make sure the parser doesn't shit itself over a whitespace
__ -> null