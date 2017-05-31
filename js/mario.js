import Sprite from './sprite';

class Mario {
  constructor(img, x, y, w, h) {

    let self = this;
    this.jumpSound = new Audio('./assets/audio/sounds/mario_jump.mp3');
    this.sprite = new Sprite(img, 651, 5, 16, 16);

    this.spriteAnimations = {
      walkRight : {
        frames: [
          new Sprite(img, 667, 5, 16, 16),
          new Sprite(img, 683, 5, 16, 16),
          new Sprite(img, 699, 5, 16, 16),
        ],
        currentFrame: 0
      },

      walkLeft: {
        frames: [
          new Sprite(img, 844, 21, 16, 16),
          new Sprite(img, 828, 21, 16, 16),
          new Sprite(img, 812, 21, 16, 16),
        ],
        currentFrame: 0
      },
      standRight: new Sprite(img, 651, 5, 16, 16),
      standLeft:  new Sprite(img, 860, 21, 16, 16),
      jumpRight:  new Sprite(img, 731, 5, 16, 16),
      jumpLeft:   new Sprite(img, 778, 21, 16, 16)
    };

    this.states = {
      jumping: {
        movement(data) {
          if (self.velY === 1.2) {
            const jumpSound = self.jumpSound.cloneNode();
            // jumpSound.play(); comment out for my sanity
            self.velY -= 23;
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

      walking: {
        movement(data) {
          if (self.direction === "right") {
            self.x += self.velX;
          } else {
            self.x -= self.velX;
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
    };

    this.currentState = this.states.standing;
    this.direction = "right";
    this.velY = 0;
    this.velX = 3.8;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

export default Mario;
