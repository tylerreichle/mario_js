import Entity from './entity';
import Sprite from './sprite';

class Breakable extends Entity {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new Sprite(tileset, 18, 0, 18, 18);
    super('breakable', sprite, xPos, yPos, width, height);

    this.breakSound = new Audio('./assets/audio/sounds/break_block.wav');
  }
}

export default Breakable;