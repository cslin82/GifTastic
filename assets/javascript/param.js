

// var params = { 
//     width:1680, 
//     height:1050 };
// var str = jQuery.param( params );


const apiKey = "YHnPcJvXmqkIrQvG5kkUeG4dfTIaCOel";
var animalQ = "cat";
var limit = 15;

var params = { 
    api_key: apiKey, 
    q: animalQ,
    limit: maxImages };
var str = jQuery.param( params );

console.log(str);

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