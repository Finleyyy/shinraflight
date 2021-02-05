class GameScene extends Phaser.Scene {
	constructor() {
		super({key: 'GameScene'});
	}

	preload() {
		this.load.image('game_background_image', 'assets/images/gameBackground.jpg');
	}

	create() {
		let background = this.add.sprite(0, 0, 'game_background_image');
		background.setOrigin(0, 0);
	}
}
export default GameScene;
