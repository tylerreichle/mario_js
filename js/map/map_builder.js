import Entity from '../entities/entity';
import Sprite from '../entities/sprite';
import Block from '../entities/block';
import Breakable from '../entities/breakable';
import Koopa from '../entities/koopa';
import Goomba from '../entities/goomba';

class MapBuilder {
  constructor(level, tileset, spriteSheet) {
    this.level = level;
    this.tileset = tileset;
    this.spriteSheet = spriteSheet;

    this.sceneryEntities = [];
    this.brickEntities = [];
    this.breakableEntities = [];
    this.blockEntities = [];

    level.ground.forEach(ground => {
      this.sceneryEntities.push(
        new Ground(this.tileset, ground[0], ground[1], ground[2], ground[3])
      );
    });

    level.shrubs.forEach(shrub => {
      this.sceneryEntities.push(
        new Shrub(this.tileset, shrub[0], shrub[1], shrub[2], shrub[3])
      );
    });

    level.pipes.forEach(pipe => {
      this.sceneryEntities.push(
        new Pipe(this.tileset, pipe[0], pipe[1], pipe[2], pipe[3])
      );
    });

    // coin blocks
    level.blocks.forEach(block => {
      this.blockEntities.push(
        new Block('coin', this.tileset, block[0], block[1], block[2], block[3])
      );
    });
    // mushroom blocks
    level.mushrooms.forEach(block => {
      this.blockEntities.push(
        new Block('mushroom', this.tileset, block[0], block[1], block[2], block[3])
      );
    });

    level.breakables.forEach(breakable => {
      this.breakableEntities.push(
        new Breakable(this.tileset,
          breakable[0], breakable[1], breakable[2], breakable[3])
        );
      });
    }

    create(data) {
      this.sceneryEntities.forEach(scene => {
        this.drawEntity(scene, data);
        data.entities.scenery.push(scene);
      });

      this.brickEntities.forEach(brick => {
        this.drawEntity(brick, data);
        data.entities.scenery.push(brick);
      });

      this.breakableEntities.forEach(breakable => {
        this.drawEntity(breakable, data);
        data.entities.scenery.push(breakable);
      });

      this.blockEntities.forEach(block => {
        this.drawEntity(block, data);
        data.entities.scenery.push(block);
      });
    }

    drawEntity(entity, data) {
      const ctx = data.canvas.ctx;
      const viewport = data.viewport;

      if (((entity.xPos + entity.width >= viewport.vX &&
        entity.xPos + entity.width <= viewport.vX + viewport.width)) &&
        ((entity.yPos + entity.height >= viewport.vY &&
          entity.yPos + entity.height <= viewport.vY + viewport.height))) {

            ctx.drawImage(
              entity.sprite.img,
              entity.sprite.srcX, entity.sprite.srcY,
              entity.sprite.srcW, entity.sprite.srcH,
              entity.xPos - viewport.vX, entity.yPos - viewport.vY,
              entity.width, entity.height
            );
          }
        }
      }

      export default MapBuilder;

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
      class Shrub extends Entity {
        constructor(tileset, xPos, yPos, width, height) {
          const sprite = new Sprite(tileset, 198.5, 162.5, 53, 17);

          super('shrub', sprite, xPos, yPos, width, height);
        }
      }
