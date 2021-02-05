import MainMenu from './scenes/mainMenu.js';
import ShopScene from './scenes/shopScene.js';
import GameScene from './scenes/gameScene.js';

let mainMenu = new MainMenu();
let shopScene = new ShopScene();
let gameScene = new GameScene();


let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600
};

let game = new Phaser.Game(config);
game.scene.add('MainMenu', mainMenu);
game.scene.add('ShopScene', shopScene);
game.scene.add('GameScene', gameScene);
game.scene.start('MainMenu');

