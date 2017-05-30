import Entities from './entities';
import Render from './render';
import Input from './input';
import Animation from './animation';
import Movement from './movement';

class Game {
  constructor() {
    this.entities = new Entities;
    this.render = new Render;
    this.input = new Input;
    this.animation = new Animation;
    this.movement = new Movement;
  }

  init() {
    const bgCanvas = document.getElementById('bg-canvas');
    const fgCanvas = document.getElementById('fg-canvas');

    const canvas = {
      bgCanvas: bgCanvas,
      fgCanvas: fgCanvas,
      bgCtx: bgCanvas.getContext('2d'),
      fgCtx: bgCanvas.getContext('2d')
    };

    const backgroundMusic = new Audio('./assets/audio/music/underground_theme.mp3');
    backgroundMusic.loop = true;

    let spriteSheet = new Image();
    spriteSheet.src = './assets/sprites/sprite_sheet.png';

    spriteSheet.addEventListener('load', () => {

      const data = {
        animationFrame: 0,
        spriteSheet: spriteSheet,
        canvas: canvas
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
      this.render.update(data);

      data.animationFrame++;
      window.requestAnimationFrame(loop);
    };

    loop();
  }
}

const game = new Game;
game.init();
