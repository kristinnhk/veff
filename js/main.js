$(document).ready(function(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	var startx = 0;
	var starty = 0;
	var currx = 0;
	var curry = 0;
	var isDrawing = false;
	var drawings = [];
	var undoneShapes = [];
	var shape;


	$("#myCanvas").mousedown(function(e){
		//console.log("its alive");
		isDrawing = true;
		startx = e.pageX - this.offsetLeft;
		starty = e.pageY - this.offsetTop;
		currx = startx;
		curry = starty;
		//getColor();
		shape = getShape(startx, starty);
		//test
		drawings.push(shape);
		//drawings.push(shape);
		redraw(context,e);
		//test
		//pen.draw(context);

        //console.log("X:" + startx + " , Y: " + starty);

        $("#myCanvas").mousemove(function(ev){
        	if(isDrawing === true){
			//var x = e.pageX - this.offsetLeft;
			//var y = e.pageY - this.offsetTop;
				//if(typeof shape === Pen){
					drawings[drawings.length-1].drawing(canvas,ev);
					redraw(context,ev);
				//}
				//shape.draw(context, ev);
			//draw virknin


			}
		});

		$("#myCanvas").mouseup(function(e){
			isDrawing = false;
		});
		$('#myCanvas').mouseleave(function(e){
		  isDrawing = false;
		});
		
	});
	function getLineWidth(){
		var selectionBox = document.getElementById("lineWidth");
		var width = selectionBox.options[selectionBox.selectedIndex].value;
		console.log("selected value is " + width)
	}
	function getShape(x, y){
		var selectedVal = "";
		var selected = $("input[type='radio'][name='toolRadio']:checked");
		if(selected.length > 0){
			selectedVal = selected.val();
			if(selectedVal == "brushSelect"){
				//console.log(selectedVal);
				//var temp = new Pen(x, y)
				//pens.push(temp);
				return new Pen(x, y);
			}
			else if(selectedVal == "circleSelect"){
				//console.log(selectedVal);
				//return a new circle()
				return new Circle(x, y);
			}
			else if(selectedVal == "squareSelect"){
				console.log(selectedVal);
				return new Square(x, y);
			}
			else if(selectedVal == "lineSelect"){
				console.log(selectedVal);
				return new Line(x, y);
			}
			else if(selectedVal == "textSelect"){
				console.log(selectedVal+ " unfortunately we have not implemented this");
				return new Pen(x, y);
				//return a new textobject()
			}
			else{
				return new Pen(x,y);
			}
		}
		else{
			return new Pen(x,y);
			//error computer says no
		}
	}
	//	AAAAAAAAAAAAARRRRRRRRRRRGGGGGGGGGGGHHHHHHHHHHH ÞETTA VIRKAR EKKI
	document.getElementById("openButton").onclick = function(){
		drawings = [];
		undoneShapes = [];
		context.clearRect(0,0,550,550);
		var temp = $("input[type='radio'][name='drawingRadio']:checked").val;
		var drawingID = parseInt(temp);
		var param = { "id": drawingID};

			$.ajax({
				type: "GET",
				contentType: "application/json; charset=utf-8",
				url: "http://whiteboard.apphb.com/Home/GetWhiteboard",
				data: param,
				dataType: "jsonp",
				crossDomain: true,
				success: function (data) {
					//var jsonData = JSON.parse(data);
					//for (var i = 0; i < jsonData.counters.length; i++) {
					//    var counter = jsonData.counters[i];
					//    console.log(counter.counter_name);
					//}
					//redraw();
					console.log("this shit doesnt work....");
					// The save was successful...
				},
				error: function (xhr, err) {
					// Something went wrong...
				}
			});
	}
	document.getElementById("saveOrLoadButton").onclick = function(){

			var param = { "user": "kristinng14", // You should use your own username!
				"template": false
			};

			$.ajax({
				type: "GET",
				contentType: "application/json; charset=utf-8",
				url: "http://whiteboard.apphb.com/Home/GetList",
				data: param,
				dataType: "jsonp",
				crossDomain: true,
				success: function (data) {
					$("#drawingsList").empty();
					for(var i = 0; i < data.length; i++){
						var par = data[i].ID;
						if(i != 0){
							$("#drawingsList").append("<li><input type=\"radio\" value=\""+ data[i].ID +"\" name=\"drawingRadio\"/>" + "  Name: " + data[i].WhiteboardTitle + "</li>");
				
						}
						else{
							$("#drawingsList").append("<li><input type=\"radio\" value=\""+ data[i].ID +"\" name=\"drawingRadio\" checked=\"checked\"/>" + "  Name: " + data[i].WhiteboardTitle + "</li>");
						}
						
					}
					console.log("winning with list data!");
					// The save was successful...
				},
				error: function (xhr, err) {
					// Something went wrong...
				}
			});
	}
	document.getElementById("clearButton").onclick = function(){
		drawings = [];
		undoneShapes = [];
		context.clearRect(0,0,550,550);
	}
	document.getElementById("SaveButton").onclick = function(){
		var artName = document.getElementById("artSaveID").value;
		if (artName == ""){
			//computer says no
			console.log("computer says no");
		}
		else{
			var stringifiedArray = JSON.stringify(drawings);
			var param = { "user": "kristinng14",
				"name": artName,
				"content": stringifiedArray,
				"template": false
			};

			$.ajax({
				type: "POST",
				contentType: "application/json; charset=utf-8",
				url: "http://whiteboard.apphb.com/Home/Save",
				data: param,
				dataType: "jsonp",
				crossDomain: true,
				success: function (data) {
					console.log("winning!");
					// The save was successful...
				},
				error: function (xhr, err) {
					// Something went wrong...
				}
			});
			document.getElementById("artSaveID").value="";
		}
		
	}
	function redraw(){
		context.clearRect(0,0,550,550);
		for(var i = 0; i < drawings.length; i++){
			drawings[i].draw(context);
		}		//other arrays
	}
	document.getElementById("undoSelect").onclick = function(){
		if(drawings.length > 0){
			undoneShapes.push(drawings.pop());
			redraw();
		}
		console.log("undoing shit");
	}
	document.getElementById("redoSelect").onclick = function(){
		if(undoneShapes.length > 0){
			drawings.push(undoneShapes.pop());
			redraw();
		}
		console.log("redoing shit");
	}

});



function set_color($inputId){
	$("input#" + $inputId).click();
	//console.log($inputId);
	document.getElementById("blackSelect").classList.remove('blueBorder');
	document.getElementById("redSelect").classList.remove('blueBorder');
	document.getElementById("blueSelect").classList.remove('blueBorder');
	var selectedColor = $("input[type='radio'][name='colorRadio']:checked");
	console.log(selectedColor.val());
	document.getElementById(selectedColor.val()).classList.add('blueBorder');
}	

function set_tool($inputId){
	$("input#" + $inputId).click();
	//console.log($inputId);
	document.getElementById("brushSelect").classList.remove('blueBorder');
	document.getElementById("circleSelect").classList.remove('blueBorder');
	document.getElementById("squareSelect").classList.remove('blueBorder');
	document.getElementById("lineSelect").classList.remove('blueBorder');
	document.getElementById("textSelect").classList.remove('blueBorder');
	var selectedTool = $("input[type='radio'][name='toolRadio']:checked");
	console.log(selectedTool.val());
	document.getElementById(selectedTool.val()).classList.add('blueBorder');
}
function redo () {
	console.log("redoing shit");
}


function getColor(){
	var selectedVal = "";
	var selected = $("input[type='radio'][name='colorRadio']:checked");
	if(selected.length > 0){
		selectedVal = selected.val();
		if(selectedVal == "blackSelect"){
			console.log(selectedVal);
			return "black";
			//return a new color()
		}
		else if(selectedVal == "blueSelect"){
			//console.log(selectedVal);
			//return a new color()
			return "blue";
		}
		else if(selectedVal == "redSelect"){
			console.log(selectedVal);
			//return a new color()
			return "red";
		}
		else{
			return "black";
		}
	}
	else{
		//error computer says no
	}

}

function getLineWidth(){
	var selectionBox = document.getElementById("lineWidth");
	var width = selectionBox.options[selectionBox.selectedIndex].value;
	return width;
}