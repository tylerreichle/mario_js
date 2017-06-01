class Physics {
  update(data) {
    // this.collisionDetection(data);
    this.sceneryCollisionDetection(data);
    this.gravity(data.entities.mario);

    data.entities.goombas.forEach(goomba => {
      this.gravity(goomba);
    });
  }

  // mario
  // collisionDetection(data) {
  //   const mario = data.entities.mario;
  //
  //   const entityCollisionCheck = (mario, entity) => {
  //     if (mario.xPos < entity.xPos + entity.width &&
  //         mario.xPos + mario.width > entity.xPos &&
  //         mario.yPos < entity.yPos + entity.height &&
  //         mario.height + mario.yPos > entity.yPos) {
  //       // Collision Occured
  //       this.handleCollision(data, entity);
  //     }
  //   };
  //
  //   data.entities.scenery.forEach(entity => {
  //     entityCollisionCheck(entity);
  //   });
  // }

  sceneryCollisionDetection(data) {
    const mario = data.entities.mario;
    const goombas = data.entities.goombas;
    const scenery = data.entities.scenery;
    this.sceneryCollisionCheck([mario], scenery);
    this.sceneryCollisionCheck(goombas, scenery);
  }

  sceneryCollisionCheck(entities, scenery) {
    entities.forEach(entity => {
      scenery.forEach(scene => {
        if (entity.xPos < scene.xPos + scene.width &&
          entity.xPos + entity.width > scene.xPos &&
          entity.yPos < scene.yPos + scene.height &&
          entity.height + entity.yPos > scene.yPos) {
            // Collision Occured
            this.sceneryCollision(entity, scene);
          }
      });
    });
  }


  sceneryCollision(entity, scene) {
      // Left side wall
      if (entity.xPos < scene.xPos && entity.yPos >= scene.yPos) {
        entity.xPos = scene.xPos - entity.width;
      }
      // Right side wall
      if (entity.xPos > scene.xPos && entity.yPos >= scene.yPos) {
        entity.xPos = scene.xPos + scene.width;
      }
      // Top of wall
      if (entity.yPos < scene.yPos && (entity.xPos + entity.width) > scene.xPos + 10 &&
          entity.xPos < (scene.xPos + scene.width) - 10 && entity.velY >= 0) {
            // entity.currentState = entity.states.standing;
            entity.yPos = scene.yPos - entity.height;
            entity.velY = 0;
      }

      // if (mario.yPos < entity.yPos && (mario.xPos + mario.width) > entity.xPos + 10 &&
      //     mario.xPos < (entity.xPos + entity.width) - 10 && mario.velY >= 0) {
      //       mario.currentState = mario.states.standing;
      //       mario.yPos = entity.yPos - mario.height;
      //       mario.velY = 0;
      // }
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
