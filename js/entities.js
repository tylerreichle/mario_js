import Sprite from './sprite';
import Mario from './mario';

class Entities {
  init(data) {
    const background = {
      sprite: new Sprite(data.spriteSheet, 5, 79, 3392, 225),
      x: 0,
      y: 0,
      w: 3392,
      h: 600
    };

    const mario = new Mario(data.spriteSheet, 30, 0, 24, 32);

    data.entities = {};
    data.entities.background = background;
    data.entities.mario = mario;
    data.entities.walls = [];

    wallLocations.forEach(wallLocation => {
      data.entities.walls.push(
        this.wall(
          wallLocation[0], wallLocation[1],
          wallLocation[2], wallLocation[3]
        )
      );
    });
  }

  wall(x, y, w, h) {
    return {
      type: 'wall',
      x: x,
      y: y,
      w: w,
      h: h
    };
  }
}

export default Entities;

const wallLocations = [
  [-10, 533, 3410, 72], // ground
  [-50, 533, 50, 200],
  [1050, 533, 79.9, 77.55]
];
