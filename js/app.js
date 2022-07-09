/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 
let game;

//Start a new game if the 'start game' button is clicked.
document.getElementById("btn__reset").addEventListener("click", (e)=> {
	game = new Game();
	game.startGame(); 
});

//Handle when someone clicks the letter buttons
document.getElementById("qwerty").addEventListener("click", (e)=> {
	if (e.target.className == "key") {
		game.handleInteraction(e.target);
	}		
});

//Handle when using the keyboard
document.addEventListener("keydown", (e) => {
	//Check if game is playing so that you cant play while overlay is up.
	if (game.playing) {
		let key = e.key;
		let keybtn;
		//Check that key is a letter between a-z
		if(/[a-z]/.test(key)) {
		//find the related button
		for (let k of document.querySelectorAll(".key")) {
			if (k.textContent === key) {
				keybtn = k;
				break;
			}
		}
		//Only handle it if the button is not already disabled
		if (keybtn) 
			game.handleInteraction(keybtn);
		}
	}
});