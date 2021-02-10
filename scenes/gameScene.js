class GameScene extends Phaser.Scene {
	constructor() {
		super({ key: 'GameScene' });
	}

	preload() {
		this.load.image('game_background_image', 'assets/images/gameBackground.jpg');
		this.load.spritesheet('dude', 
        'assets/images/test.png',
        { frameWidth: 32, frameHeight: 48 }
    );
	}

	create() {
		let background = this.add.sprite(0, 0, 'game_background_image');
		background.setOrigin(0, 0);

		player = this.physics.add.sprite(100, 300, 'dude');

		player.setBounce(0.2);
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


	}
}
export default GameScene;
