import Entity from '../entities/entity';
import Sprite from '../entities/sprite';

class mapBuilder {
  constructor(level) {
    this.tileset = new Image();
    this.tileset.src = './assets/sprites/tileset_gutter.png';

    this.groundEntities = [];
    this.pipeEntities = [];
    this.brickEntities = [];
    this.breakableEntities = [];
    this.blockEntities = [];

    level.ground.forEach(ground => {
      this.groundEntities.push(
        new Ground(this.tileset, ground[0], ground[1], ground[2], ground[3])
      );
    });

    level.pipes.forEach(pipe => {
      this.pipeEntities.push(
        new Pipe(this.tileset, pipe[0], pipe[1], pipe[2], pipe[3])
      );
    });

    level.bricks.forEach(brick => {
      this.brickEntities.push(
        new Brick(this.tileset, brick[0], brick[1], brick[2], brick[3])
      );
    });

    // coin blocks
    level.blocks.forEach(block => {
      this.blockEntities.push(
        new Block(true, this.tileset, block[0], block[1], block[2], block[3])
      );
    });

    level.breakables.forEach(breakable => {
      this.breakableEntities.push(
        new Breakable(this.tileset,
          breakable[0], breakable[1], breakable[2], breakable[3])
      );
    });
  }

  create(data, ctx) {
    this.groundEntities.forEach(ground => {
      this.drawEntity(ground, ctx);
      data.entities.scenery.push(ground);
    });

    this.pipeEntities.forEach(pipe => {
      this.drawEntity(pipe, ctx);
      data.entities.scenery.push(pipe);
    });

    this.brickEntities.forEach(brick => {
      this.drawEntity(brick, ctx);
      data.entities.scenery.push(brick);
    });

    this.breakableEntities.forEach(breakable => {
      this.drawEntity(breakable, ctx);
      data.entities.scenery.push(breakable);
    });

    this.blockEntities.forEach(block => {
      this.drawEntity(block, ctx);
      data.entities.scenery.push(block);
    });
  }

  drawEntity(entity, ctx) {
    ctx.drawImage(
      entity.sprite.img,
      entity.sprite.srcX, entity.sprite.srcY,
      entity.sprite.srcW, entity.sprite.srcH,
      entity.xPos, entity.yPos,
      entity.width, entity.height
    );
  }
}

export default mapBuilder;

class Block extends Entity {
  constructor(coin, tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 432, 0, 18, 18);
    super('block', sprite, xPos, yPos, width, height);

    this.coin = coin;
    this.coinSound = new Audio('./assets/audio/sounds/coin.wav');
    this.used = new Sprite(tileset, 486, 0, 18, 18);
  }
}

class Breakable extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 18, 0, 18, 18);

    super('breakable', sprite, xPos, yPos, width, height);
  }
}

class Ground extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 0, 0, 16, 16);
    super('ground', sprite, xPos, yPos, width, height);
  }
}

class Pipe extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 0, 180, 35, 35);

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
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 0, 18, 18, 18);

    super('brick', sprite, xPos, yPos, width, height);
  }
}
