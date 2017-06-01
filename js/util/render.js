import { levelOne } from '../map/level_1-1';
import mapBuilder from '../map/map_builder';

export const render = {

  mapBuilder: new mapBuilder(levelOne),

  init(data) {
    data.entities.scenery = [];
  },

  update(data) {
    const canvas = data.canvas.canvas;
    const ctx = data.canvas.ctx;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#6b8cff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.drawEntity(data.entities.mario, ctx);
    this.mapBuilder.create(data, ctx);

    data.entities.goombas.forEach(goomba => {
      this.drawEntity(goomba, ctx);
    });

    data.entities.koopas.forEach(koopa => {
      this.drawEntity(koopa, ctx);
    });
  },

  drawEntity(entity, ctx) {
    ctx.drawImage(
      entity.sprite.img,
      entity.sprite.srcX, entity.sprite.srcY,
      entity.sprite.srcW, entity.sprite.srcH,
      entity.xPos, entity.yPos,
      entity.width, entity.height
    );
  }
};
