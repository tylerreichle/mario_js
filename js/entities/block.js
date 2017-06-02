import Entity from './entity';
import Sprite from './sprite';

class Block extends Entity {
  constructor(coin, tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 432, 0, 18, 18);
    super('block', sprite, xPos, yPos, width, height);

    this.coin = coin;
    this.coinSprite = new Sprite(tileset, 436, 21, 15, 15);
    this.coinSound = new Audio('./assets/audio/sounds/coin.wav');
    this.used = new Sprite(tileset, 486, 0, 18, 18);
  }

  // drawCoin(ctx) {
  //   ctx.drawImage(
  //     this.coinSprite.img,
  //     this.coinSprite.srcX, this.coinSprite.srcY,
  //     this.coinSprite.srcW, this.coinSprite.srcH,
  //     this.xPos, this.yPos - 15, 15, 15
  //   );
  // }
}

export default Block;
