'use strict'

function studentTable(container, data) {

    var table = $("<table/>");
    $(table).attr('class', 'studentTable');
    $(table).attr('id', data.studentPhoto);

    var array = [];
    var keys = Object.keys(data);
    array.push(keys);
    array.push(data);

    $.each(array, function (rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function (colIndex, c) {
            row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
        });

        table.append(row);
    });

    return container.append(table);
};