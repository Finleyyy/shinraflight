class ShopScene extends Phaser.Scene {
	constructor() {
		super({key: 'ShopScene'});
	}

	preload() {
		this.load.image('shop_background_image', 'assets/images/shop_background.jpeg');
	}

	create() {
		let background = this.add.sprite(0, 0, 'shop_background_image');
		background.setOrigin(0, 0);
	}
}
export default ShopScene;
