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
			getShape();
			getColor();
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


function set_color($inputId){
	$("input#" + $inputId).click();
	console.log($inputId);
	document.getElementById("blackSelect").classList.remove('blueBorder');
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

function undo () {
	console.log("undoing shit");
}

function redo () {
	console.log("redoing shit");
}

function getShape(){
	var selectedVal = "";
	var selected = $("input[type='radio'][name='toolRadio']:checked");
	if(selected.length > 0){
		selectedVal = selected.val();
		if(selectedVal == "brushSelect"){
			console.log(selectedVal);
			//return a new brush()
		}
		else if(selectedVal == "circleSelect"){
			console.log(selectedVal);
			//return a new circle()
		}
		else if(selectedVal == "squareSelect"){
			console.log(selectedVal);
			//return a new square()
		}
		else if(selectedVal == "lineSelect"){
			console.log(selectedVal);
			//return a new lineobject()
		}
		else if(selectedVal == "textSelect"){
			console.log(selectedVal);
			//return a new textobject()
		}
	}
	else{
		//error computer says no
	}
}

function getColor(){
	var selectedVal = "";
	var selected = $("input[type='radio'][name='colorRadio']:checked");
	if(selected.length > 0){
		selectedVal = selected.val();
		if(selectedVal == "blackSelect"){
			console.log(selectedVal);
			//return a new color()
		}
		else if(selectedVal == "blueSelect"){
			console.log(selectedVal);
			//return a new color()
		}
		else if(selectedVal == "redSelect"){
			console.log(selectedVal);
			//return a new color()
		}
	}
	else{
		//error computer says no
	}
}