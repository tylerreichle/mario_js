import Entity from './entity';
import Sprite from './sprite';

export default class Goomba extends Entity {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new Sprite(img, 115, 5, 16, 16);
    super('goomba', sprite, xPos, yPos, width, height);

    const self = this;
    this.squishSound = new Audio('./assets/audio/sounds/stomp.wav');

    this.spriteAnimations = {
      walking: {
        frames: [
          new Sprite(img, 115, 5, 16, 16),
          new Sprite(img, 131, 5, 16, 16),
        ],
        currentFrame: 0,
      },
      dead: new Sprite(img, 147.5, 5, 16, 16),
    };

    this.states = {
      walking: {
        movement(data) {
          if (self.direction === 'left') {
            self.xPos -= self.velX;
          } else {
            self.xPos += self.velX;
          }
        },
        animation(data) {
          if (data.animationFrame % 10 === 0) {
            self.sprite = self.spriteAnimations.walking
              .frames[self.spriteAnimations.walking.currentFrame];

            self.spriteAnimations.walking.currentFrame += 1;

            if (self.spriteAnimations.walking.currentFrame > 1) {
              self.spriteAnimations.walking.currentFrame = 0;
            }
          }
        },
      },
      dead: {
        movement(data) {
          self.velX = 0;
        },
        animation(data) {
          self.sprite = self.spriteAnimations.dead;
        },
      },
    };

    this.currentState = this.states.walking;
    this.direction = 'right';
    this.velY = 0;
    this.velX = 0.7;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
