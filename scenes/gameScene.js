class GameScene extends Phaser.Scene {
	constructor() {
		super({ key: 'GameScene' });
	}

	preload() {
		this.load.image('game_background_image', 'assets/images/gameBackground.jpg');
			this.load.spritesheet('dude', 
        		'assets/images/dude.png',
        		{ frameWidth: 32, frameHeight: 48 }
    		);
		this.load.image('fire', 'assets/images/muzzleflash3.png');
	}

	create() {


		let gameW = this.sys.game.config.width;
		let gameH = this.sys.game.config.height;
		let worldSizeW = gameW*2;		


		let background = this.add.sprite(0, 0, 'game_background_image');
		background.setOrigin(0, 0);
	
		let player = this.physics.add.sprite(100, 300, 'dude');

		player.setBounce(0);
		player.setCollideWorldBounds(true);

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'turn',
			frames: [{ key: 'dude', frame: 4 }],
			frameRate: 20
		});

		this.anims.create({
			key: 'right',	
			frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		});

		player
    .setInteractive({ draggable: true })
    .on('dragstart', function(pointer, dragX, dragY){
        // ...
    })
    .on('drag', function(pointer, dragX, dragY){
        player.setPosition(dragX, dragY);
    })
    .on('dragend', function(pointer, dragX, dragY, dropped){
        // ...
    })

		let particles = this.add.particles('fire');

    		let emitter = particles.createEmitter({
        		alpha: { start: 0.8
, end: 0 },
        		scale: { start: 0.5, end: 2 },
        		//tint: { start: 0xff945e, end: 0xff945e },
        		speed: 50,
        		accelerationY: 	300,
        		angle: { min: -85, max: -95 },
        		rotate: { min: -180, max: 180 },
        		lifespan: { min: 1000, max: 1100 },
        		blendMode: 'ADD',
        		frequency: 100,
        		maxParticles: 1000
    });
		emitter.startFollow(player, 0, 45, true);
	
		this.cameras.main.setBounds(0, 0, gameW, gameH);
		this.cameras.main.startFollow(player, true, 0.5, 0.5);
	}

}
export default GameScene;
