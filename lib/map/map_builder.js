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

    this.mountainSheet = new Image();
    this.mountainSheet.src = './assets/sprites/mountain.png';
    this.cloudsSheet = new Image();
    this.cloudsSheet.src = './assets/sprites/clouds.png';
    this.castleSheet = new Image();
    this.castleSheet.src = './assets/sprites/castle.png';

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

    level.mountains.forEach(mountain => {
      this.sceneryEntities.push(
        new Mountain(this.mountainSheet, mountain[0], mountain[1], mountain[2], mountain[3])
      );
    });

    level.pipes.forEach(pipe => {
      this.sceneryEntities.push(
        new Pipe(this.tileset, pipe[0], pipe[1], pipe[2], pipe[3])
      );
    });

    level.smallClouds.forEach(smallCloud => {
      this.sceneryEntities.push(
        new SmallCloud(
          this.cloudsSheet, smallCloud[0], smallCloud[1], smallCloud[2], smallCloud[3]
        )
      );
    });

    level.mediumClouds.forEach(mediumCloud => {
      this.sceneryEntities.push(
        new MediumCloud(
          this.cloudsSheet, mediumCloud[0], mediumCloud[1], mediumCloud[2], mediumCloud[3]
          )
      );
    });

    level.largeClouds.forEach(largeCloud => {
      this.sceneryEntities.push(
        new LargeCloud(
          this.cloudsSheet, largeCloud[0], largeCloud[1], largeCloud[2], largeCloud[3]
        )
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
        new Breakable(this.tileset, breakable[0], breakable[1], breakable[2], breakable[3]));
      });

    level.bricks.forEach(brick => {
      this.sceneryEntities.push(
        new Brick(this.tileset, brick[0], brick[1], brick[2], brick[3]));
      });

      this.sceneryEntities.push(
        new Flag(this.tileset, level.flag[0], level.flag[1], level.flag[2], level.flag[3])
      );

      this.sceneryEntities.push(
        new Flagpole(this.tileset, level.flagpole[0], level.flagpole[1], level.flagpole[2], level.flagpole[3])
      );

      this.sceneryEntities.push(
        new Castle(this.castleSheet, level.castle[0], level.castle[1], level.castle[2], level.castle[3])
      );
    }

    create(data) {
      this.sceneryEntities.forEach(scene => {
        data.entities.scenery.push(scene);
      });

      this.breakableEntities.forEach(breakable => {
        data.entities.scenery.push(breakable);
      });

      this.blockEntities.forEach(block => {
        data.entities.scenery.push(block);
      });
    }

    renderMap(data) {
      this.sceneryEntities.forEach(scene => {
        this.drawEntity(scene, data);
      });

      this.brickEntities.forEach(brick => {
        this.drawEntity(brick, data);
      });

      this.breakableEntities.forEach(breakable => {
        this.drawEntity(breakable, data);
      });

      this.blockEntities.forEach(block => {
        this.drawEntity(block, data);
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

      class Mountain extends Entity {
        constructor(tileset, xPos, yPos, width, height) {
          const sprite = new Sprite(tileset, 0, 0, 90, 39);

          super('mountain', sprite, xPos, yPos, width, height);
        }
      }

      class SmallCloud extends Entity {
        constructor(tileset, xPos, yPos, width, height) {
          const sprite = new Sprite(tileset, 64.5, 0, 33, 24);

          super('cloud', sprite, xPos, yPos, width, height);
        }
      }

      class MediumCloud extends Entity {
        constructor(tileset, xPos, yPos, width, height) {
          const sprite = new Sprite(tileset, 0, 24.5, 48, 24);

          super('cloud', sprite, xPos, yPos, width, height);
        }
      }

      class LargeCloud extends Entity {
        constructor(tileset, xPos, yPos, width, height) {
          const sprite = new Sprite(tileset, 0, 0, 64, 24);

          super('cloud', sprite, xPos, yPos, width, height);
        }
      }

      class Flag extends Entity {
        constructor(tileset, xPos, yPos, width, height) {
          const sprite = new Sprite(tileset, 289, 153, 16, 27);

          super('flag', sprite, xPos, yPos, width, height);
        }
      }

      class Flagpole extends Entity {
        constructor(tileset, xPos, yPos, width, height) {
          const sprite = new Sprite(tileset, 289, 163, 16, 18);

          super('flag', sprite, xPos, yPos, width, height);
        }
      }

      class Castle extends Entity {
        constructor(tileset, xPos, yPos, width, height) {
          const sprite = new Sprite(tileset, 0, 0, 80, 80);

          super('flag', sprite, xPos, yPos, width, height);
        }
      }
