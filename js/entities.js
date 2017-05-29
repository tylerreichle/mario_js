import Sprite from './sprite';

class Entities {
  init(data) {
    const background = {
      sprite: new Sprite(data.spriteSheet, 0, 35, 256, 200),
      x: 0,
      y: 0,
      w: 768,
      h: 600
    };

    data.entities = {};
    data.entities.background = background;
  }
}

export default Entities;
