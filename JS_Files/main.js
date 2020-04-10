// GamePlayManager = {
	
// 	init: function(){
// 		console.log("init");
// 	}

// 	/*Carga todos los recursos*/
// 	preload: function(){
// 		console.log("preload");
// 		this.load.image("Eric_Spritesheet", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet.png");
// 	}

// 	/*Crea todos los recursos*/
// 	create: function(){
// 		console.log("create");
// 	}

// 	/*Actualiza la pantalla y el estado del videojuego*/
// 	update: function(){
// 		console.log("update");
// 	}
// }


var canvas = document.getElementById("videogamecanvas");



/*Variable de configuracion del juego.*/
var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	antialias: false,
	physics: {
		default: "arcade",
		arcade: {
			gravity: {x: 0, y: 300},
			debug: false
		}
	},
	scene: [loadingScene, gameScene],
	title: "Locobots",
	backgroundColor: black,
	scale: {
		parent: "videogamecanvas",
		autoCenter: Phaser.Scale.CENTER_BOTH
	}
};

var game = new Phaser.Game(config);



// game.state.add("gameplay");
// game.state.start("gameplay");

/*Variable del canvas.*/
//var vgcanvas = document.getElementById("videogamecanvas");

/*var ctx = canvas.getContext("2d");*/


// ctx.msImageSmoothingEnabled = false;
// ctx.mozImageSmoothingEnabled = false;
// ctx.webkitImageSmoothingEnabled = false;
// ctx.imageSmoothingEnabled = false;