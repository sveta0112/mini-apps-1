/*
	[[0,1,2],
	 [3,4,5],
	 [6,7,8]]
*/

var state = [ new Array(3),new Array(3),new Array(3) ];
var mapping = {
	0: [0, 0],
	1: [0, 1],
	2: [0, 2],
	3: [1, 0],
	4: [1, 1],
	5: [1, 2],
	6: [2, 0],
	7: [2, 1],
	8: [2, 2],
};

var x = 'X';
var o = 'O';
var firstMove = true;
var previous;
var previousWinner;

var resetBoard = function() {
	for(let key in mapping) {
		var element = document.getElementById(key);
		element.innerHtml = key;
	}
	firstMove = true;

	// reload the page
	location.reload();
}

var toggleStarter = function() {
// TODO: let the loose start the next round
}

var cellClickEvent = function(id) {
	if (firstMove) {
		setX(id);
		firstMove = false;
		previous = x;
	} else if (previous === x) {
		previous = o;
		setO(id);
	} else {
		previous = x;
		setX(id);
	}
}

var setX = function(id) {
	if(!isOccupied(id)) {
		var element = document.getElementById(id);
		element.innerHTML = x;
		setState(id, x);
	} else {
		alert('square ' + id + ' is occupied, try a different square');
	}
}

var setO = function(id) {
	if(!isOccupied(id)) {
		var element = document.getElementById(id);
		element.innerHTML = o;
		setState(id, o);
	} else {
		alert('square ' + id + ' is occupied, try a different square');
	}
}

var isOccupied = function(id) {
	debugger;
	var stateLocationArray = mapping[id]; // eg [0,1]
	var includes = state[stateLocationArray[0]][stateLocationArray[1]];

	if(includes) {
		return true;
	}
	return false;
}

var setState = function(id, letter) {
	var stateLocationArray = mapping[id];// eg [0,1]
	state[stateLocationArray[0]][stateLocationArray[1]] = letter;

	checkForWinner();
}

var displayWinner = function(winner) {
	var element = document.getElementById("winner");
	element.innerHTML = 'The winner is ' + winner;

	previousWinner = winner;
}

var checkForWinner = function() {
	// look for 3 in a row,
	var rowsWinner = checkRows();
	if (rowsWinner) {
		displayWinner(rowsWinner);
	}
	// either diagonally,
	var majDiagonal = checkMajorDiagonal();
	if(majDiagonal) {
		displayWinner(majDiagonal);
	}
	var minorDiagonal = checkMinorDiagonal()
	if(minorDiagonal) {
		displayWinner(minorDiagonal);
	}
	// horizontally
	var columns = checkColumns();
	if(columns) {
		displayWinner(columns);
	}
	// check to see if the board is full.
	var isFull = isBoardFull();
	if(isFull) {
		alert('the board is full');
	}
};

var checkRows = function() {
	var row0 = checkRow(0);
	if (row0) {
		return row0;
	}
	var row1 = checkRow(1);
	if(row1) {
		return row1;
	}
	var row2 = checkRow(2);
	if(row2) {
		return row2
	}

	return false;
};

var checkRow = function(row) {
	var xCount = 0;
	var oCount = 0;
	state[row].forEach(function(letter){
		if(letter === x) {
			xCount += 1;
		}
		if(letter === o) {
			oCount += 1;
		}
	});

	if(xCount === 3) {
		return x;
	}
	if(oCount === 3) {
		return o;
	}
	return null;
}

var checkMajorDiagonal = function() {
	var zero = state[0][0];
	var one = state[1][1];
	var two = state[2][2];

	if(zero === one && one === two) {
		return zero;
	}
	return null;
}

var checkMinorDiagonal = function() {
	var zero = state[0][2];
	var one = state[1][1];
	var two = state[2][0];

	if(zero === one && one === two) {
		return zero;
	}
	return null;
}

var checkColumns= function() {
	var col0 = checkColumn(0);
	if(col0) {
		return col0
	}
	var col1 = checkColumn(1);
	if(col1) {
		return col1;
	}
	var col2 = checkColumn(2);
	if(col2) {
		return col2;
	}
	return null;
}

var checkColumn = function(col) {
	var zero = state[0][col];
	var one = state[1][col];
	var two = state[2][col];

	if(zero === one && one === two) {
		return zero;
	}
	return null;
}

var isBoardFull = function() {
	var occupied = 0;
	state.forEach(function(row){
		row.forEach(function(col){
			occupied += 1;
		})
	})
	if(occupied === 9) {
		return true;
	}
	return false;
}

