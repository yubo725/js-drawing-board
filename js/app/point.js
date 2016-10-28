/** 点 */
define(function() {
	return function(x, y) {
		this.x = x;
		this.y = y;
		this.equals = function(point) {
			return this.x === point.x && this.y === point.y;
		};
	};
})