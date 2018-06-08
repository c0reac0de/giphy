
//loads html first then js when ready
$(document).ready(function () {
    // create array of topics
    var topics = ["poppy", "sunflower", "lavender", "rose", "dandelion"];
    createButton();

    
//event listener
    //take user data and create new button 
    $("#addFlower").on("click", function (event) {
       event.preventDefault();
        event.stopPropagation();
        var flower = $("#flower-input").val().trim();
        // input from the textbox validated and to new button element
        console.log(flower);
 
       topics.push(flower);
        console.log('the new flower is:' + (flower));
        createButton();
    });


function createButton(){
    $("#flowers").empty();
 //create for loop to display array items as buttons
 for (var i = 0; i < topics.length; i++) {
    //creates new variable, new button div
    var newFlower = $("<button>");
    //adds bootstrap button class to array items
    newFlower.addClass('btn btn-primary');
    //add a data attribute
    newFlower.attr('data-name', topics[i]);
    //add css styling
    newFlower.addClass('newFlower');
    //adds topics array text to variable/button
    newFlower.text(topics[i]);
    //display array items as buttons  with added attributes
    $('#flowers').append(newFlower);
}
}
   

    //TODO::Listen to button clicks
    //Need to listen to the button parent #flowers and then filter for buttons
    $('#flowers').on('click', 'button', function (event) {
        console.log(this);
        //empty the div from previous content

        //GET the data-name attribute
        var flowerType = $(this).attr('data-name');
        console.log(flowerType);
        //store giphy API URL for specified query params
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+flowerType+"&api_key=BVqpweDs6Tt0YJUCYGiuPuNgi5uMH50h&limit=10";
        //ajax request
        $.ajax({
            url: queryURL,
            method: 'GET',
            //when ajax call recieved, run following function
        }).then(function (response) {
            //create variable for retrieved data
           var rF = response.data;
           console.log(rF);
            //create new variable for length of response
            f = response.data.length;
            //for loop to run through data 
            for (i = 0; i < f; i++) {
                //new variable for retrieved images
                var returnFlower = response.data[i].images.original.url;
                //new variable new image div
                var showFlower=$("<img>").attr("src",returnFlower);
                
               // $('#display-flowers').append(showFlower);
                $("#display-flowers").append(showFlower);
                console.log(returnFlower);
            }
        })



    })






    return false;





});









