var gameScene = new Phaser.Game("game");

var player;
var screws;
var enemies;
var platforms;
var cursors;
var score = 0;
var scorText;
var gameOver=false;


gameScene.preload = function(){

};


gameScene.create = function(){
	
};


gameScene.update = function(){

	this.physics.pause();

	let exitButton = this.add.sprite(200, 250, "exitButton").setInteractive();
	exitButton.setOrigin(0.5, 0.5);

	exitButton.on("pointerdown", function() {
		this.scene.start("Level01");
	}, this);

	this.scene.start("homeScene");

};

