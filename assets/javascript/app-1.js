// Global delcarations

var apiKey = "YHnPcJvXmqkIrQvG5kkUeG4dfTIaCOel";

var queryURL;

queryURL = "https://api.giphy.com/v1/gifs/search?api_key=YHnPcJvXmqkIrQvG5kkUeG4dfTIaCOel&q=matrix&limit=25&offset=0&rating=G&lang=en";

var giphyresponse = {};

// jQuery wrapper
$(document).ready(function () {
    console.log("ready!");


    $("#button1").on("click", function () {
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            // After the data from the AJAX request comes back
            .then(function (response) {
                giphyresponse = Object.assign({}, response);
                console.log(giphyresponse);

            });
    });



});