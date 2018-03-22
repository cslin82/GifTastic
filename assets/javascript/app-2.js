var animals = [ "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig" ]
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


    


});