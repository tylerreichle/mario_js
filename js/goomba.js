import Entity from '/.entity';
import Sprite from './sprite';

class Goomba extends Entity {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new Sprite(img, 651, 5, 16, 16);
    super('goomba', sprite, xPos, yPos, width, height);

    this.squishSound = new Audio('./assets/audio/sounds/stomp.wav');

    this.spriteAnimations = {
      walking: {
        frames: [
          new Sprite(),
          new Sprite()
        ],
        currentFrame: 0
      },
      death: new Sprite()
    };

    this.state = {
      walking: {
        movement(data) {

        },
        animation(data) {

        }
      },
      dead: {
        movement(data) {

        },
        animation(data) {

        }
      }
    };

    this.currentState = this.states.walking;
    this.direction = 'left';
    this.velY = 0;
    this.velX = 2;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}

export default Goomba;


// locations
//
// <object id="139" x="512" y="176" width="16" height="16"/>
//   <object id="140" x="672" y="176" width="16" height="16"/>
//   <object id="141" x="832" y="176" width="16" height="16"/>
//   <object id="142" x="2768" y="176" width="16" height="16"/>
//   <object id="143" x="560" y="176" width="16" height="16"/>
//   <object id="148" x="1920" y="176" width="16" height="16"/>
