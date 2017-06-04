$(document).ready(function (){
    //class contains functions & variables for each part of clock
    class CountTimer {
        constructor() {
            this.count = 25;
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
    breakLength.count = 5;

    $("#pomodoro").on("click", function(){
        function update() {
        var myTime = sessionLength.count;
        var ss = myTime.split(":");
        var dt = new Date();
        dt.setHours(0);
        dt.setMinutes(ss[0]);
        dt.setSeconds(ss[1]);

        var dt2 = new Date(dt.valueOf() + 1000);
        var temp = dt2.toTimeString().split(" ");
        var ts = temp[0].split(":");

        $("#pomodoro").html(ts[1]+":"+ts[2]);
        setTimeout(update, 1000);

        }
    });

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
            $("#pomodoro").html(sessionLength.count);

    });
    $("#sessionplus").on("click", function(){
        sessionLength.plus();
        $("#sessionTimer").html(sessionLength.count);
            $("#pomodoro").html(sessionLength.count);
    });

});