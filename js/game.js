import Entities from './entity';
import Render from './render';
import Input from './input';
import Animation from './animation';
import Movement from './movement';
import Physics from './physics';
import Mario from './mario';

import { levelOne } from './level_1-1';
import mapBuilder from './map_builder';

class Game {
  constructor() {
    this.entities = new Entities;
    this.render = new Render;
    this.input = new Input;
    this.animation = new Animation;
    this.movement = new Movement;
    this.physics = new Physics;
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

      // backgroundMusic.play();
      this.input.init(data);
      this.entities.init(data);
      data.entities.mario = mario;
      this.render.init(data);
      this.run(data);
    });
  }

  run(data) {
    const loop = () => {
      this.input.update(data);
      this.animation.update(data);
      this.movement.update(data);
      this.physics.update(data);
      this.updateView(data);
      this.render.update(data);

      data.animationFrame++;

      window.requestAnimationFrame(loop);
    };

    loop();
  }

  updateView(data) {
    const wrapper = document.getElementById('wrapper');
    wrapper.scrollLeft += 1.3;
  }
}

const game = new Game;
game.init();
