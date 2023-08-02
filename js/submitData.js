'use strict'

$(document).ready(function() {  
    
    $("#studentForm").on( "submit", function(e) {

    $.ajax({

        type: "POST",
        url: "/writeToCsv",
        data: new FormData(this),
        processData: false,
        contentType: false
    })
        .done(function(){

        var feedback = "Thank you for submitting the student's details into the System! You may choose to submit again at your leisure";
        document.getElementById("feedbackDiv").innerHTML = feedback;

        })
        .always(function(){

            document.getElementById("studentForm").reset();

        });
        e.preventDefault();
    
    });
});