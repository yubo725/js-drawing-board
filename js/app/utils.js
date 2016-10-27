define(['app/line', 'app/rect'], function(Line, Rect) { 
	var history = [];
	
	function drawLine(context, line) {
		line.drawMe(context);
	}

	function addHistory(item) {
		history.push(item);
	}

	function drawHistory(context) {
		for(var i = 0; i < history.length; i++) {
			var obj = history[i];
			obj.drawMe(context);			
		}
	}

	function drawRect(context, rect) {
		rect.drawMe(context);
	}

	function clearHistory() {
		history = [];
	}

	return {
		drawLine: drawLine,
		drawRect: drawRect,
		addHistory: addHistory,
		drawHistory: drawHistory,
		clearHistory: clearHistory
	};
})