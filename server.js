const http = require('http')
const fs = require('fs');



const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    

    let path = './directory/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact-me':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
})


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})