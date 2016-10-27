define(['app/point'], function() {
	return function(startPoint, width, height) {
		this.startPoint = startPoint;
		this.width = width;
		this.height = height;
		this.drawMe = function(context) {
			context.strokeStyle = "#000000";
			context.strokeRect(this.startPoint.x, this.startPoint.y, this.width, this.height);
		}
	}
})