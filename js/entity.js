import Sprite from './sprite';

class Entity {
  constructor(type, sprite, xPos, yPos, width, height) {
    this.type = type;
    this.sprite = sprite;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }

  // has sprite
  // extends sprite?
  // includes xPos, yPos, width, height

}

export default Entity;

// init(data) {
//   const background = {
//     sprite: new Sprite(data.spriteSheet, 5, 79, 3392, 225),
//     x: 0,
//     y: 0,
//     w: 3392,
//     h: 600
//   };
//
//   const mario = new Mario(data.spriteSheet, 30, 0, 24, 32);
//
//   data.entities = {};
//   data.entities.background = background;
//   data.entities.mario = mario;
//   data.entities.walls = [];
// }
