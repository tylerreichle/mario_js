import Entity from './entity';
import Sprite from './sprite';
import Render from './render';

export const mapBuilder = (level, canvas) => {
  const render = new Render;
  const ctx = canvas.ctx;

  level.ground.forEach(() => {
    
  });
};

class Block extends Entity {
  constructor(xPos, yPos, width, height) {
    const sprite = new Sprite('');

    super('block', sprite, xPos, yPos, width, height);
  }
}

class Ground extends Entity {
  constructor(xPos, yPos, width, height) {
    const sprite = new Sprite('');

    super('ground', sprite, xPos, yPos, width, height);
  }
}

class Pipe extends Entity {
  constructor(xPos, yPos, width, height) {
    const sprite = new Sprite('');

    super('pipe', sprite, xPos, yPos, width, height);
  }
}

class Coin extends Entity {
  constructor(xPos, yPos, width, height) {
    const sprite = new Sprite('');

    super('coin', sprite, xPos, yPos, width, height);
  }
}

class Mushroom extends Entity {
  constructor(xPos, yPos, width, height) {
    const sprite = new Sprite('');

    super('mushroom', sprite, xPos, yPos, width, height);
  }
}

class Brick extends Entity {
  constructor(xPos, yPos, width, height) {
    const sprite = new Sprite('');

    super('brick', sprite, xPos, yPos, width, height);
  }
}
