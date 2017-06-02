export const input = {
  down: {},
  pressed: {},

  init() {
    $(window).on("keydown", (event) => {
      this.down[event.keyCode] = true;
    });

    $(window).on("keyup", () => {
      delete this.down[event.keyCode];
      delete this.pressed[event.keyCode];
    });
  },

  update(data) {
    const mario = data.entities.mario;

    if (data.control) {
      // Left Arrow
      if (this.isDown(37)) {
        if (mario.velY === 1.2) {
          mario.currentState = mario.states.walking;
        } else {
          mario.xPos -= mario.velX;
        }
        mario.direction = "left";
      }
      // Right Arrow
      if (this.isDown(39)) {
        if (mario.velY === 1.2) {
          mario.currentState = mario.states.walking;
        } else {
          mario.xPos += mario.velX;
        }
        mario.direction = "right";
      }

      // Up Arrow
      if (this.isPressed(38)) {
        mario.currentState = mario.states.jumping;
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
  }
};
