/** 直线 */
define(function() {
	return function(startPoint, endPoint) {
		this.startPoint = startPoint;
		this.endPoint = endPoint;
		this.drawMe = function(context) {
			context.strokeStyle = "#000000";
			context.beginPath();
			context.moveTo(this.startPoint.x, this.startPoint.y);
			context.lineTo(this.endPoint.x, this.endPoint.y);
			context.closePath();
			context.stroke();
		}
	}
})