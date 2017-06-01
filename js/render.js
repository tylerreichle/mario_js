import { levelOne } from './level_1-1';
import mapBuilder from './map_builder';

class Render {
  constructor() {
    this.mapBuilder = new mapBuilder(levelOne);
  }

  init(data) {
    data.entities.scenery = [];
  }

  update(data) {
    const canvas = data.canvas.canvas;
    const ctx = data.canvas.ctx;
    const mario = data.entities.mario;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#6b8cff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.mapBuilder.create(data, ctx);
    this.drawEntity(data.entities.mario, ctx);
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

export default Render;
