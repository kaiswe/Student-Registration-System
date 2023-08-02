'use strict'


var fs = require('fs');


function generateStudentTable(response) {

    fs.readFile('js/generateTable.js', 'utf8', (err, data) => {

        if (err) {

            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('Error reading file "generateTable.js"');
            response.end();

        } else {

            response.writeHead(200, { 'Content-Type': 'text/javascript' });
            response.write(data);
            response.end();

        };
    });
};

exports.generateStudentTable = generateStudentTable;