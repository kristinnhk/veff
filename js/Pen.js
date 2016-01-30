var Pen = Shape.extend({

	constructor: function(x, y) {
		this.base(x, y);
		this.startx = x;
		this.starty = y;
		this.currx = x;
		this.curry = y;
		this.color = getColor();
		this.xCords = [];
		this.yCords = [];
		//console.log(this.startx + " " + this.starty + " " + this.currx + " " + this.curry);
	},

	draw: function(context, ev) {
		//console.log("START\nX:" + this.startx + " , Y: " + this.starty + "\nCURR\nX: " + this.currx + " , Y: " + this.curry);
		context.strokeStyle = this.color;
		context.lineWidth = 2;
		for (var i = 0; i < this.xCords.length; i++) {
			context.beginPath();
		    //context.moveTo(this.startx, this.starty);
		    context.moveTo(this.xCords[i-1], this.yCords[i-1]);
		   // console.log("line from " + this.xCords[i-1] + " " + this.yCords[i-1] + " to " + this.xCords[i] + " " + this.yCords[i]);
		    context.lineTo(this.xCords[i], this.yCords[i]);
		    context.closePath();
		    context.stroke();
		}		
	},

	drawing:function(canvas, e) {
		this.startx = this.currx;
        this.starty = this.curry;
        this.currx = e.pageX - canvas.offsetLeft;
        this.curry = e.pageY - canvas.offsetTop;
        this.xCords.push(this.currx);
        this.yCords.push(this.curry);
        //console.log("X:" + this.startx + " , Y: " + this.starty);
	}

});