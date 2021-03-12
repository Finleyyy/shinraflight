
import VirtualJoyStickPlugin from '../../plugins/virtualjoystick-plugin.js';
import MainMenu from './scenes/mainMenu.js';
import ShopScene from './scenes/shopScene.js';
import GameScene from './scenes/gameScene.js';

let mainMenu = new MainMenu();
let shopScene = new ShopScene();
let gameScene = new GameScene();


let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    plugins: {
        global: [{
            key: 'rexVirtualJoyStick',
            plugin: VirtualJoyStickPlugin,
            start: true
        }]
    }
};

let game = new Phaser.Game(config);
game.scene.add('MainMenu', mainMenu);
game.scene.add('ShopScene', shopScene);
game.scene.add('GameScene', gameScene);
game.scene.start('MainMenu');

