'use strict'

var formidable = require('formidable');
var fs = require('fs');
var os = require('os');

function writeCsvData(response, request) {

    if (request.method == 'POST') {

        var form = new formidable.IncomingForm();
        form.parse(request, function (error, field, file) {

            var csvFileData = [[field.studentID, field.firstName, field.lastName, field.studentAge, field.studentGender, field.studentDegree]];

            if (file.studentPhoto.size != 0) {

                var tempath = os.type() == 'Windows' ? file.studentPhoto.path : file.studentPhoto.filepath;
                var newFileName = os.type() == 'Windows' ? file.studentPhoto.name : field.studentID.concat("." + file.studentPhoto.originalFilename.split(".").pop());
                var newpath = "./photos/" + newFileName;

                fs.copyFile(tempath, newpath, (err) => {

                    if (err) {

                        response.writeHead(200, { 'Content-Type': 'text/html' });
                        response.write("error copying file");
                        response.end();

                    } else {

                        response.writeHead(200, { 'Content-Type': 'text/html' });
                        response.end();

                    };

                    fs.rmSync(tempath);

                    var photoCsvLink = newpath.split("./");

                    fs.appendFile('./data/students.csv', "\n" + csvFileData + photoCsvLink, (err) => {
                        if (err) {

                            response.writeHead(200, { 'Content-Type': 'text/html' });
                            response.write("error copying file");
                            response.end();

                        } else {
                            response.end();
                        };
                    });
                });
            } else {
                fs.appendFile('./data/students.csv', "\n" + csvFileData, (err) => {
                    if (err) {

                        response.writeHead(200, { 'Content-Type': 'text/html' });
                        response.write("error copying file");
                        response.end();

                    } else {
                        response.end();
                    };
                });
            };
        });
    };
};

exports.writeCsvData = writeCsvData;
