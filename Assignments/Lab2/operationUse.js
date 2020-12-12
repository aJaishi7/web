const operations = require('./operations.js');
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write('Reload page to See Result in console');
    console.log(operations.subtractNumbers(20,10));
    console.log(operations.addNumbers());
    console.log(operations.multiplyNumbers(2,6));
    console.log(operations.divideNumbers());

    res.end();

}).listen(90);