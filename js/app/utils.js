define(['app/line', 'app/rect'], function(Line, Rect) { 
	var history = [];
	
	function drawLine(context, line) {
		line.drawMe(context);
	}

	function addHistory(item) {
		history.push(item);
	}

	function drawHistory(context) {
		for(var i = 0; i < lines.length; i++) {
			var obj = history[i];
			obj.drawMe(context);			
		}
	}

	function drawRect(context, rect) {
		rect.drawMe(context);
	}

	function clearHistory() {
		lines = [];
	}

	return {
		drawLine: drawLine,
		addLine: addLine,
		drawHistory: drawHistory,
		clearHistory: clearHistory
	};
})