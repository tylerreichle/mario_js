import Entities from './entities';
import Render from './render';

class Game {
  init() {
    const entities = new Entities;
    const render = new Render;

    const bgCanvas = document.getElementById('bg-canvas');
    const fgCanvas = document.getElementById('fg-canvas');

    const canvas = {
      bgCanvas: bgCanvas,
      fgCanvas: fgCanvas,
      bgCtx: bgCanvas.getContext('2d'),
      fgCtx: bgCanvas.getContext('2d')
    };

    const backgroundMusic = new Audio('./assets/sounds/music/underground_theme.mp3');
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
      // Input.init(data);
      entities.init(data);
      render.init(data);
      this.init(data);
    });
  }

  run(data) {
    const loop = () => {
      Game.input(data);
      Game.update(data);
      Game.render(data);

      data.animationFrame++;
      window.requestAnimationFrame(loop);
    };

    loop();
  }

  // input(data) {
  //   Input.update(data);
  // }
  //
  // update(data) {
  //   Animation.update(data);
  //   Movement.update(data);
  //   Physics.update(data);
  // }
  //
  render(data) {
    Render.update(data);
  }
}

const game = new Game;
game.init();
