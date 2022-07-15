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
	game.handleInteraction(e.target);
});

//Handle when using the keyboard
document.addEventListener("keydown", (e) => {
	//Check if game is playing so that you cant play while overlay is up.
	if (game && game.playing) {
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
		// if we have found the element tied to the key.
		if (keybtn) 
			game.handleInteraction(keybtn);
		}
	}
});