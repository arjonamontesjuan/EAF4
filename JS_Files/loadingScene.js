
class loadingScene extends Phaser.Scene{

	init(){
		//console.log("init");
		super(loadingScene);
	}


	/*Carga todos los recursos*/
	preload(){
		//console.log("preload");

		this.load.image("background", "../Sprite_Files/Scenarios/Background/background.png");
		this.load.image("decoration", "../Sprite_Files/Scenarios/Background/decoration.png");
		this.load.image("ground", "../Sprite_Files/Scenarios/Background/ground_01.png");
		this.load.image("platform", "../Sprite_Files/Scenarios/Background/platform_01.png");
		this.load.image("screws", "../Sprite_Files/Scenarios/Background/screws.png");

		this.load.spritesheet("Eric", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet.png", {frameWidth: 32, frameHeight: 48});
		this.load.atlasJSONHash("Eric", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet.png", "../Sprite_Files/Characters/Spritesheet/Eric_Spritesheet.json");

		this.load.spritesheet("Assets", "../Sprite_Files/Assets/Spritesheet/Assets_Spritesheet.png", {frameWidth: 32, frameHeight: 32});
		this.load.atlasJSONHash("Assets", "../Sprite_Files/Assets/Spritesheet/Assets_Spritesheet.png", "../Sprite_Files/Assets/Spritesheet/Assets_Spritesheet.json");

		this.load.spritesheet("BallBot", "../Sprite_Files/Enemies/Spritesheet/BallBot_Spritesheet.png", {frameWidth: 33, frameHeight: 38});
		this.load.atlasJSONHash("BallBot", "../Sprite_Files/Enemies/Spritesheet/BallBot_Spritesheet.png", "../Sprite_Files/Enemies/Spritesheet/BallBot_Spritesheet.json");

		this.load.spritesheet("ClawBot", "../Sprite_Files/Enemies/Spritesheet/ClawBot_Spritesheet.png", {frameWidth: 41, frameHeight: 26});
		this.load.atlasJSONHash("ClawBot", "../Sprite_Files/Enemies/Spritesheet/ClawBot_Spritesheet.png", "../Sprite_Files/Enemies/Spritesheet/ClawBot_Spritesheet.json");

		this.load.spritesheet("GunBot", "../Sprite_Files/Enemies/Spritesheet/GunBot_Spritesheet.png", {frameWidth: 66, frameHeight: 46});
		this.load.atlasJSONHash("GunBot", "../Sprite_Files/Enemies/Spritesheet/GunBot_Spritesheet.png", "../Sprite_Files/Enemies/Spritesheet/GunBot_Spritesheet.json");

	}


	/*Crea todos los recursos*/
	create(){
		//console.log("create");

		this.add.image(this.width, this.height, "background").setOrigin(0,0).setScale(2.1);

		this.add.image(this.width, this.height, "decoration").setOrigin(0,0).setScale(1.97);
		//this.add.image(this.width, 536, "ground").setOrigin(0,0).setScale(1);
		//this.add.image(100, 200, "platform").setOrigin(0,0);

		platforms = this.physics.add.staticGroup();

		platforms.create(this.width, 536, "ground").setOrigin(0,0).refreshBody();

		platforms.create(0, 350, "platform").setOrigin(0,0);
		platforms.create(500, 350, "platform").setOrigin(0,0);
		platforms.create(628, 350, "platform").setOrigin(0,0);
		platforms.create(250, 280, "platform").setOrigin(0,0);


		player= this.physics.add.sprite(40, 488, "Eric");

		player.setBounce(0.1);
		//player.gravity.y = 300;
		player.setColliderWorldBounds(true);

		this.anims.create({
			key: "left",
			frames: this.anims.generateFrameNumbers("Eric", {start: 0, end: 3}),
			framerate: 12,
			repeat: -1,
		});

		this.anims.create({
			key: "right",
			frames: this.anims.generateFrameNumbers("Eric", {start: 4, end: 8}),
			framerate: 12,
			repeat: -1,
		});


		this.anims.create({
			key: "turnleft",
			frames: this.anims.generateFrameNumbers("Eric", {start: 9, end: 13}),
			framerate: 4,
		});


		this.anims.create({
			key: "turnright",
			frames: this.anims.generateFrameNumbers("Eric", {start: 14, end: 17}),
			framerate: 4,
		});



	}


	/*Actualiza la pantalla y el estado del videojuego*/
	update(){
		//console.log("update");

		if (gameOver){
			this.scene.manager.queueOp("pause", this.scene.key);
			this.scene.start("gameoverScene");
			return;
		}

	}


	/*Actualiza la pantalla y el estado del videojuego*/
	render(){
		//console.log("render");
	}

}