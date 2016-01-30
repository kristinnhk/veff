var Line = Shape.extend ({

	constructor: function(x, y){
		this.startx = x;
		this.starty = y;
		this.currx = x;
		this.curry = y;
		this.color = getColor();
		this.lineWidth = getLineWidth();
	},

	draw: function(context){
		context.strokeStyle = this.color;
		context.lineWidth = this.lineWidth;
		context.beginPath();
	    context.moveTo(this.startx, this.starty);
	    context.lineTo(this.currx, this.curry);
	    context.closePath();
	    context.stroke();
	},

	drawing: function(canvas, e){
		this.currx = e.pageX - canvas.offsetLeft;
        this.curry = e.pageY - canvas.offsetTop;
	}

});