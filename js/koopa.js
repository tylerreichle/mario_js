// locations
// <object id="150" x="400" y="176" width="16" height="16"/>
// <object id="151" x="864" y="176" width="16" height="16"/>
// <object id="152" x="2352" y="176" width="16" height="16"/>

import Entity from './entity';
import Sprite from './sprite';

class Koopa extends Entity {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new Sprite(img, 253, 29, 16, 24);
    super('koopa', sprite, xPos, yPos, width, height);

    let self = this;
    this.squishSound = new Audio('./assets/audio/sounds/stomp.wav');

    this.spriteAnimations = {
      walkRight : {
        frames: [
          new Sprite(img, 253, 29, 16, 24),
          new Sprite(img, 237, 29, 16, 24)
        ],
        currentFrame: 0
      },

      walkLeft: {
        frames: [
          new Sprite(img, 173, 5, 16, 24),
          new Sprite(img, 189, 5, 16, 24)
        ],
        currentFrame: 0
      },
      hiding: new Sprite(237, 14, 16, 14)
    };

    this.states = {
      walking: {
        movement(data) {
          if (self.direction === "right") {
            self.xPos += self.xVel;
          } else {
            self.xPos -= self.xVel;
          }
        },

        animation(data) {
          if (self.direction === "right") {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.walkRight.
                frames[self.spriteAnimations.walkRight.currentFrame];

              self.spriteAnimations.walkRight.currentFrame++;

              if (self.spriteAnimations.walkRight.currentFrame > 1) {
                self.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.walkLeft.
                frames[self.spriteAnimations.walkLeft.currentFrame];
              self.spriteAnimations.walkLeft.currentFrame++;

              if (self.spriteAnimations.walkLeft.currentFrame > 1) {
                self.spriteAnimations.walkLeft.currentFrame = 0;
              }
            }
          }
        }
      },
      hiding: {
        movement(data) {
          this.xVel = 0;
        },
        animation(data) {
          this.sprite = this.spriteAnimations.hiding;
        }
      }
    };

    this.currentState = this.states.walking;
    this.direction = 'right';
    this.yVel = 0;
    this.xVel = .7;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}

export default Koopa;


// locations
//
// <object id="139" x="512" y="176" width="16" height="16"/>
//   <object id="140" x="672" y="176" width="16" height="16"/>
//   <object id="141" x="832" y="176" width="16" height="16"/>
//   <object id="142" x="2768" y="176" width="16" height="16"/>
//   <object id="143" x="560" y="176" width="16" height="16"/>
//   <object id="148" x="1920" y="176" width="16" height="16"/>
