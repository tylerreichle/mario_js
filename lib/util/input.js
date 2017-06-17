const input = {
  down: {},
  pressed: {},

  init() {
    $(window).on('keydown', (event) => {
      this.down[event.keyCode] = true;
    });

    $(window).on('keyup', () => {
      delete this.down[event.keyCode];
      delete this.pressed[event.keyCode];
    });
  },

  update(data) {
    const mario = data.entities.mario;

    if (data.userControl) {
      // Move Left. Left-Arrow or A
      if (this.isDown(37) || this.isDown(65)) {
        if (mario.velY === 1.2) {
          if (mario.bigMario) {
            mario.currentState = mario.states.bigWalking;
          } else {
            mario.currentState = mario.states.walking;
          }
        } else {
          mario.xPos -= mario.velX;
        }
        mario.direction = 'left';
      }
      // Move Right. Right-Arrow or D
      if (this.isDown(39) || this.isDown(68)) {
        if (mario.velY === 1.2) {
          if (mario.bigMario) {
            mario.currentState = mario.states.bigWalking;
          } else {
            mario.currentState = mario.states.walking;
          }
        } else {
          mario.xPos += mario.velX;
        }
        mario.direction = 'right';
      }

      // Jump. Up-Arrow, W, or Spacebar
      if (this.isPressed(38) || this.isPressed(32) || this.isPressed(87)) {
        if (mario.bigMario) {
          mario.currentState = mario.states.bigJumping;
        } else {
          mario.currentState = mario.states.jumping;
        }
      }
    } else {
      mario.currentState = mario.states.dead;
    }
  },

  isDown(code) {
    return this.down[code];
  },

  isPressed(code) {
    if (this.pressed[code]) {
      return false;
    } else if (this.down[code]) {
      this.pressed[code] = true;
      return this.pressed[code];
    }
  },
};

export { input as default };
