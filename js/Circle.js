var Circle = Shape.extend ({

	constructor: function(x, y){
		this.startx = x;
		this.starty = y;
		this.currx = x;
		this.curry = y;
		this.color = getColor();
		this.radius = 0;
	},

	draw: function(context){
		context.beginPath();
		context.strokeStyle = this.color;
		context.arc(((this.startx + this.currx)/2), ((this.starty + this.curry)/2), this.radius, 0, 2*Math.PI);
		context.stroke();
	},

	drawing: function(canvas, e){
		this.currx = e.pageX - canvas.offsetLeft;
        this.curry = e.pageY - canvas.offsetTop;
        this.radius = (this.currx - this.startx)/2;
        if(this.radius < 0){
        	this.radius *= -1;
        }
	}

});