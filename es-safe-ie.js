"use strict";

var estraverse = require('estraverse');

var keywords = [
    'break',
    'do',
    'instanceof',
    'typeof',
    'case',
    'else',
    'new',
    'var',
    'catch',
    'finally',
    'return',
    'void',
    'continue',
    'for',
    'switch',
    'while',
    'debugger',
    'function',
    'this',
    'with',
    'default',
    'if',
    'throw',
    'delete',
    'in',
    'try',
    'class',
    'enum',
    'extends',
    'super',
    'const',
    'export',
    'import',
    'implements',
    'let',
    'private',
    'public',
    'yield',
    'interface',
    'package',
    'protected',
    'static'
];

module.exports = function(ast) {
    estraverse.traverse(ast, {
        enter: function(node, parent) {
            if (
                    node.type == 'MemberExpression'
                    && node.computed === false
                    && keywords.indexOf(node.property.name) != -1
            ) {
                node.computed = true;
                node.property.value = node.property.name;
                node.property.type = 'Literal';
                delete node.property.name;
            }
        }
    });
    return ast;
};
