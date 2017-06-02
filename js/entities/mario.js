import Entity from './entity';
import Sprite from './sprite';

class Mario extends Entity {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new Sprite(img, 651, 5, 16, 16);
    super('mario', sprite, xPos, yPos, width, height);

    let self = this;
    this.jumpSound  = new Audio('./assets/audio/sounds/mario_jump.mp3');
    this.deathSound = new Audio('./assets/audio/sounds/mario_death.wav');
    this.bumpSound  = new Audio('./assets/audio/sounds/bump.wav');

    this.spriteAnimations = {
      walkRight : {
        frames: [
          new Sprite(img, 667, 5, 16, 16),
          new Sprite(img, 683, 5, 16, 16),
          new Sprite(img, 699, 5, 16, 16)
        ],
        currentFrame: 0
      },

      walkLeft: {
        frames: [
          new Sprite(img, 844, 21, 16, 16),
          new Sprite(img, 828, 21, 16, 16),
          new Sprite(img, 812, 21, 16, 16)
        ],
        currentFrame: 0
      },

      bigWalkRight : {
        frames: [
          new Sprite(img, 295, 7, 16, 32),
          new Sprite(img, 311, 5, 16, 32),
          new Sprite(img, 327, 5, 16, 32)
        ],
        currentFrame: 0
      },

      bigWalkLeft: {
        frames: [
          new Sprite(img, 583, 37, 16, 32),
          new Sprite(img, 567, 37, 16, 32),
          new Sprite(img, 561, 37, 16, 32)
        ],
        currentFrame: 0
      },
      standRight: new Sprite(img, 651, 5, 16, 16),
      standLeft:  new Sprite(img, 860, 21, 16, 16),
      jumpRight:  new Sprite(img, 731, 5, 16, 16),
      jumpLeft:   new Sprite(img, 778, 22, 16, 16),

      bigStandRight: new Sprite(img, 279, 5, 16, 32),
      bigStandLeft:  new Sprite(img, 599, 37, 16, 32),
      bigJumpRight:  new Sprite(img, 359, 5, 16, 32),
      bigJumpLeft:   new Sprite(img, 519, 37, 16, 32),
      dead:          new Sprite(img, 748, 5, 16, 16)
    };

    this.states = {
      jumping: {
        movement(data) {
          if (self.velY === 1.2) {
            const jumpSound = self.jumpSound.cloneNode();
            // jumpSound.play();
            self.velY -= 14;
          }
        },
        animation(data) {
          if (self.direction === "right") {
            self.sprite = self.spriteAnimations.jumpRight;
          } else {
            self.sprite = self.spriteAnimations.jumpLeft;
          }
        }
      },

      bigJumping: {
        movement(data) {
          if (self.velY === 1.2) {
            const jumpSound = self.jumpSound.cloneNode();
            // jumpSound.play();
            self.velY -= 14;
          }
        },
        animation(data) {
          if (self.direction === "right") {
            self.sprite = self.spriteAnimations.bigJumpRight;
          } else {
            self.sprite = self.spriteAnimations.bigJumpLeft;
          }
        }
      },

      standing: {
        movement(data) {
          return;
        },
        animation(data) {
          if (self.direction === "right") {
            self.sprite = self.spriteAnimations.standRight;
          } else {
            self.sprite = self.spriteAnimations.standLeft;
          }
        }
      },

      bigStanding: {
        movement(data) {
          return;
        },
        animation(data) {
          if (self.direction === "right") {
            self.sprite = self.spriteAnimations.bigStandRight;
          } else {
            self.sprite = self.spriteAnimations.bigStandLeft;
          }
        }
      },

      walking: {
        movement(data) {
          if (self.direction === "right") {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },

        animation(data) {
          if (self.direction === "right") {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.walkRight.
                frames[self.spriteAnimations.walkRight.currentFrame];

              self.spriteAnimations.walkRight.currentFrame++;

              if (self.spriteAnimations.walkRight.currentFrame > 2) {
                self.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.walkLeft.
                frames[self.spriteAnimations.walkLeft.currentFrame];
              self.spriteAnimations.walkLeft.currentFrame++;

              if (self.spriteAnimations.walkLeft.currentFrame > 2) {
                self.spriteAnimations.walkLeft.currentFrame = 0;
              }
            }
          }
        }
      },

      bigWalking: {
        movement(data) {
          if (self.direction === "right") {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },

        animation(data) {
          if (self.direction === "right") {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.bigWalkRight.
                frames[self.spriteAnimations.bigWalkRight.currentFrame];

              self.spriteAnimations.bigWalkRight.currentFrame++;

              if (self.spriteAnimations.bigWalkRight.currentFrame > 2) {
                self.spriteAnimations.bigWalkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.bigWalkLeft.
                frames[self.spriteAnimations.bigWalkLeft.currentFrame];
              self.spriteAnimations.bigWalkLeft.currentFrame++;

              if (self.spriteAnimations.bigWalkLeft.currentFrame > 2) {
                self.spriteAnimations.bigWalkLeft.currentFrame = 0;
              }
            }
          }
        }
      },

      dead: {
        movement(data) {
          self.velX = 0;
        },

        animation(data) {
          self.sprite = self.spriteAnimations.dead;
        }
      }
    };

    this.currentState = this.states.standing;
    this.direction = "right";
    this.bigMario = false;
    this.velY = 0;
    this.velX = 3.8;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}

export default Mario;
