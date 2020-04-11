// GamePlayManager = {
	
// 	init: function(){
// 		console.log("init");
// 	}

// 	/*Carga todos los recursos*/
// 	preload: function(){
// 		console.log("preload");
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


/*Variable del canvas.*/
const vgcanvas = "videogamecontainer";
//var ctx = vgcanvas.getContext("2d");

// ctx.msImageSmoothingEnabled = false;
// ctx.mozImageSmoothingEnabled = false;
// ctx.webkitImageSmoothingEnabled = false;
// ctx.imageSmoothingEnabled = false;

const canvasWidth = 1024;
const canvasHeight = 600;


/*Variable de configuracion del juego.*/
var config = {

	/*Tipo de render*/
	type: Phaser.AUTO,

	/*Medidas del canvas*/
	width: canvasWidth,
	height: canvasHeight,

	/*Container*/
	parent: vgcanvas,

	/*Antialising de pixels.*/
	antialias: false,

	/*Motor de fisica.*/
	physics: {
		default: "arcade",
		arcade: {
			gravity: {x: 0, y: 300},
			debug: false
		}
	},

	/*Funciones principales*/
	scene: {
		init: init,
        preload: preload,
        create: create,
        update: update
	},

	/*Escala de escena.*/
	scale: {
		//canvas: vgcanvas,
		autoCenter: Phaser.Scale.CENTER_BOTH
	}
}


/*Inicializacion de variable del juego.*/
var game = new Phaser.Game(config);

//this.game.scale.pageAlignHorizontally = true;
//this.game.scale.pageAlignVertically = true;
//this.game.scale.refresh();


/*Declaracion de variables.*/
var worldBoundsWidth = 1600;
var worldBoundsHeight = 600;

var background; 
var decoration;
var platforms; 

var player;
var cursors;
var screws;
var enemy;

var score = 0;
var scoreText;

var vgmusic;

var gameOver = false;
var startGame = false;

var isPlayerLeft = false;
var playerVelocityX = 128;
var playerVelocityY = 340;

var isPlayerCrouch = false;
var isPlayerFall = false;
var isPlayerOnAir = false;

//var camera
var cameraBoundWidth = 1024;
var cameraBoundHeight = 600;
var cameraStepX = 2;
var cameraStepY = 4;

var isPlayerDead = false;
var isPlayerFiring = false;
//var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


/*Funcion inicial*/
function init(){
	//console.log("init");

	//alert("Game!");
}


/*Carga todos los recursos*/
function preload(){

	//console.log("preload");

	/*Carga de los archivos de imagen.*/
	this.load.image("background", "../Sprite_Files/Scenarios/Background/background.png");
	this.load.image("decoration", "../Sprite_Files/Scenarios/Background/decoration.png");
	this.load.image("ground", "../Sprite_Files/Scenarios/Background/ground_01.png");
	this.load.image("platform", "../Sprite_Files/Scenarios/Background/platform_01.png");


	/*Carga de los spritesheets.*/
	this.load.spritesheet("Eric", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet.png", {frameWidth: 32, frameHeight: 48});
	//this.load.json("Eric", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet.png", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet.json");

	this.load.spritesheet("Eric_2", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet_2.png", {frameWidth: 32, frameHeight: 48});
	//this.load.json("Eric_2", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet_2.png", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet_2.json");

	this.load.spritesheet("Assets", "../Sprite_Files/Assets/Spritesheet/Assets_Spritesheet.png", {frameWidth: 32, frameHeight: 32});
	//this.load.json("Assets", "../Sprite_Files/Assets/Spritesheet/Assets_Spritesheet.png", "../Sprite_Files/Assets/Spritesheet/Assets_Spritesheet.json");

	this.load.spritesheet("BallBot", "../Sprite_Files/Enemies/Spritesheet/BallBot_Spritesheet.png", {frameWidth: 33, frameHeight: 38});
	//this.load.json("BallBot", "../Sprite_Files/Enemies/Spritesheet/BallBot_Spritesheet.png", "../Sprite_Files/Enemies/Spritesheet/BallBot_Spritesheet.json");

	this.load.spritesheet("ClawBot", "../Sprite_Files/Enemies/Spritesheet/ClawBot_Spritesheet.png", {frameWidth: 41, frameHeight: 26});
	//this.load.json("ClawBot", "../Sprite_Files/Enemies/Spritesheet/ClawBot_Spritesheet.png", "../Sprite_Files/Enemies/Spritesheet/ClawBot_Spritesheet.json");

	this.load.spritesheet("GunBot", "../Sprite_Files/Enemies/Spritesheet/GunBot_Spritesheet.png", {frameWidth: 66, frameHeight: 46});
	//this.load.json("GunBot", "../Sprite_Files/Enemies/Spritesheet/GunBot_Spritesheet.png", "../Sprite_Files/Enemies/Spritesheet/GunBot_Spritesheet.json");


	/*Carga los archivos de musica y sonidos FX.*/
	this.load.audio("music", "../Audio_Files/Music/Quirky-Runner_Looping.mp3");

	this.load.audio("Clank_01", "../Audio_Files/SFX/Clank_1.mp3");
	this.load.audio("Clank_02", "../Audio_Files/SFX/Clank_2.mp3");
	this.load.audio("Clank_03", "../Audio_Files/SFX/Clank_3.mp3");
	this.load.audio("Clank_04", "../Audio_Files/SFX/Clank_4.mp3");
	this.load.audio("Clank_05", "../Audio_Files/SFX/Clank_5.mp3");
	this.load.audio("Clank_06", "../Audio_Files/SFX/Clank_6.mp3");
	this.load.audio("Clank_07", "../Audio_Files/SFX/Clank_7.mp3");
	this.load.audio("Clank_08", "../Audio_Files/SFX/Clank_8.mp3");
	this.load.audio("Clank_09", "../Audio_Files/SFX/Clank_9.mp3");
	this.load.audio("Clank_10", "../Audio_Files/SFX/Clank_10.mp3");

	this.load.audio("Laser-Ricochet1", "../Audio_Files/SFX/Laser-Ricochet1.mp3");
	this.load.audio("Laser-Ricochet2", "../Audio_Files/SFX/Laser-Ricochet2.mp3");
	this.load.audio("Laser-Ricochet3", "../Audio_Files/SFX/Laser-Ricochet3.mp3");

	this.load.audio("Laser-Shot1", "../Audio_Files/SFX/Laser-Shot1.mp3");
	this.load.audio("Laser-Shot2", "../Audio_Files/SFX/Laser-Shot2.mp3");
	this.load.audio("Laser-Shot3", "../Audio_Files/SFX/Laser-Shot3.mp3");

	this.load.audio("RezAlert1", "../Audio_Files/SFX/RezAlert1.mp3");
	this.load.audio("RezAlert2", "../Audio_Files/SFX/RezAlert2.mp3");
	this.load.audio("RezAlert3", "../Audio_Files/SFX/RezAlert3.mp3");
	this.load.audio("RezAlert4", "../Audio_Files/SFX/RezAlert4.mp3");

	this.load.audio("Robot-Footstep_1", "../Audio_Files/SFX/Robot-Footstep_1.mp3");
	this.load.audio("Robot-Footstep_2", "../Audio_Files/SFX/Robot-Footstep_2.mp3");
	this.load.audio("Robot-Footstep_3", "../Audio_Files/SFX/Robot-Footstep_3.mp3");
	this.load.audio("Robot-Footstep_4", "../Audio_Files/SFX/Robot-Footstep_4.mp3");
	this.load.audio("Robot-Footstep_5", "../Audio_Files/SFX/Robot-Footstep_5.mp3");
	this.load.audio("Robot-Footstep_6", "../Audio_Files/SFX/Robot-Footstep_6.mp3");
	this.load.audio("Robot-Footstep_7", "../Audio_Files/SFX/Robot-Footstep_7.mp3");
	this.load.audio("Robot-Footstep_8", "../Audio_Files/SFX/Robot-Footstep_8.mp3");

}


/*Crea todos los recursos*/
function create(){

	//console.log("create");

	/*Creacion de los limites de la pantalla.*/
	//this.world.setBounds(0, 0, worldBoundsWidth, worldBoundsHeight);


	/*Creacion de las imagenes.*/
	this.background = this.add.image(this.width, this.height, "background");
	this.background.setOrigin(0,0);
	this.background.setScale(2.1);

	this.decoration = this.add.image(this.width, this.height, "decoration");
	this.decoration.setOrigin(0,0);
	this.decoration.setScale(1.97);
	//this.add.image(this.width, 536, "ground").setOrigin(0,0).setScale(1);
	//this.add.image(500, 350, "platform").setOrigin(0,0);


	/*Creacion de los spritesheets en cache.*/
	let spritesheetEric = this.cache.json.get("Eric");
	let spritesheetEric2 = this.cache.json.get("Eric_2");
	let spritesheetAssets = this.cache.json.get("Assets");
	let spritesheetBallBot = this.cache.json.get("BallBot");
	let spritesheetClawBot = this.cache.json.get("ClawBot");
	let spritesheetGunBot = this.cache.json.get("GunBot");


	/*Creacion de la musica y los efectos de sonido.*/
	vgmusic = this.sound.add("music");
	var musicConfig = {
		mute: false,
		volume: 0.0,
		rate: 1,
		detune: 0,
		seek: 0,
		loop: true,
		delay: 0
	}
	vgmusic.play(musicConfig);


	// this.clankSound01 = this.sound.add("Clank_01");
	// this.clankSound02 = this.sound.add("Clank_02");
	// this.clankSound03 = this.sound.add("Clank_03");
	// this.clankSound04 = this.sound.add("Clank_04");
	// this.clankSound05 = this.sound.add("Clank_05");
	// this.clankSound06 = this.sound.add("Clank_06");
	// this.clankSound07 = this.sound.add("Clank_07");
	// this.clankSound08 = this.sound.add("Clank_08");
	// this.clankSound09 = this.sound.add("Clank_09");
	// this.clankSound10 = this.sound.add("Clank_10");

	// this.laserRicoSound01 = this.sound.add("Laser-Ricochet1");
	// this.laserRicoSound02 = this.sound.add("Laser-Ricochet2");
	// this.laserRicoSound03 = this.sound.add("Laser-Ricochet3");

	// this.laserShotSound01 = this.sound.add("Laser-Shot1");
	// this.laserShotSound02 = this.sound.add("Laser-Shot2");
	// this.laserShotSound03 = this.sound.add("Laser-Shot3");

	// this.rezAlertSound01 = this.sound.add("RezAlert1");
	// this.rezAlertSound02 = this.sound.add("RezAlert2");
	// this.rezAlertSound03 = this.sound.add("RezAlert3");
	// this.rezAlertSound04 = this.sound.add("RezAlert4");

	// this.footStepSound01 = this.sound.add("Robot-Footstep_1");
	// this.footStepSound02 = this.sound.add("Robot-Footstep_2");
	// this.footStepSound03 = this.sound.add("Robot-Footstep_3");
	// this.footStepSound04 = this.sound.add("Robot-Footstep_4");
	// this.footStepSound05 = this.sound.add("Robot-Footstep_5");
	// this.footStepSound06 = this.sound.add("Robot-Footstep_6");
	// this.footStepSound07 = this.sound.add("Robot-Footstep_7");
	// this.footStepSound08 = this.sound.add("Robot-Footstep_8");


	//this.beamSound = this.sound.add("Laser-Shot1");
	//this.pickupSound = this.sound.add("RezAlert1");


	/*Creacion de las instancias de suelo y plataformas fisicas.*/
	platforms = this.physics.add.staticGroup();

	platforms.create(0, 536, "ground").setOrigin(0,0).refreshBody();

	platforms.create(0, 352, "platform").setOrigin(0,0).refreshBody();
	platforms.create(500, 352, "platform").setOrigin(0,0).refreshBody();
	platforms.create(628, 352, "platform").setOrigin(0,0).refreshBody();
	platforms.create(250, 280, "platform").setOrigin(0,0).refreshBody();
	platforms.create(896, 240, "platform").setOrigin(0,0).refreshBody();


	/*Creacion de instancia jugador.*/
	player = this.physics.add.sprite(200, 192, "Eric", 0);


	/*Propiedades fisicas de jugador.*/
	player.setBounce(0.1);
	//this.player.gravity.y = 300;
	//this.player.body.setGravityY(300);
	player.setCollideWorldBounds(true);
	//player.body.onWorldBounds = true;


	/*Escalado de jugador.*/
	player.setScale(2);

	
	//player.body.setSize(16, 40, 0, 0, false);
	//player.anchor.setTo(0.5, 1);
	player.body.setOffset(8, 8);
	//player.body.reset();
	player.body.setSize(12, 40, false);
	

	/*Creacion de colisiones del jugador.*/
	//this.physics.add.collider(player, ground);
	this.physics.add.collider(player, platforms);


	/*Creacion de assets.*/
    screws = this.physics.add.group({
        key: "Assets",
        repeat: 14,
        setXY: { x: 20, y: 0, stepX: 70 }
    });

    screws.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
    });


    /*Creacion de colisiones de los assets.*/
	this.physics.add.collider(screws, platforms);
	this.physics.add.overlap(player, screws, collectScrew, null, this);


	/*Creacion de las animaciones del personaje.*/
	/*Agacharse.*/
	this.anims.create({
		key: "crouchleft",
		frames: [ { key: "Eric", frame: 5 } ],
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
		key: "standleft",
		frames: this.anims.generateFrameNumbers("Eric", {start: 5, end: 9}),
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
		key: "crouchright",
		frames: [ { key: "Eric", frame: 15 } ],
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
		key: "standright",
		frames: this.anims.generateFrameNumbers("Eric", {start: 15, end: 19}),
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
        key: "turncrouchleft",
        frames: [ { key: "Eric", frame: 15 } ],
        frameRate: 2,
        repeat: 0
    });

    this.anims.create({
        key: "turncrouchright",
        frames: [ { key: "Eric", frame: 5 } ],
        frameRate: 2,
        repeat: 0
    });


	/*Idle.*/
	this.anims.create({
		key: "idle1left",
		frames: this.anims.generateFrameNumbers("Eric", {start: 20, end: 31}),
		framerate: 1,
		repeat: -1
	});

	this.anims.create({
		key: "idle1right",
		frames: this.anims.generateFrameNumbers("Eric", {start: 32, end: 43}),
		framerate: 1,
		repeat: -1
	});

	this.anims.create({
		key: "idle2left",
		frames: this.anims.generateFrameNumbers("Eric", {start: 44, end: 53}),
		framerate: 2,
		repeat: -1
	});

	this.anims.create({
		key: "idle2right",
		frames: this.anims.generateFrameNumbers("Eric", {start: 54, end: 63}),
		framerate: 2,
		repeat: -1
	});


	/*Saltar.*/
	this.anims.create({
		key: "jumpleft",
		frames: this.anims.generateFrameNumbers("Eric", {start: 65, end: 69}),
		framerate: 4,
		repeat: 0
	});

	this.anims.create({
		key: "onairleft",
		frames: [ { key: "Eric", frame: 69 } ],
		framerate: 4,
		repeat: 0
	});

	this.anims.create({
		key: "fallleft",
		frames: this.anims.generateFrameNumbers("Eric", {start: 69, end: 74}),
		framerate: 4,
		repeat: 0
	});

	this.anims.create({
		key: "jumpright",
		frames: this.anims.generateFrameNumbers("Eric", {start: 77, end: 81}),
		framerate: 4,
		repeat: 0
	});

	this.anims.create({
		key: "onairright",
		frames: [ { key: "Eric", frame: 81 } ],
		framerate: 4,
		repeat: 0
	});

	this.anims.create({
		key: "fallright",
		frames: this.anims.generateFrameNumbers("Eric", {start: 81, end: 86}),
		framerate: 4,
		repeat: 0
	});


	/*Girarse.*/
	this.anims.create({
		key: "turnleft",
		frames: this.anims.generateFrameNumbers("Eric", {start: 88, end: 91}),
		framerate: 4,
		repeat: 0
	});

	this.anims.create({
		key: "turnright",
		frames: this.anims.generateFrameNumbers("Eric", {start: 92, end: 95}),
		framerate: 4,
		repeat: 0
	});


	/*Caminar.*/
	this.anims.create({
		key: "walkleft",
		frames: this.anims.generateFrameNumbers("Eric", {start: 96, end: 109}),
		framerate: 14,
		repeat: 0
	});

	this.anims.create({
		key: "walkright",
		frames: this.anims.generateFrameNumbers("Eric", {start: 110, end: 121}),
		framerate: 14,
		repeat: 0
	});


	/*Disparar y guardar el arma.*/
	this.anims.create({
		key: "fireleft",
		frames: this.anims.generateFrameNumbers("Eric_2", {start: 28, end: 31}),
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
		key: "firingleft",
		frames: this.anims.generateFrameNumbers("Eric_2", {start: 31, end: 34}),
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
		key: "unfireleft",
		frames: this.anims.generateFrameNumbers("Eric_2", {start: 34, end: 37}),
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
		key: "fireright",
		frames: this.anims.generateFrameNumbers("Eric_2", {start: 38, end: 41}),
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
		key: "firingright",
		frames: this.anims.generateFrameNumbers("Eric_2", {start: 41, end: 44}),
		framerate: 2,
		repeat: 0
	});

	this.anims.create({
		key: "unfireright",
		frames: this.anims.generateFrameNumbers("Eric_2", {start: 44, end: 47}),
		framerate: 2,
		repeat: 0
	});


	/*Morir.*/
	this.anims.create({
		key: "deadleft",
		frames: this.anims.generateFrameNumbers("Eric_2", {start: 0, end: 13}),
		framerate: 8,
		repeat: 0
	});

	this.anims.create({
		key: "deadright",
		frames: this.anims.generateFrameNumbers("Eric_2", {start: 14, end: 27}),
		framerate: 8,
		repeat: 0
	});


	/*Animacion de los assets.*/
	this.anims.create({
		key: "screwA",
		frames: this.anims.generateFrameNumbers("Assets", {start: 0, end: 8}),
		framerate: 10,
		repeat: -1
	});

	this.anims.create({
		key: "screwB",
		frames: this.anims.generateFrameNumbers("Assets", {start: 9, end: 17}),
		framerate: 2,
		repeat: -1
	});


	/*Creacion de controles de teclado.*/
	cursors = this.input.keyboard.createCursorKeys();
	this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


	/*Creacion del marcador.*/
	scoreText = this.add.text(16, 16, "Score: 0", { fontFamily: "Verdana", fontSize: "24px", fill: "#fff" });


	/*Opciones de mundo.*/
	//game.world.setBounds(0, 0, 1000, worldBoundsHeight);

	/*Creacion de la camara para seguir al jugador.*/
	//camera = new Phaser.Camera(0, 0, worldBoundsWidth, worldBoundsHeight);
	//camera.setBounds(0, 0, worldBoundsWidth, worldBoundsHeight);
	this.cameras.main.setBounds(0, 0, worldBoundsWidth, worldBoundsHeight);
	this.cameras.main.centerOn(0, 0);
	//this.cameras.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);

}


function collectScrew (player, screw){

    screw.disableBody(true, true);

    /*Puntuacion.*/
    score += 25;
    scoreText.setText("Score: " + score);
}


/*Actualiza la pantalla y el estado del videojuego*/
function update(){

	//console.log("update");
	/*Iniciar animacion de los tornillos.*/
	if (!(startGame)){
		//screw.anims.play("screwB");
		screws.children.iterate(function (child) {
			if (Phaser.Math.Between(0, 1)<0.5){
				child.anims.play("screwA");
			} else {
				child.anims.play("screwB");
			}
    	});
		startGame = true;
	}


	/*Caminar a izquierda y derecha.*/
	if ((cursors.left.isDown) && (isPlayerLeft)){
		player.setVelocityX(-playerVelocityX);
		player.anims.play("walkleft", true);
		//isPlayerLeft = true;

		if ((this.cameras.main.x) < 0 ){
			this.cameras.main.x += cameraStepX;
		}

		console.log("Left: " + isPlayerLeft);
		console.log("CameraX: " + this.cameras.main.x);

	} else if ((cursors.left.isDown) && !(isPlayerLeft)){
		player.setVelocityX(0);
		player.anims.play("turnleft",true);
		isPlayerLeft = true;
		player.setVelocityX(-playerVelocityX);
		player.anims.play("walkleft", true);

		if ((this.cameras.main.x) < 0 ){
			this.cameras.main.x += cameraStepX;
		}

		console.log("Left: " + isPlayerLeft);
		console.log("CameraX: " + this.cameras.main.x);

	} else if ((cursors.right.isDown) && (isPlayerLeft)){
		player.setVelocityX(0);
		player.anims.play("turnright",true);
		isPlayerLeft = false;
		player.setVelocityX(playerVelocityX);
		player.anims.play("walkright", true);

		if ((this.cameras.main.x) > (canvasWidth - worldBoundsWidth)){
			this.cameras.main.x -= cameraStepX;
		}

		console.log("Left: " + isPlayerLeft);
		console.log("CameraX: " + this.cameras.main.x);

	} else if ((cursors.right.isDown) && !(isPlayerLeft)){
		player.setVelocityX(playerVelocityX);
		player.anims.play("walkright", true);
		//isPlayerLeft = false;

		if ((this.cameras.main.x) > (canvasWidth - worldBoundsWidth)){
			this.cameras.main.x -= cameraStepX;
		}

		console.log("Left: " + isPlayerLeft);
		console.log("CameraX: " + this.cameras.main.x);


	} else {

		/*Quedarse quieto.*/
		player.setVelocityX(0);

		if (isPlayerLeft){
			player.anims.play("idle1left", true);
			//isPlayerLeft = true;

		} else {
			player.anims.play("idle1right", true);
			//isPlayerLeft = false;
		}

	}


	/*Agacharse.*/
	if (cursors.down.isDown){

		player.setVelocityX(0);
		isPlayerCrouch = true;


		if (isPlayerLeft){
			player.anims.play("crouchleft", true);
			//player.anims.pause();

		} else {
			player.anims.play("crouchright", true);

		} 

		console.log("Crouch: " + isPlayerCrouch);
		


		/*Girarse agachado.*/
		if ((cursors.left.isDown) && (isPlayerLeft)){
			//console.log("Left: " + isPlayerLeft);

		} else if ((cursors.left.isDown) && (!(isPlayerLeft))){
			player.anims.play("turncrouchleft", true);
			isPlayerLeft = true;

			console.log("Left: " + isPlayerLeft);

		} else if ((cursors.right.isDown) && (isPlayerLeft)){
			player.anims.play("turncrouchright", true);
			isPlayerLeft = false;

			console.log("Left: " + isPlayerLeft);

		} else if ((cursors.right.isDown) && (!(isPlayerLeft))){
			//console.log("Left: " + isPlayerLeft);

		}


	} else {

		/*Levantarse.*/
		if (isPlayerCrouch){

			isPlayerCrouch = false;

			if (isPlayerLeft) {
				player.anims.play("standleft", true);

			} else {
				player.anims.play("standright", true);

			}

			console.log("Crouch: " + isPlayerCrouch);

		}

	}


	/*Saltar.*/
	if (cursors.up.isDown && player.body.touching.down && (isPlayerLeft)){
		player.setVelocityY(-playerVelocityY);
		player.anims.play("jumpleft", true);

		isPlayerOnAir = true;

	} else if (cursors.up.isDown && player.body.touching.down && (!(isPlayerLeft))){
		player.setVelocityY(-playerVelocityY);
		player.anims.play("jumpright", true);

		isPlayerOnAir = true;
	}


	if ((isPlayerOnAir) && (!(isPlayerFall))) {

		if (isPlayerLeft) {
			player.anims.play("onairleft", true);
		} else {
			player.anims.play("onairright", true);
		}
		
	}


	/*Caer.*/
	if (player.body.velocity.y > 0){

		isPlayerFall = true;
		isPlayerOnAir = false;

		if (isPlayerLeft) {
			player.anims.play("fallleft", true);

			console.log("Crouch: " + isPlayerFall);

		} else {
			player.anims.play("fallright", true);

			console.log("Crouch: " + isPlayerFall);
		} 

	} else {
		isPlayerFall = false;
	}


	/*Disparar.*/
	if ((this.spacebar.isDown) && (!(isPlayerFiring))){

		player.setVelocityX(playerVelocityX);
		isPlayerFiring = true;

		if (isPlayerLeft) {
			player.anims.play("fireleft", true);

			console.log("Fire: " + isPlayerFiring);

		} else {
			player.anims.play("fireright", true);

			console.log("Fire: " + isPlayerFiring);
		} 

	} else if ((this.spacebar.isDown) && (isPlayerFiring)){

		if (isPlayerLeft) {
			player.anims.play("firingleft", true);

			console.log("Firing: " + isPlayerFiring);

		} else {
			player.anims.play("firingright", true);

			console.log("Firing: " + isPlayerFiring);
		} 

	} else {

		// if (isPlayerLeft) {
		// 	player.anims.play("unfireleft", true);

		// 	console.log("Unfire: " + isPlayerFiring);

		// } else {
		// 	player.anims.play("unfireright", true);

		// 	console.log("Unfire: " + isPlayerFiring);
		// }

		isPlayerFiring = false;

	}


	//screws.children.anims.play("screwB");

}


/*Actualiza la pantalla y el estado del videojuego. Similar a update.*/
function render(){
	//console.log("render");
}



// game.state.add("gameplay");
// game.state.start("gameplay");
