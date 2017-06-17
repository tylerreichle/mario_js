import Entity from './entity';
import Sprite from './sprite';

export default class Coin extends Entity {
  constructor(spriteSheet, xPos, yPos, width, height) {
    const sprite = new Sprite(spriteSheet, 5, 5, 10, 14);
    super('coin', sprite, xPos, yPos, width, height);

    const self = this;
    this.type = 'coin';
    this.coinSound = new Audio('./assets/audio/sounds/coin.wav');

    this.tileset = new Image();
    this.tileset.src = './assets/sprites/tileset_gutter.png';

    this.spriteAnimations = {
      spin: {
        frames: [
          new Sprite(spriteSheet, 5, 5, 10, 14),
          new Sprite(spriteSheet, 21, 5, 10, 14),
          new Sprite(spriteSheet, 37, 5, 10, 14),
          new Sprite(spriteSheet, 53, 5, 10, 14),
        ],
        currentFrame: 0,
      },
      blockCoin: new Sprite(this.tileset, 486, 18, 18, 18),
    };

    this.states = {
      spinning: {
        animation(data) {
          if (data.animationFrame % 13 === 0) {
            self.sprite =
              self.spriteAnimations.spin.frames[self.spriteAnimations.spin.currentFrame];
            self.spriteAnimations.spin.currentFrame += 1;

            if (self.spriteAnimations.spin.currentFrame > 3) {
              self.spriteAnimations.spin.currentFrame = 0;
            }
          }
        },
      },

      blockCoin: {
        animation(data) {
          self.sprite = self.spriteAnimations.blockCoin;
        },
      },
    };
    this.currentState = this.states.spinning;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
