/** 圆形 */
define(function() {
	return function(startPoint, radius) {
		this.startPoint = startPoint;
		this.radius = radius;
		this.drawMe = function(context) {
			context.beginPath();
			context.arc(this.startPoint.x, this.startPoint.y, this.radius, 0, 2 * Math.PI);
			context.closePath();
			context.stroke();
		}
	}
})