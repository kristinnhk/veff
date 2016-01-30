var Square = Shape.extend({

	constructor: function(x, y) {
		this.base("Square");
		this.pos = {x: x, y: y};
		this.size = {x: 0, y: 0};
		this.color = getColor();
	},

	draw: function(canvas, e) {
		canvas.strokeStyle = this.color;
		canvas.strokeRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
		this.base(canvas);
	},

	drawing:function(canvas, ev) {
		this.size.x = (ev.pageX - canvas.offsetLeft) - this.pos.x;
		this.size.y = (ev.pageY - canvas.offsetTop) - this.pos.y;
	},

});