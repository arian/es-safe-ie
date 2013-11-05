es-safe-ie
==========

AST transformations to make JS safe for IE 8 and lower.

For example from:

```js
foo.finally();
```

to:

```js
foo['finally']();
```

Usage
-----

```js
var transform = require('es-safe-ie');
transform(ast);
```

or on the command line:

```bash
$ cat script.js
foo.finally();
$ esparse script.js | es-safe-ie | uglify --spidermonkey
foo["finally"]();
```
