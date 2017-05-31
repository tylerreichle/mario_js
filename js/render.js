import { levelOne } from './level_1-1';
import mapBuilder from './map_builder';

class Render {
  constructor() {
    this.mapBuilder = new mapBuilder(levelOne);
  }

  init(data) {
    // this.drawEntity(data.entities.background, data.canvas.ctx);
  }

  update(data) {
    const canvas = data.canvas.canvas;
    const ctx = data.canvas.ctx;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#6b8cff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.mapBuilder.create(ctx);
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
