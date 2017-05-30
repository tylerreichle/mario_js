import { Entities } from './entities';
import { Render } from './render';
import { Input } from './input';

const Game = {
  init() {
    const bgCanvas = document.getElementById('bg-canvas');
    const fgCanvas = document.getElementById('fg-canvas');

    const canvas = {
      bgCanvas: bgCanvas,
      fgCanvas: fgCanvas,
      bgCtx: bgCanvas.getContext('2d'),
      fgCtx: fgCanvas.getContext('2d')
    };

    const backgroundMusic = new Audio('./assets/audio/music/underground_theme.mp3');
    backgroundMusic.loop = true;

    var spriteSheet = new Image();
    spriteSheet.src ='./assets/sprites/sprite_sheet.png';

    spriteSheet.addEventListener('load', function() {
      spriteSheet = this;

      var data = {
        animationFrame: 0,
        spriteSheet: spriteSheet,
        canvas: canvas
      };

      // backgroundMusic.play();

      // Input.init(data);
      Entities.init(data);
      Render.init(data);
      Game.run(data);
    });
  },

  run(data) {
    var loop = function() {
      Game.input(data);
      Game.update(data);
      Game.render(data);

      data.animationFrame++;
      window.requestAnimationFrame(loop);
    };

    loop();
  },

  input: function(data) {
    // Input.update(data);
  },

  update: function(data) {
    // Animation.update(data);
    // Movement.update(data);
    // Physics.update(data);
  },

  render: function(data) {
    Render.update(data);
  }
};

Game.init();
