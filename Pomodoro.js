$(document).ready(function (){
    //class contains functions & variables for each part of clock
    class CountTimer {
        constructor() {
            this.count = 5;
        }

        plus() {
            this.count++;
        }
        minus() {
            if (this.count > 1) {
            this.count--;
            }
        }
        
    }

    var breakLength = new CountTimer();
    var sessionLength = new CountTimer();
    var pomodoro = new CountTimer();

    $("#breakminus").on("click", function(){
        breakLength.minus();
        $("#breakTimer").html(breakLength.count);

    });
    $("#breakplus").on("click", function(){
        breakLength.plus();
        $("#breakTimer").html(breakLength.count);
    });
    $("#sessionminus").on("click", function(){
        sessionLength.minus();
        $("#sessionTimer").html(sessionLength.count);

    });
    $("#sessionplus").on("click", function(){
        sessionLength.plus();
        $("#sessionTimer").html(sessionLength.count);
    });
});