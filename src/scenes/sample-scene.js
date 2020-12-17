import 'phaser';
import Forest_layer from '../assets/Forest_layer.png';

export default class SampleScene extends Phaser.Scene {
  preload() {
    this.load.image('monkeys',Forest_layer);
  }

  create() {
    this.add.text(100,100, 'Hello Phaser!', {fill: '#0f0'});
    this.add.image(600,400,'monkeys');
  }
}