$(document).ready(function(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	$("#myCanvas").mousedown(function(e){
		console.log("its alive");
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		context.beginPath();
		
		console.log("X:" + x + " , Y: " + y);
	});
});

function set_radio($inputId){
	$("input#" + $inputId).click();
	console.log($inputId);
	document.getElementById("redSelect").classList.remove('blueBorder');
	document.getElementById("blueSelect").classList.remove('blueBorder');
	var selected = $("input[type='radio'][name='colorRadio']:checked");
	console.log(selected.val());
	document.getElementById(selected.val()).classList.add('blueBorder');
}	
