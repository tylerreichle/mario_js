class Render {
  constructor() {
    this.drawEntity = this.drawEntity.bind(this);
  }

  init(data) {
    this.drawEntity(data.entities.background, data.canvas.bgCtx);
  }

  update(data) {
    data.canvas.fgCtx.clearRect(0, 0,
      data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);
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
