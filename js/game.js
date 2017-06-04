import { render }    from './util/render';
import { input }     from './util/input';
import { animation } from './util/animation';
import { movement }  from './util/movement';
import { physics }   from './util/physics';

import { levelOne } from './map/level_1-1';
import MapBuilder from './map/map_builder';

import Mario  from './entities/mario';
import Sprite from './entities/sprite';
import Goomba from './entities/goomba';
import Koopa from './entities/koopa';
import Mushroom from './entities/mushroom';
import Score  from './entities/score';

// COLISSIONS. STOMP IF MARIO IS COMING DOWN. Y VEL > 0

// extras: animate blocks. mario duck/run. breakable blocks when large

class Game {
  init() {
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');
    ctx.scale(2, 2);

    const canvas = {
      canvas: canvasEl,
      ctx: ctx
    };

    const viewport = {
      width: 760,
      height: 600,
      vX: 0,
      vY: 0
    };

    const backgroundMusic =
    new Audio('./assets/audio/music/underground_theme.mp3');
    backgroundMusic.loop = true;

    const spriteSheet = new Image();
    spriteSheet.src = './assets/sprites/spritesheet.png';

    const tileset = new Image();
    tileset.src = './assets/sprites/tileset_gutter.png';

    spriteSheet.addEventListener('load', () => {

      const data = {
        animationFrame: 0,
        spriteSheet: spriteSheet,
        canvas: canvas,
        viewport: viewport,
        mapBuilder: new MapBuilder(levelOne, tileset, spriteSheet),
        entities: {},
        sounds: {
          breakSound: new Audio('./assets/audio/sounds/break_block.wav')
        },
        userControl: true,
        reset: this.reset
      };

      const mario = new Mario(spriteSheet, 30, 0, 16, 16);
      const score = new Score(290, 30);
      // backgroundMusic.play();

      input.init(data);
      data.entities.mario = mario;
      data.entities.score = score;
      data.entities.coins = [];
      data.entities.mushrooms = [];
      data.entities.goombas = [];
      data.entities.koopas = [];

      // levelOne.koopas.forEach(koopa => {
      //   data.entities.koopas.push(
      //     new Koopa(spriteSheet,
      //       koopa[0], koopa[1], koopa[2], koopa[3])
      //   );
      // });

      // levelOne.goombas.forEach(goomba => {
      //   data.entities.goombas.push(
      //     new Goomba(spriteSheet,
      //       goomba[0], goomba[1], goomba[2], goomba[3])
      //   );
      // });

      render.init(data);
      this.run(data);
    });
  }

  run(data) {
    const loop = () => {
      input.update(data);
      animation.update(data);
      movement.update(data);
      physics.update(data);

      this.updateView(data);
      render.update(data);

      data.animationFrame++;
      window.requestAnimationFrame(loop);
    };

    loop();
  }

  updateView(data) {
    const viewport = data.viewport;
    const margin = viewport.width / 4;
    const center = {
      x: data.entities.mario.xPos + (data.entities.mario.width  * 0.5),
      y: data.entities.mario.yPos + (data.entities.mario.height * 0.5)
    };

    if (center.x < viewport.vX + margin * 2) {
      viewport.vX = Math.max(center.x - margin, 0);
    } else if (center.x > viewport.vX + viewport.width - margin * 2) {
      viewport.vX =
      Math.min(center.x + margin - viewport.width, 3400 - viewport.width);
    }

    if (center.y < viewport.vY + margin) {
      viewport.vY = Math.max(center.y - margin, 0);
    } else if (center.y > viewport.vY + viewport.height - margin) {
      viewport.vY =
      Math.min(center.y + margin - viewport.height, 800 - viewport.height);
    }
  }

  reset() {
    location.reload();
  }
}

const game = new Game;
game.init();
