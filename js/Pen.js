var Pen = Shape.extend({

	constructor: function(x, y) {
		this.base(x, y);
		this.startx = x;
		this.starty = y;
		this.currx = x;
		this.curry = y;
		this.points = [{x: x, y: y}];
		console.log(this.startx + " " + this.starty + " " + this.currx + " " + this.curry);
	},

	draw: function(context, ev) {
		//console.log("START\nX:" + this.startx + " , Y: " + this.starty + "\nCURR\nX: " + this.currx + " , Y: " + this.curry);
		for (var i = 0; i < this.points.length; i++) {
		    context.moveTo(this.startx, this.starty);
		    //console.log("line from " + this.startx + " " + this.starty + " to " + this.currx + " " + this.curry);
		    context.lineTo(this.currx, this.curry);
		    context.strokeStyle = "black";
		    context.lineWidth = 2;
		    context.stroke();
		    context.closePath();
		}		
	},

	drawing:function(canvas, e) {
		this.startx = this.currx;
        this.starty = this.curry;
        this.currx = e.pageX - canvas.offsetLeft;
        this.curry = e.pageY - canvas.offsetTop;
        this.points.push({x: this.currx, y: this.curry});
        //console.log("X:" + this.startx + " , Y: " + this.starty);
	}

});