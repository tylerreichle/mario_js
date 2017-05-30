export const Render = {
  init(data) {
    // Render.helpers.drawEntity(data.entities.background, data.canvas.bgCtx);
  },

  update: function(data) {
    const fgCtx = data.canvas.fgCtx;
    const fgCanvas = data.canvas.fgCanvas;
    const mario = data.entities.mario;

    fgCtx.setTransform(1, 0, 0, 1, 0, 0);
    fgCtx.clearRect(0, 0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);

    const camX = this.clamp(-mario.x + fgCanvas.width/2, 0, 20000 - fgCanvas.width);
    const camY = this.clamp(-mario.y + fgCanvas.height/2, 0, 600 - fgCanvas.height);
    fgCtx.translate(camX, camY);

    Render.helpers.drawEntity(data.entities.background, data.canvas.bgCtx);
    Render.helpers.drawEntity(data.entities.background, data.canvas.fgCtx);
    // Render.helpers.drawText(data.entities.score, data.canvas.fgCtx);

    Render.helpers.drawEntity(data.entities.mario, data.canvas.fgCtx);

    data.entities.coinsArray.forEach(function(coin) {
      Render.helpers.drawEntity(coin, data.canvas.fgCtx);
    });
  },

  clamp(value, min, max) {
    if(value < min) return min;
    else if(value > max) return max;
    return value;
  },

  helpers: {
    drawEntity(entity, ctx) {
      ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.x, entity.y,
        entity.w, entity.h
      );
    },

    drawText(text, ctx) {
      ctx.font = text.size + " " + text.font;
      ctx.fillStyle = text.color;
      ctx.fillText(`Coins: ${text.value}`, text.x, text.y);
    }
  }
};
