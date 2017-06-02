import Entity from './entity';
import Sprite from './sprite';

class Coin extends Entity {
  constructor(spriteSheet, xPos, yPos, width, height) {
    const sprite = new Sprite(spriteSheet, 5, 5, 10, 14);
    super('coin', sprite, xPos, yPos, width, height);

    const self = this;
    this.type = "coin";
    this.coinSound = new Audio("./assets/audio/sounds/coin.wav");

    this.spriteAnimations = {
      spin: {
        frames: [
          new Sprite(spriteSheet, 5, 5, 10, 14),
          new Sprite(spriteSheet, 21, 5, 10, 14),
          new Sprite(spriteSheet, 37, 5, 10, 14),
          new Sprite(spriteSheet, 53, 5, 10, 14)
        ],
        currentFrame: 0
      }
    };

    this.states = {
      spinning: {
        animation: function(data) {
          if (data.animationFrame % 13 === 0) {
            self.sprite = self.spriteAnimations.spin.
                          frames[self.spriteAnimations.spin.currentFrame];
            self.spriteAnimations.spin.currentFrame++;

            if (self.spriteAnimations.spin.currentFrame > 3) {
              self.spriteAnimations.spin.currentFrame = 0;
            }
          }
        }
      }
    };
    this.currentState = this.states.spinning;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}

export default Coin;
