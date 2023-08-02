'use strict'

var fs = require('fs');

function reqSearch(response) {

    fs.readFile('./html/searchStudents.html', 'utf8', (err, data) => {

        if (err) {

            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('Error reading file "searchStudents.html"');
            response.end();

        } else {
            
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        };
    });
};
exports.reqSearch = reqSearch;