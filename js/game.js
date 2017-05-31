import Entities from './entities';
import Render from './render';
import Input from './input';
import Animation from './animation';
import Movement from './movement';
import Physics from './physics';

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
        movement: false
      };

      // backgroundMusic.play();
      this.input.init(data);
      this.entities.init(data);
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
    // view = 380

    const wrapper = document.getElementById('wrapper');
    const mario = data.entities.mario;

    if (data.movement) {
      if (mario.direction === 'left') {
        wrapper.scrollLeft -= mario.velX * 2.3;
      } else {
        wrapper.scrollLeft += mario.velX * 2.3;
      }
    }
  }
}

const game = new Game;
game.init();
