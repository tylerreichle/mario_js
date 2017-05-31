import Sprite from './sprite';
import Mario from './mario';

class Entities {
  init(data) {
    const background = {
      sprite: new Sprite(data.spriteSheet, 5, 79, 3400, 225),
      x: 0,
      y: 0,
      w: 760,
      h: 600
    };

    const mario = new Mario(data.spriteSheet, 5, 5, 64, 64);

    data.entities = {};
    data.entities.background = background;
    data.entities.mario = mario;
  }
}

export default Entities;
