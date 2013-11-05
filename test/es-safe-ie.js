"use strict";

var assert = require('assert');
var diff = require('ansidiff');
var transform = require('../es-safe-ie');

var safe = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                        "type": "Identifier",
                        "name": "flow"
                    },
                    "property": {
                        "type": "Literal",
                        "value": "finally"
                    }
                },
                "arguments": []
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                        "type": "Identifier",
                        "name": "flow"
                    },
                    "property": {
                        "type": "Literal",
                        "value": "finally",
                        "raw": "'finally'"
                    }
                },
                "arguments": []
            }
        }
    ]
};

var unsafe = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "flow"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "finally"
                    }
                },
                "arguments": []
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                        "type": "Identifier",
                        "name": "flow"
                    },
                    "property": {
                        "type": "Literal",
                        "value": "finally",
                        "raw": "'finally'"
                    }
                },
                "arguments": []
            }
        }
    ]
};

var result = transform(unsafe);
var actual = JSON.stringify(result, null, 2);
var should = JSON.stringify(safe, null, 2);

try {
    assert.equal(actual, should);
    console.log('everything works :)');
} catch (e) {
    console.log(diff.words(should, actual));
    throw e;
}
