var Pen = Shape.extend({

	constructor: function(x, y) {
		this.base( x, y);
		this.startx = x;
		this.starty = y;
		this.currx = x;
		this.curry = y;
	},

	draw: function(context, ev) {
		console.log("START\nX:" + this.startx + " , Y: " + this.starty + "\nCURR\nX: " + this.currx + " , Y: " + this.curry);
		context.beginPath();
	    context.moveTo(this.startx, this.starty);
	    context.lineTo(this.currx, this.curry);
	    context.strokeStyle = "black";
	    context.lineWidth = 2;
	    context.stroke();
	    context.closePath();		
	},

	drawing:function(canvas, e) {
		this.startx = this.currx;
        this.starty = this.curry;
        this.currx = e.pageX - canvas.offsetLeft;
        this.curry = e.pageY - canvas.offsetTop;
        //console.log("X:" + this.startx + " , Y: " + this.starty);
	}

});