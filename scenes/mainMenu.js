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

		const startbutton = this.add.text(375, 200, 'Start!', { fill: '#0f0' })
		.setInteractive()
		.on('pointerdown', () => { this.scene.start('GameScene') });
		
		const shopButton = this.add.text(375, 350, 'Shop!', { fill: '#0f0' })
                .setInteractive()
                .on('pointerdown', () => { this.scene.start('ShopScene') });
	}
}
export default MainMenu;
