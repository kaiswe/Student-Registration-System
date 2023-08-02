'use strict'

var fs = require('fs');


function studentsCsvFile(response) {

    fs.readFile('./data/students.csv', 'utf8', (err, data) => {

        if (err) {

            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('Error reading file "students.csv"');
            response.end();

        } else {

            response.writeHead(200, { 'Content-Type': 'text/csv' });
            response.write(data);
            response.end();

        };
    });
};

exports.studentsCsvFile = studentsCsvFile;