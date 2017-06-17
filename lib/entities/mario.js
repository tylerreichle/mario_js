import Entity from './entity';
import Sprite from './sprite';

export default class Mario extends Entity {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new Sprite(img, 651, 5, 16, 16);
    super('mario', sprite, xPos, yPos, width, height);

    const self = this;
    this.jumpSound = new Audio('./assets/audio/sounds/jump.wav');
    this.deathSound = new Audio('./assets/audio/sounds/mario_death.wav');
    this.bumpSound = new Audio('./assets/audio/sounds/bump.wav');
    this.powerupSound = new Audio('./assets/audio/sounds/powerup.wav');
    this.powerdownSound = new Audio('./assets/audio/sounds/powerdown.wav');

    this.spriteAnimations = {
      walkRight: {
        frames: [
          new Sprite(img, 667, 5, 16, 16),
          new Sprite(img, 683, 5, 16, 16),
          new Sprite(img, 699, 5, 16, 16),
        ],
        currentFrame: 0,
      },
      walkLeft: {
        frames: [
          new Sprite(img, 844, 21, 16, 16),
          new Sprite(img, 828, 21, 16, 16),
          new Sprite(img, 812, 21, 16, 16),
        ],
        currentFrame: 0,
      },
      bigWalkRight: {
        frames: [
          new Sprite(img, 295, 5, 16, 32),
          new Sprite(img, 311, 5, 16, 32),
          new Sprite(img, 327, 5, 16, 32),
        ],
        currentFrame: 0,
      },
      bigWalkLeft: {
        frames: [
          new Sprite(img, 583, 37, 16, 32),
          new Sprite(img, 567, 37, 16, 32),
          new Sprite(img, 551, 37, 16, 32),
        ],
        currentFrame: 0,
      },
      resizeRight: {
        frames: [
          new Sprite(img, 519, 5, 16, 32),
          new Sprite(img, 279, 5, 16, 32),
          new Sprite(img, 519, 5, 16, 32),
          new Sprite(img, 279, 5, 16, 32),
        ],
        currentFrame: 0,
      },
      resizeLeft: {
        frames: [
          new Sprite(img, 519, 5, 16, 32),
          new Sprite(img, 279, 5, 16, 32),
          new Sprite(img, 519, 5, 16, 32),
          new Sprite(img, 279, 5, 16, 32),
        ],
        currentFrame: 0,
      },
      standRight: new Sprite(img, 651, 5, 16, 16),
      standLeft: new Sprite(img, 860, 21, 16, 16),
      jumpRight: new Sprite(img, 731, 5, 16, 16),
      jumpLeft: new Sprite(img, 778, 22, 16, 16),

      bigStandRight: new Sprite(img, 278.7, 5, 16, 32),
      bigStandLeft: new Sprite(img, 599.5, 37, 16, 32),
      bigJumpRight: new Sprite(img, 359, 5, 16, 32),
      bigJumpLeft: new Sprite(img, 519, 37, 16, 32),
      dead: new Sprite(img, 748, 5, 16, 16),
    };

    this.states = {
      jumping: {
        movement(data) {
          if (self.velY === 1.2) {
            const jumpSound = self.jumpSound.cloneNode();
            jumpSound.play();
            self.velY -= 14;
          }
        },
        animation(data) {
          if (self.direction === 'right') {
            self.sprite = self.spriteAnimations.jumpRight;
          } else {
            self.sprite = self.spriteAnimations.jumpLeft;
          }
        },
      },

      bigJumping: {
        movement(data) {
          if (self.velY === 1.2) {
            self.jumpSound.play();
            self.velY -= 14;
          }
        },
        animation(data) {
          if (self.direction === 'right') {
            self.sprite = self.spriteAnimations.bigJumpRight;
          } else {
            self.sprite = self.spriteAnimations.bigJumpLeft;
          }
        },
      },

      standing: {
        movement(data) {

        },
        animation(data) {
          if (self.direction === 'right') {
            self.sprite = self.spriteAnimations.standRight;
          } else {
            self.sprite = self.spriteAnimations.standLeft;
          }
        },
      },

      bigStanding: {
        movement(data) {

        },
        animation(data) {
          if (self.direction === 'right') {
            self.sprite = self.spriteAnimations.bigStandRight;
          } else {
            self.sprite = self.spriteAnimations.bigStandLeft;
          }
        },
      },

      walking: {
        movement(data) {
          if (self.direction === 'right') {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },

        animation(data) {
          if (self.direction === 'right') {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.walkRight
                .frames[self.spriteAnimations.walkRight.currentFrame];

              self.spriteAnimations.walkRight.currentFrame += 1;

              if (self.spriteAnimations.walkRight.currentFrame > 2) {
                self.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.walkLeft
                .frames[self.spriteAnimations.walkLeft.currentFrame];
              self.spriteAnimations.walkLeft.currentFrame += 1;

              if (self.spriteAnimations.walkLeft.currentFrame > 2) {
                self.spriteAnimations.walkLeft.currentFrame = 0;
              }
            }
          }
        },
      },

      bigWalking: {
        movement(data) {
          if (self.direction === 'right') {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },

        animation(data) {
          if (self.direction === 'right') {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.bigWalkRight
                .frames[self.spriteAnimations.bigWalkRight.currentFrame];

              self.spriteAnimations.bigWalkRight.currentFrame += 1;

              if (self.spriteAnimations.bigWalkRight.currentFrame > 2) {
                self.spriteAnimations.bigWalkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.bigWalkLeft
                .frames[self.spriteAnimations.bigWalkLeft.currentFrame];
              self.spriteAnimations.bigWalkLeft.currentFrame += 1;

              if (self.spriteAnimations.bigWalkLeft.currentFrame > 2) {
                self.spriteAnimations.bigWalkLeft.currentFrame = 0;
              }
            }
          }
        },
      },

      resizing: {
        movement(data) {

        },
        animation(data) {
          if (self.direction === 'right') {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.resizeRight
                .frames[self.spriteAnimations.resizeRight.currentFrame];

              self.spriteAnimations.resizeRight.currentFrame += 1;

              if (self.spriteAnimations.resizeRight.currentFrame > 3) {
                self.spriteAnimations.resizeRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.resizeLeft
                .frames[self.spriteAnimations.resizeLeft.currentFrame];
              self.spriteAnimations.resizeLeft.currentFrame += 1;

              if (self.spriteAnimations.resizeLeft.currentFrame > 3) {
                self.spriteAnimations.resizeLeft.currentFrame = 0;
              }
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

    this.currentState = this.states.standing;
    this.direction = 'right';
    this.bigMario = false;
    this.velY = 0;
    this.velX = 3.8;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
