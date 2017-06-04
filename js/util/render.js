import { levelOne } from '../map/level_1-1';
import MapBuilder from '../map/map_builder';

export const render = {

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
    this.drawText(data);
    data.mapBuilder.create(data);

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

    if (((entity.xPos + entity.width >= viewport.vX &&
          entity.xPos + entity.width <= viewport.vX + viewport.width)) &&
        ((entity.yPos + entity.height >= viewport.vY &&
          entity.yPos + entity.height <= viewport.vY + viewport.height)))  {

      ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.xPos - viewport.vX,  entity.yPos - viewport.vY,
        entity.width, entity.height
      );
    }
  },

  drawText(data) {
    const ctx = data.canvas.ctx;
    const viewport = data.viewport;
    const text = data.entities.score;

    ctx.font = text.size + " " + text.font;
    ctx.fillStyle = text.color;
    ctx.fillText(`Score: ${text.value}`, text.xPos - viewport.width / 3, text.yPos);
  }
};
