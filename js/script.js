var player1 = [];
var player2 = [];
var turn = 0;
var victory = [[1, 2, 3], 
							 [4, 5, 6],
							 [7, 8, 9],
							 [1, 4, 7],
							 [2, 5, 8],
							 [3, 6, 9],
							 [1, 5, 9],
							 [3, 5, 7]];

game = {
	checkForWin: function(player) {
		var player;
		var win_array;

		if (turn % 2 === 0) {
			player = "Player 1"
			win_array = player1
		} else {
			console.log("Player 2 turns")
			player = "Player 2"
			win_array = player2
		}

		for (var i = 0; i < victory.length; i++) {
			var count = 0;
			for (var j = 0; j < win_array.length; j++) {
					

				if (victory[i].includes(win_array[j])) {
					count += 1;
					console.log("victory " + victory[i])
					console.log(player + " " + win_array[j])
					console.log("count " + count)
					if (count === 3) {
						alert(player + " WINS");
					}
				}
			}
		}
	}
}

$(function() {
	$(".cell").one("click", function() {
		if (turn % 2 === 0) {
			$(this).html("X");
			player1.push($(this).data("value"));
		} else {
			$(this).html("0");
			player2.push($(this).data("value"));
		}

		game.checkForWin(player1);
		turn++
	})	
})