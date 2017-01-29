$(document).ready(function () {});
    var search = document.getElementById("userSearch").value;
            $.getJSON("https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&list=search&srsearch=" + search + "&format=json&callback=?",function (x) {
                
        var link = document.createElement('x');
                      
                for (i = 0; i < 10; i++) {  
                    var titleLink =  x.query.search[i].title.replace(/ /g, "_");
            $("#results").append("<div class= well>" + "<a href=https://en.wikipedia.org/wiki/" + titleLink + " target=_blank>" +  x.query.search[i].title + ": " + x.query.search[i].snippet + "</a>" + "</div>" + "<p />"); 
                console.log(search);                      
                 //   document.getElementbyId("results").appendChild(results);
                 //   $("#results").html(JSON.stringify(x));
                }                    
}); 
