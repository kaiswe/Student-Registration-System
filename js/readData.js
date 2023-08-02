'use strict'

$(document).ready(function () {

    $('#searchForm').on("submit", function (e) {

        var tables = document.getElementsByClassName("studentTable");
        var imgs = document.getElementsByTagName("img");
        var fdback = document.getElementById("inputFeedback");

        $(fdback).remove();
        $(imgs).remove();
        $(tables).remove();

        var userInput = $(this).serializeArray();

        $.post('/studentsCsv', userInput, function (data, status) {

            var csv = data.toString();
            var csvLines = csv.split("\n");
            var csvArray = [];
            var csvHeaders = csvLines[0].split(",");

            for (var i = 1; i < csvLines.length; i++) {

                var csvLineValues = csvLines[i].split(",");

                var json = {};

                for (var j = 0; j < csvHeaders.length; j++) {

                    json[csvHeaders[j]] = csvLineValues[j];
                };

                csvArray.push(json);

            };

            var obj = JSON.stringify(csvArray);
            var jsonObj = JSON.parse(obj);

            for (var i = 0; i < jsonObj.length; i++) {

                if (jsonObj[i].studentID === userInput[0].value || jsonObj[i].firstName.toLowerCase() === userInput[1].value.toLowerCase()
                    || jsonObj[i].lastName.toLowerCase() === userInput[2].value.toLowerCase() || jsonObj[i].studentAge === userInput[3].value
                    || jsonObj[i].gender === userInput[4].value || jsonObj[i].studentDegree.toLowerCase() === userInput[4].value.toLowerCase()) {

                    studentTable($("#feedbackDiv"), jsonObj[i]);

                    var lastCell = document.querySelectorAll('table td:nth-child(7)');

                    $("a[href|='/openPhoto']").attr("class", "studentPhotoLink");

                    lastCell.forEach(function (cell) {

                        if (cell.outerText === jsonObj[i].studentPhoto) {

                            cell.outerHTML = '<a href="/openPhoto">' + jsonObj[i].studentPhoto + '</a>';

                        };
                    });

                };
            };

            document.getElementById("searchForm").reset();

        })
            .done(function () {

                if (document.getElementById("feedbackDiv").getElementsByClassName("studentTable").length > 0) {

                    var feedback = $(document.createElement("div"));
                    feedback.appendTo("#feedbackDiv");
                    $(feedback).attr("id", "inputFeedback");
                    var fb = "Search Success! Here are your results";
                    document.getElementById("inputFeedback").innerHTML = fb;

                } else {

                    var feedback = $(document.createElement("div"));
                    feedback.appendTo("#feedbackDiv");
                    $(feedback).attr("id", "inputFeedback");
                    var fb = "Error. There are no student's matching that information stored in this system, please try again.";
                    document.getElementById("inputFeedback").innerHTML = fb;


                };
            });

        e.preventDefault();

    });

});