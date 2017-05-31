class Physics {
  update(data) {
    this.collisionDetection(data);
    this.gravity(data.entities.mario);
  }

  collisionDetection(data) {
    const mario = data.entities.mario;

    const entityCollisionCheck = (entity) => {
      if (mario.x < entity.x + entity.w &&
          mario.x + mario.w > entity.x &&
          mario.y < entity.y + entity.h &&
          mario.h + mario.y > entity.y) {
        // Collision Occured
        this.handleCollision(data, entity);
      }
    };

    data.entities.walls.forEach(wall => {
      entityCollisionCheck(wall);
    });
  }

  handleCollision(data, entity) {
    const mario = data.entities.mario;
    if (entity.type === "wall") {

      // Left side wall
      if (mario.x < entity.x && mario.y >= entity.y) {
        console.log('left');
        mario.x = entity.x - mario.w;
      }
      // Right side wall
      if (mario.x > entity.x && mario.y >= entity.y) {
        console.log('right');
        mario.x = entity.x + entity.w;
      }
      // Top of wall
      if (mario.y < entity.y && (mario.x + mario.w) > entity.x + 10 &&
          mario.x < (entity.x + entity.w) - 10 && mario.velY >= 0) {
            mario.currentState = mario.states.standing;
            mario.y = entity.y - mario.h;
            mario.velY = 0;
      }

      // if (mario.y < entity.y && (mario.x + mario.w) > entity.x + 10 &&
      //     mario.x < (entity.x + entity.w) - 10 && mario.velY >= 0) {
      //       mario.currentState = mario.states.standing;
      //       mario.y = entity.y - mario.h;
      //       mario.velY = 0;
      // }
    }
  }

  gravity(entity) {
    entity.velY += 1.2;
    entity.y += entity.velY;
  }
}

export default Physics;
