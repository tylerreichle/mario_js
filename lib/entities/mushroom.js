import Entity from './entity';
import Sprite from './sprite';

export default class Mushroom extends Entity {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new Sprite(img, 625, 5, 16, 16);
    super('mushroom', sprite, xPos, yPos, width, height);

    const self = this;

    this.spriteAnimations = {
      moving: new Sprite(img, 625, 5, 16, 16),
    };

    this.states = {
      moving: {
        movement(data) {
          if (self.direction === 'left') {
            self.xPos -= self.velX;
          } else {
            self.xPos += self.velX;
          }
        },
        animation(data) {
          self.sprite = self.spriteAnimations.moving;
        },
      },
    };

    this.currentState = this.states.moving;
    this.direction = 'right';
    this.velY = 0;
    this.velX = 1.3;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
