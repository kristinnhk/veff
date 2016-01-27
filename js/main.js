$(document).ready(function(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	var startx = 0;
	var starty = 0;
	var currx = 0;
	var curry = 0;
	var isDrawing = false;
	var drawings = [];
	var undo = [];


	$("#myCanvas").mousedown(function(e){
		console.log("its alive");
		//startx = e.pageX - this.offsetLeft;
		//starty = e.pageY - this.offsetTop;
		
		startx = currx;
        starty = curry;
        currx = e.pageX - canvas.offsetLeft;
        curry = e.pageY - canvas.offsetTop;

		isDrawing = true;
		
		console.log("X:" + startx + " , Y: " + starty);
	});

	$("#myCanvas").mousemove(function(e){
		if(isDrawing === true){
			//var x = e.pageX - this.offsetLeft;
			//var y = e.pageY - this.offsetTop;

			//draw virknin
			startx = currx;
            starty = curry;
            currx = e.pageX - canvas.offsetLeft;
        	curry = e.pageY - canvas.offsetTop;
            
            context.beginPath();
		    context.moveTo(startx, starty);
		    context.lineTo(currx, curry);
		    context.strokeStyle = "black";
		    context.lineWidth = 2;
		    context.stroke();
		    context.closePath();

			/*lineTo virknin
			context.clearRect(0,0,550,550);
			context.beginPath();
			context.moveTo(startx,starty);
			context.lineTo(x,y);
			context.stroke();*/
		}

	});

	$("#myCanvas").mouseup(function(e){
		isDrawing = false;
	});

});


function set_radio($inputId){
	$("input#" + $inputId).click();
	console.log($inputId);
	document.getElementById("redSelect").classList.remove('blueBorder');
	document.getElementById("blueSelect").classList.remove('blueBorder');
	var selectedColor = $("input[type='radio'][name='colorRadio']:checked");
	console.log(selectedColor.val());
	document.getElementById(selectedColor.val()).classList.add('blueBorder');
}	

function set_tool($inputId){
	$("input#" + $inputId).click();
	console.log($inputId);
	document.getElementById("brushSelect").classList.remove('blueBorder');
	document.getElementById("circleSelect").classList.remove('blueBorder');
	document.getElementById("squareSelect").classList.remove('blueBorder');
	document.getElementById("lineSelect").classList.remove('blueBorder');
	document.getElementById("textSelect").classList.remove('blueBorder');
	var selectedTool = $("input[type='radio'][name='toolRadio']:checked");
	console.log(selectedTool.val());
	document.getElementById(selectedTool.val()).classList.add('blueBorder');
}
