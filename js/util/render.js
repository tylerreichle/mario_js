import { levelOne } from '../map/level_1-1';
import MapBuilder from '../map/map_builder';

export const render = {

  init(data) {
    data.entities.scenery = [];
  },

  update(data) {
    data.canvas.ctx.clearRect(0, 0, data.canvas.canvas.width, data.canvas.canvas.height);
    data.canvas.ctx.fillStyle = '#6b8cff';
    data.canvas.ctx.fillRect(0, 0, data.canvas.canvas.width, data.canvas.canvas.height);

    this.drawText(data);
    data.mapBuilder.create(data);
    this.drawEntity(data.entities.mario, data);

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
    if (((entity.xPos + entity.width >= data.viewport.vX &&
          entity.xPos + entity.width <= data.viewport.vX + data.viewport.width)) &&
        ((entity.yPos + entity.height >= data.viewport.vY &&
          entity.yPos + entity.height <= data.viewport.vY + data.viewport.height)))  {

      data.canvas.ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.xPos - data.viewport.vX,  entity.yPos - data.viewport.vY,
        entity.width, entity.height
      );
    }
  },

  drawText(data) {
    const text = data.entities.score;

    data.canvas.ctx.font = text.size + " " + text.font;
    data.canvas.ctx.fillStyle = text.color;
    data.canvas.ctx.fillText(
      `Score: ${text.value}`, text.xPos - data.viewport.width / 3, text.yPos
    );
  }
};
