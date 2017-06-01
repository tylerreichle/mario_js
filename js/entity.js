import Sprite from './sprite';

class Entity {
  constructor(type, sprite, xPos, yPos, width, height) {
    this.type = type;
    this.sprite = sprite;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}

export default Entity;
