class Physics {
  update(data) {
    this.collisionDetection(data);
    this.gravity(data.entities.mario);
    this.gravity(data.entities.goomba);
  }

  collisionDetection(data) {
    const mario = data.entities.mario;

    const entityCollisionCheck = (entity) => {
      if (mario.xPos < entity.xPos + entity.width &&
          mario.xPos + mario.width > entity.xPos &&
          mario.yPos < entity.yPos + entity.height &&
          mario.height + mario.yPos > entity.yPos) {
        // Collision Occured
        this.handleCollision(data, entity);
      }
    };

    data.entities.scenery.forEach(entity => {
      entityCollisionCheck(entity);
    });
  }

  handleCollision(data, entity) {
    const mario = data.entities.mario;
    if ((entity.type === 'ground') ||
       (entity.type === 'pipe') ||
       (entity.type === 'brick')) {

      // Left side wall
      if (mario.xPos < entity.xPos && mario.yPos >= entity.yPos) {
        mario.xPos = entity.xPos - mario.width;
      }
      // Right side wall
      if (mario.xPos > entity.xPos && mario.yPos >= entity.yPos) {
        mario.xPos = entity.xPos + entity.width;
      }
      // Top of wall
      if (mario.yPos < entity.yPos && (mario.xPos + mario.width) > entity.xPos + 10 &&
          mario.xPos < (entity.xPos + entity.width) - 10 && mario.velY >= 0) {
            mario.currentState = mario.states.standing;
            mario.yPos = entity.yPos - mario.height;
            mario.velY = 0;
      }

      // if (mario.yPos < entity.yPos && (mario.xPos + mario.width) > entity.xPos + 10 &&
      //     mario.xPos < (entity.xPos + entity.width) - 10 && mario.velY >= 0) {
      //       mario.currentState = mario.states.standing;
      //       mario.yPos = entity.yPos - mario.height;
      //       mario.velY = 0;
      // }
    }
  }

  gravity(entity) {
    entity.velY += 1.2;
    entity.yPos += entity.velY;
  }
}

export default Physics;
