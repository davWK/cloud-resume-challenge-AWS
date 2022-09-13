$(document).ready(function(){
    $.getJSON("https://vyswo1j8t8.execute-api.us-east-1.amazonaws.com/Prod", function(data){
        $("#visitor-count").text(data);
    }).fail(function(){
        console.log("An error has occurred while fetching the visitor count.");
    });
});
