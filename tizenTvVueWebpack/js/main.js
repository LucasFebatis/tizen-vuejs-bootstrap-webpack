var canvas;
var context;
var clockRadius;

window.onload = function() {
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
	document.width = 600;
    clockRadius = document.width / 2;

    //Assigns the area that will use Canvas
    canvas.width = document.width;
    canvas.height = canvas.width;

    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		break;
    	case 38: //UP arrow
    		break;
    	case 39: //RIGHT arrow
    		break;
    	case 40: //DOWN arrow
    		break;
    	case 13: //OK button
    		break;
    	case 10009: //RETURN button
		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });

    setInterval(watch, 500);
}

function watch() {
    //Erase the previous time
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    //Import the current time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;

    hours = hours > 12 ? hours - 12 : hours;
    context.save();

    //Assigns the clock creation location in the middle of the canvas
    context.translate(canvas.width / 2, canvas.height / 2);

    //Assign the style of the number which will be applied to the clock plate
    context.beginPath();
    context.font = "30px monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#555";

    //Create numbers 1 to 12 in a circle
    for (var i = 1; i <= 12; i++) {
        var angle = (i - 3) * (Math.PI * 2) / 12,
            dx = clockRadius * 0.7 * Math.cos(angle),
            dy = clockRadius * 0.7 * Math.sin(angle);
        context.fillText(i, dx, dy);
    }

    //Hour needle
    context.save();
    angle = (hour - 3) * (Math.PI * 2) / 12; //Indicate the current time
    context.rotate(angle);
    context.beginPath();
    context.lineWidth = 4;
    context.lineJoin = "round";
    context.moveTo(-15, -5);
    context.lineTo(-15, 5);
    context.lineTo(clockRadius * 0.4, 0);
    context.closePath();
    context.strokeStyle = "#333";
    context.stroke();
    context.restore(); //Initialize state

    //Minute needle
    context.save();
    angle = (minute - 15) * (Math.PI * 2) / 60;
    context.rotate(angle);
    context.beginPath();
    context.moveTo(-15, -4);
    context.lineTo(-15, 4);
    context.lineTo(clockRadius * 0.7, 1);
    context.lineTo(clockRadius * 0.7, -1);
    context.fill();
    context.restore();

    //Second needle
    context.save();
    angle = (seconds - 15) * (Math.PI * 2) / 60;
    context.rotate(angle);
    context.beginPath();
    context.moveTo(-15, -2);
    context.lineTo(-15, 2);
    context.lineTo(clockRadius * 0.7, 0);
    context.fillStyle = "#f00";
    context.fill();
    context.restore();

    context.restore();
}
