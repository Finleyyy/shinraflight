class MainMenu extends Phaser.Scene {
	constructor() {
		super({key: 'MainMenu'});
	}

	preload() {
		this.load.image('background_image', 'assets/images/background.jpg');
	}

	create() {
		let background = this.add.sprite(0, 0, 'background_image');
		background.setOrigin(0, 0);
	}
}
export default MainMenu;
