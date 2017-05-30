export const Render = {
  init(data) {
    Render.helpers.drawEntity(data.entities.background, data.canvas.bgCtx);
  },

  update: function(data) {
    data.canvas.fgCtx.clearRect(0, 0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);
    // Render.helpers.drawText(data.entities.score, data.canvas.fgCtx);

    Render.helpers.drawEntity(data.entities.mario, data.canvas.fgCtx);

    data.entities.coinsArray.forEach(function(coin) {
      Render.helpers.drawEntity(coin, data.canvas.fgCtx);
    });
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
