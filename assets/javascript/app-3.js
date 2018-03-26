var animals = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"]
var newButton;
var animalQ;
var maxImages = 15;
const apiKey = "YHnPcJvXmqkIrQvG5kkUeG4dfTIaCOel";
var newImg;
var gifArr;


// jQuery wrapper
$(document).ready(function () {
    console.log("ready!");

    animals.forEach(element => {
        addButton(element);
    });

    function addButton(newAnimal) {
        newButton = $('<button>')
            .text(newAnimal)
            .addClass("btn btn-primary")
            .data("value", newAnimal);
        $('#animal-buttons').append(newButton);
    }

    $('#animal-button').click(function (event) {
        event.preventDefault();
        var currentAnimal = $('#animal-text').val().trim();
        currentAnimal = currentAnimal.toLowerCase();
        if (animals.indexOf(currentAnimal) === -1 ) {
            addButton(currentAnimal);
        } else {
            console.log('already in list');
        }
        $('#animal-text').val("");
        
    });

    $('#animal-buttons').on('click', 'button', function () {
        animalQ = $(this).data("value");

        $('#images').empty();

        // can condense this later
        var params = {
            api_key: apiKey,
            q: animalQ,
            limit: maxImages,
            rating: "pg-13"
        };
        var queryURL = "https://api.giphy.com/v1/gifs/search?" + jQuery.param(params);

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data from the AJAX request comes back
            .then(function (response) {
                gifArr = response.data;

                gifArr.forEach(element => {
                    newImg = $('<img>')
                        .addClass('gif')
                        .attr({
                            src: element.images.fixed_height_still.url,
                            alt: animalQ + " gif",
                            width: element.images.fixed_height.width,
                            height: element.images.fixed_height.height
                        })
                        .data({
                            urlAnimate: element.images.fixed_height.url,
                            urlStill: element.images.fixed_height_still.url,
                            state: "still"
                        });
                    $('#images').append(newImg);
                });
            });
    });

    $('#images').on('click', '.gif', function () {
        var imgData = $(this).data();
        var state = imgData.state;
        if (state === "still") {
            $(this).data("state", "animate");
            $(this).attr("src", imgData.urlAnimate);
        } else {
            $(this).data("state", "still");
            $(this).attr("src", imgData.urlStill);
        }
                
    });

});
