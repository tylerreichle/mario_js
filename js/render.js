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
    data.canvas.ctx.clearRect(0, 0,
    data.canvas.canvas.width, data.canvas.canvas.height);

    this.mapBuilder.create(data.canvas.ctx);

    // this.drawEntity(data.entities.background, data.canvas.ctx);
    // this.drawEntity(data.entities.mario, data.canvas.ctx);
  }

  drawEntity(entity, ctx) {
    ctx.drawImage(
      entity.sprite.img,
      entity.sprite.srcX, entity.sprite.srcY,
      entity.sprite.srcW, entity.sprite.srcH,
      entity.x, entity.y,
      entity.w, entity.h
    );
  }
}

export default Render;
