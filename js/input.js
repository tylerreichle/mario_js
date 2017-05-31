class Input {
  constructor() {
    this.down = {};
    this.pressed = {};

    this.update = this.update.bind(this);
    this.isDown = this.isDown.bind(this);
    this.isPressed = this.isPressed.bind(this);
  }

  init() {
    $(window).on("keydown", (event) => {
      this.down[event.keyCode] = true;
    });

    $(window).on("keyup", () => {
      delete this.down[event.keyCode];
      delete this.pressed[event.keyCode];
    });
  }

  update(data) {
    const mario = data.entities.mario;

    // Left Arrow
    if (this.isDown(37)) {
      data.movement = true;

      if (mario.velY === 1.2) {
        mario.currentState = mario.states.walking;
      } else {
        mario.x -= mario.velX;
      }
      mario.direction = "left";
    }
    // Right Arrow
    else if (this.isDown(39)) {
      data.movement = true;

      if (mario.velY === 1.2) {
        mario.currentState = mario.states.walking;
      } else {
        mario.x += mario.velX;
      }
      mario.direction = "right";
    }

    // Up Arrow
    else if (this.isPressed(38)) {
      mario.currentState = mario.states.jumping;
    }

    else {
      data.movement = false;
    }
  }

  isDown(code) {
    return this.down[code];
  }

  isPressed(code) {
    if (this.pressed[code]) {
      return false;
    } else if (this.down[code]) {
      this.pressed[code] = true;
      return this.pressed[code];
    }
  }
}

export default Input;
