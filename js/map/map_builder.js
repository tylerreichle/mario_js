import Entity from '../entities/entity';
import Sprite from '../entities/sprite';

class mapBuilder {
  constructor(level) {
    this.tileset = new Image();
    this.tileset.src = './assets/sprites/tileset_gutter.png';

    this.groundEntities = [];
    this.pipeEntities = [];
    this.brickEntities = [];

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
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 0, 0, 16, 16);

    super('block', sprite, xPos, yPos, width, height);
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
    const sprite = new Sprite(tileset, 0, 18, 17, 17);

    super('brick', sprite, xPos, yPos, width, height);
  }
}
