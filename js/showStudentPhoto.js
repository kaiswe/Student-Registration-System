'use strict'


$(document).ready(function () {

    $("#feedbackDiv").on('click', 'a', function (e) {

        var oldImage = document.getElementsByTagName("img");

        $(oldImage).remove();
        var input = $(this).text();

        $.ajax({

            type: "GET",
            url: "/show",
            data: input
        })
            .done(function (data) {

                var img = $(document.createElement("img"));
                var photo = $(document.getElementById(input));
                img.attr("src", 'data:image/jpeg;base64,' + data);
                img.appendTo(photo);

            });

        e.preventDefault();

    });
});

