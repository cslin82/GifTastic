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
        animalQ = $(this).data("value");

        $('#images').empty();

        // can condense this later
        var params = {
            api_key: apiKey,
            q: animalQ,
            limit: maxImages
        };
        var queryURL = "http://api.giphy.com/v1/gifs/search?" + jQuery.param(params);

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            // After the data from the AJAX request comes back
            .then(function (response) {
                console.log(response);
                console.log(response.data[0]);
                gifArr = response.data;

                gifArr.forEach(element => {
                    console.log(element.images.fixed_height.url);
                    console.log(element.images.fixed_height_still.url);
                    newImg = $('<img>')
                        .attr({
                            src: element.images.fixed_height.url,
                            alt: animalQ + " gif",
                            // width: "",
                            // height: ""
                        });
                    $('#images').append(newImg);
                    console.log('appended');

                });



            });


    });

 
  

    $("#button1").on("click", function () {
        console.log('button 1 clicked');
        newImg = $('<img>')
            .attr({
                src: "https://media3.giphy.com/media/l4FGusNO4CRdCjq92/200.gif",
                alt: "rat gif 1",
                // width: "",
                // height: ""
            });
        $('#images').append(newImg);
        console.log('appended');


        
    });

});