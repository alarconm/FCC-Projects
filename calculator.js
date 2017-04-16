$(document).ready(function (){
 var outputDisplay = [];
 var currentInput;
 //display current equation
 function update() {
   currentInput = outputDisplay.join("");  
   $("#steps").html(currentInput);
           if (outputDisplay == "") {
            $("#steps").html("0");
            outputDisplay = [];
        }
 }
 //evalute whatever the user has put in
 function getTotal() {
   currentInput = outputDisplay.join("");
     currentInput = eval(currentInput);
   $("#steps").html(currentInput);
     console.log(eval(currentInput));
 }
//on click function for each button  
    $("#deleteAll").on("click", function(){
           $("#steps").html("0");
            outputDisplay = [];

    });
    $("#backOne").on("click", function(){
        outputDisplay.pop();
           update();
    });
    $("#backSlash").on("click", function(){
        outputDisplay.push("/");
                   update();
    });
    $("#asterisk").on("click", function(){
        outputDisplay.push("*");
                   update();
    });
        $("#7").on("click", function(){
            outputDisplay.push("7");
            update();
    });
        $("#8").on("click", function(){
        outputDisplay.push("8");
                       update();
    });
        $("#9").on("click", function(){
        outputDisplay.push("9");
                       update();
    });
        $("#minus").on("click", function(){
        outputDisplay.push("-");
                       update();
    });
        $("#4").on("click", function(){
        outputDisplay.push("4");
                       update();
    });
        $("#5").on("click", function(){
        outputDisplay.push("5");
                       update();
    });
        $("#6").on("click", function(){
        outputDisplay.push("6");
                       update();
    });
        $("#plus").on("click", function(){
        outputDisplay.push("+");
                       update();
    });
        $("#1").on("click", function(){
        outputDisplay.push("1");
                       update();
    });
        $("#2").on("click", function(){
        outputDisplay.push("2");
                       update();
    });
        $("#3").on("click", function(){
        outputDisplay.push("3");
                       update();
    });
        $("#period").on("click", function(){
        outputDisplay.push(".");
                       update();
    });
        $("#0").on("click", function(){
        outputDisplay.push("0");
                       update();
    });
        $("#total").on("click", function(){
        getTotal();
    });
    
});
  