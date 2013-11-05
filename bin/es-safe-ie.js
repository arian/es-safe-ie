#!/usr/bin/env node

var transform = require('../es-safe-ie');

var json = '';

process.stdin.on('data', function(data) {
    json += data;
});

process.stdin.on('end', function() {

    var ast = JSON.parse(json);
    transform(ast);
    process.stdout.write(JSON.stringify(ast, null, 2));

});
