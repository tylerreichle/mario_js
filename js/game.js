import Render from './render';
import Input from './input';
import { animation } from './animation';
import { movement } from './movement';
import { physics } from './physics';
import Mario from './mario';
import Goomba from './goomba';

import { levelOne } from './level_1-1';
import mapBuilder from './map_builder';

class Game {
  constructor() {
    this.render = new Render;
    this.input = new Input;
  }

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

    let spriteSheet = new Image();
    spriteSheet.src = './assets/sprites/spritesheet.png';

    spriteSheet.addEventListener('load', () => {

      const data = {
        animationFrame: 0,
        spriteSheet: spriteSheet,
        canvas: canvas,
      };

      const mario = new Mario(spriteSheet, 30, 0, 16, 16);
      const goomba = new Goomba(spriteSheet, 100, 0, 16, 16);

      // backgroundMusic.play();
      this.input.init(data);

      data.entities = {};
      data.entities.mario = mario;
      data.entities.goombas = [goomba];
      window.data = data;

      this.render.init(data);
      this.run(data);
    });
  }

  run(data) {
    const loop = () => {
      this.input.update(data);

      animation.update(data);
      movement.update(data);
      physics.update(data);
      
      this.updateView(data);
      this.render.update(data);

      data.animationFrame++;

      window.requestAnimationFrame(loop);
    };

    loop();
  }

  updateView(data) {
    // const wrapper = document.getElementById('wrapper');
    // wrapper.scrollLeft += 1.3;
  }
}

const game = new Game;
game.init();
