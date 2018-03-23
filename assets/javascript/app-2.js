var animals = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"]
var newButton;


// jQuery wrapper
$(document).ready(function () {
    console.log("ready!");

    animals.forEach(element => {
        newButton = $('<button>')
        newButton.text(element);
        newButton.addClass("btn btn-primary");
        newButton.data("value", element);
        $('#animal-buttons').append(newButton);
    });


    $('#animal-button').click(function (event) {
        event.preventDefault();
        console.log('animal-button clicked');

    });

    $('#animal-buttons').on('click', 'button', function () {
        console.log('animal-button button clicked');
        console.log($(this).text());
        console.log($(this).data("value"));

    });

    // ***

    const apiKey = "YHnPcJvXmqkIrQvG5kkUeG4dfTIaCOel";
    var animalQ = "cat";
    var maxImages = 15;

    // can condense this later
    var params = {
        api_key: apiKey,
        q: animalQ,
        limit: maxImages
    };
    var queryURL = "http://api.giphy.com/v1/gifs/search?" + jQuery.param(params);

    console.log(queryURL);

    $("#button1").on("click", function () {
        console.log('button 1 clicked')
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            // After the data from the AJAX request comes back
            .then(function (response) {
                console.log(response);

            });
    });

    // ***
});