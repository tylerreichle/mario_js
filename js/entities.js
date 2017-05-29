import Sprite from './sprite';
import Mario from './mario';

class Entities {
  init(data) {
    const background = {
      sprite: new Sprite(data.spriteSheet, 0, 35, 256, 200),
      x: 0,
      y: 0,
      w: 768,
      h: 600
    };

    const mario = new Mario(data.spriteSheet, 60, 0, 64, 64);

    data.entities = {};
    data.entities.background = background;
    data.entities.mario = mario;
  }
}

export default Entities;
