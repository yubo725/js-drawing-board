/** 管理绘图的工具 */
define(function() { 
	var history = []; //用来保存历史绘制记录的数组，里面存储的是直线类、矩形类或者圆形类的对象
	
	function drawLine(context, line) {
		line.drawMe(context);
	}

	function drawRect(context, rect) {
		rect.drawMe(context);
	}

	function drawArc(context, arc) {
		arc.drawMe(context);
	}

	/** 添加一条绘制轨迹 */
	function addHistory(item) {
		history.push(item);
	}

	/** 画出历史轨迹 */
	function drawHistory(context) {
		for(var i = 0; i < history.length; i++) {
			var obj = history[i];
			obj.drawMe(context);			
		}
	}

	/** 清除历史轨迹 */
	function clearHistory() {
		history = [];
	}

	return {
		drawLine: drawLine,
		drawRect: drawRect,
		drawArc: drawArc,
		addHistory: addHistory,
		drawHistory: drawHistory,
		clearHistory: clearHistory
	};
})