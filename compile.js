const pug = require('pug')
const fs = require('fs')

fs.writeFileSync('index.html', pug.compileFile('index.jade')())
