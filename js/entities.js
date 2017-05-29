import Sprite from '.sprite';

class Entities {
  init(data) {
    var background = {
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
