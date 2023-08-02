'use strict'

var fs = require('fs');

function reqCSS(response) {

    fs.readFile('./css/studentDetails.css', 'utf8', (err, data) => {

        if (err) {

            console.error(err);
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('Error reading file "studentDetails.html"');
            response.end();

        } else {

            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(data);
            response.end();

        };
    });
};

exports.reqCSS = reqCSS;