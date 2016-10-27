define(function() {
	return function(startPoint, endPoint) {
		this.startPoint = startPoint;
		this.endPoint = endPoint;
		this.drawMe = function(context) {
			// console.log('draw line: start('+this.startPoint.x+','+this.startPoint.y+'), end('+this.endPoint.x+','+this.endPoint.y+')');
			context.strokeStyle = "#000000";
			context.beginPath();
			context.moveTo(this.startPoint.x, this.startPoint.y);
			context.lineTo(this.endPoint.x, this.endPoint.y);
			context.closePath();
			context.stroke();
		}
	}
})