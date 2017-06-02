import Entity from './entity';
import Sprite from './sprite';
import Coin from './coin';

class Block extends Entity {
  constructor(coin, tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 432, 0, 18, 18);
    super('block', sprite, xPos, yPos, width, height);

    this.coin = coin;
    this.coinSound = new Audio('./assets/audio/sounds/coin.wav');
    this.used = new Sprite(tileset, 486, 0, 18, 18);
    this.tileset = tileset;
  }

  drawCoin(data) {
    const coins = data.entities.coins;
    const coin = new Coin(
      this.tileset, this.xPos - 2, this.yPos - 18, 18, 18
    );

    coin.currentState = coin.states.blockCoin;
    coins.push(coin);

    setTimeout(() => {
      const index = coins.indexOf(coin);
      delete coins[index];
    }, 50);
  }
}

export default Block;
