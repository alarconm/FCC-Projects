$(document).ready(function () {
    //start on click to avoid loading too soon
    $("#submitBtn").click(function()
    {
        //empty the result so that it doesn't keep adding 10 results on top of each other
        $("#results").empty();
    var resultSearch = $("#userSearch").val();  
        $("#dom_element").val(resultSearch);
    //query the wikimedia API with a callback to get it back in JSON
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&list=search&srsearch=" + resultSearch + "&format=json&callback=?",function (x) {        
        var link = document.createElement('x'); 
                //append each result up to a maximum of 10 with a link to its wiki page
                for (i = 0; i < 10; i++)    {  
                    var titleLink =  x.query.search[i].title.replace(/ /g, "_");
            $("#results").append("<div class= well>" + "<a href=https://en.wikipedia.org/wiki/" + titleLink + " target=_blank>" +  x.query.search[i].title + ": " + x.query.search[i].snippet + "</a>" + "</div>" + "<p />"); 
                                            }                    
                                                    }); 
          });
                                });