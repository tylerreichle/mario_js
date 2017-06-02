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

    this.drawEntity(data.entities.mario, data);
    this.drawText(data.entities.score, ctx);
    this.mapBuilder.create(data);

    data.entities.coins.forEach(coin => {
      this.drawEntity(coin, data);
    });

    data.entities.mushrooms.forEach(mushroom => {
      this.drawEntity(mushroom, data);
    });

    data.entities.goombas.forEach(goomba => {
      this.drawEntity(goomba, data);
    });

    data.entities.koopas.forEach(koopa => {
      this.drawEntity(koopa, data);
    });
  },

  drawEntity(entity, data) {
    const ctx = data.canvas.ctx;
    const viewport = data.viewport;

    if (((entity.xPos >= viewport.vX &&
          entity.xPos <= viewport.vX + viewport.width)) &&
        ((entity.yPos >= viewport.vY &&
          entity.yPos <= viewport.vY + viewport.height)))  {

      ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.xPos - viewport.vX,  entity.yPos - viewport.vY,
        entity.width, entity.height
      );
    }
  },

  drawText(text, ctx) {
    ctx.font = text.size + " " + text.font;
    ctx.fillStyle = text.color;
    ctx.fillText(`Score: ${text.value}`, text.xPos, text.yPos);
  }
};
