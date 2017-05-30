export const Input = {
  init() {
    const self = this;

    $(window).on("keydown", (event) => {
      self.helpers.down[event.keyCode] = true;
    });

    $(window).on("keyup", () => {
      delete self.helpers.down[event.keyCode];
      delete self.helpers.pressed[event.keyCode];
    });
  },

  update: function(data) {
    const mario = data.entities.mario;

    // Left arrow
    if (Input.helpers.isDown(37)) {
      if (mario.velY === 0) {
        mario.currentState = mario.states.walking;
      } else {
        mario.x -= mario.velX;
      }
      mario.direction = "left";
    }

    // Right arrow
    if (Input.helpers.isDown(39)) {
      if (mario.velY === 0) {
        mario.currentState = mario.states.walking;
      } else {
        mario.x += mario.velX;
      }
      mario.direction = "right";
    }

    // Up arrow
    if (Input.helpers.isPressed(38)) {
      mario.currentState = mario.states.jumping;
    }
  },

  helpers: {
    isDown(code) {
      return Input.helpers.down[code];
    },

    isPressed(code) {
      if (Input.helpers.pressed[code]) {
        return false;
      } else if (Input.helpers.down[code]) {
        Input.helpers.pressed[code] = true;
        return Input.helpers.pressed[code];
      }

      return false;
    },

    down: {},
    pressed: {}
  }
};
