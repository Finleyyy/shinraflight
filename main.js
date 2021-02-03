import MainMenu from './scenes/mainMenu.js';
import ShopScene from './scenes/shopScene.js';

let mainMenu = new MainMenu();
let shopScene = new ShopScene();

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600
};

let game = new Phaser.Game(config);
game.scene.add('MainMenu', mainMenu);
game.scene.add('ShopScene', shopScene);
game.scene.start('MainMenu');
//game.scene.start('ShopScene');
