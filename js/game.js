import { render } from './util/render';
import { input } from './util/input';
import { animation } from './util/animation';
import { movement } from './util/movement';
import { physics } from './util/physics';

import Mario from './entities/mario';
import Goomba from './entities/goomba';
import Koopa from './entities/koopa';
import Coin from './entities/coin';
import Score from './entities/score';

// finish: better hitboxes. mushrooms growing. damage.
// create random spawns. endless. design obstacles to spawn. speed increases!
// distance measure. score. invisible wall on left edge. game reset

// why mario no animate
// score: = pos/rel position. move with jquery
// extras: animate blocks

class Game {
  init() {
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');
    ctx.scale(2, 2);

    const canvas = {
      canvas: canvasEl,
      ctx: ctx
    };

    const backgroundMusic =
      new Audio('./assets/audio/music/underground_theme.mp3');
    backgroundMusic.loop = true;

    const spriteSheet = new Image();
    spriteSheet.src = './assets/sprites/spritesheet.png';

    spriteSheet.addEventListener('load', () => {

      const data = {
        animationFrame: 0,
        spriteSheet: spriteSheet,
        canvas: canvas,
        entities: {},
        control: true
      };

      const mario = new Mario(spriteSheet, 30, 0, 16, 16);
      const score = new Score(290, 70);

      const goomba = new Goomba(spriteSheet, 100, 0, 16, 16);
      const koopa = new Koopa(spriteSheet, 200, 0, 16, 24);
      const coin = new Coin(spriteSheet, 170, 170, 10, 14);
      // backgroundMusic.play();
      input.init(data);

      data.entities.mario = mario;
      data.entities.score = score;
      data.entities.coins = [coin];
      data.entities.goombas = [goomba];
      data.entities.koopas = [koopa];

      window.data = data;

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
    // scroll window
    if (data.control) {
      const wrapper = document.getElementById('wrapper');
      // move score with screen
      // data.entities.score.xPos = $(wrapper).scrollLeft();
      wrapper.scrollLeft += 1.3;
    }
  }
}

const game = new Game;
game.init();
