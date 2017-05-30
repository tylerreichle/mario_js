import Sprite from './sprite';

class Mario {
  constructor(img, xPos, yPos, width, height) {

    let self = this;
    this.jumpsound = new Audio('./assets/audio/sounds/mario_jump.mp3');
    this.sprite = new Sprite(img, xPos, yPos, width, height);

    this.spriteAnimations = {
      walkRight : {
        frames: [
          new Sprite(img, 16, 0, 16, 16),
          new Sprite(img, 32, 0, 16, 16),
          new Sprite(img, 48, 0, 16, 16),
        ],
        currentFrame: 0
      },

      walkLeft: {
        frames: [
          new Sprite(img, 34, 18, 16, 16),
          new Sprite(img, 18, 18, 16, 16),
          new Sprite(img, 2, 18, 16, 16),
        ],
        currentFrame: 0
      },
      standRight: new Sprite(img, 0, 0, 16, 16),
      standLeft: new Sprite(img, 50, 18, 16, 16),
      jumpRight: new Sprite(img, 67, 0, 16, 16),
      jumpLeft: new Sprite(img, 67, 18, 16, 16)
    };

    this.states = {
      jumping: {
        movement: function(data) {
          if (self.velY === 0) {
            var jumpSound = self.jumpSound.cloneNode();
            jumpSound.play();
            self.velY -= 23;
          }
        },
        animation: function(data) {
          if (self.direction === "right") {
            self.sprite = self.spriteAnimations.jumpRight;
          } else {
            self.sprite = self.spriteAnimations.jumpLeft;
          }
        }
      },

      standing: {
        movement: function(data) {
          return;
        },

        animation: function(data) {
          if (self.direction === "right") {
            self.sprite = self.spriteAnimations.standRight;
          } else {
            self.sprite = self.spriteAnimations.standLeft;
          }
        }
      },

      walking: {
        movement: function(data) {
          if (self.direction === "right") {
            self.x += self.velX;
          } else {
            self.x -= self.velX;
          }
        },

        animation: function(data) {
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
  }
}

export default Mario;
