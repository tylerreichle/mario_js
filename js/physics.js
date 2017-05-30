export const Physics = {
  update(data) {
    Physics.helpers.gravity(data.entities.mario);
    Physics.collisionDetection(data);
  },

  collisionDetection(data) {
    const mario = data.entities.mario;

    const entityCollisionCheck = (entity) => {
      if (mario.x < entity.x + entity.w &&
          mario.x + mario.w > entity.x &&
          mario.y < entity.y + entity.h &&
          mario.h + mario.y > entity.y) {
            // Collision Occured
            Physics.handleCollision(data, entity);
          }
    };

    // data.entities.wallsArray.forEach(wall => {
    //   entityCollisionCheck(wall);
    // });
    //
    // data.entities.coinsArray.forEach(coin => {
    //   entityCollisionCheck(coin);
    // });

    // entityCollisionCheck(data.entities.exitPipe);
  },

  // handleCollision(data, entity) {
  //   const mario = data.entities.mario;
  //
  //   // if (entity.type === "wall") {
  //   //   // Left side wall
  //   //   if (mario.x < entity.x && mario.y >= entity.y) {
  //   //     mario.x = entity.x - mario.w;
  //   //   }
  //   //   // Right side wall
  //   //   if (mario.x > entity.x && mario.y >= entity.y) {
  //   //     mario.x = entity.x + entity.w;
  //   //   }
  //   //   // Top of wall
  //   //   if (mario.y < entity.y && (mario.x + mario.w) > entity.x + 10 &&
  //   //       mario.x < (entity.x + entity.w) - 10 && mario.velY >= 0) {
  //   //         mario.currentState = mario.states.standing;
  //   //         mario.y = entity.y - mario.h;
  //   //         mario.velY = 0;
  //   //   }
  //   }
  //
  //   if (entity.type === "exitPipe") {
  //     // Left side pipe
  //     if (mario.x < entity.x && mario.y >= entity.y) {
  //       if (mario.velY === 0) {
  //         mario.x += 200;
  //       } else {
  //         mario.x = entity.x - mario.w;
  //       }
  //     }
  //
  //     // Right side pipe
  //     if (mario.x > entity.x && mario.y >= entity.y) {
  //       mario.x = entity.x + entity.w; // out of screen
  //     }
  //
  //     // Top of pipe
  //     if (mario.y < entity.y && (mario.x + mario.w) > entity.x + 10 &&
  //         mario.x < (entity.x + entity.w) - 10 && mario.velY >= 0) {
  //           mario.currentState = mario.states.standing;
  //           mario.y = entity.y - mario.h;
  //           mario.velY = 0;
  //     }
  //   }
  //
  //   if (entity.type === "coin") {
  //     const coinsArray = data.entities.coinsArray;
  //     const coinSound = entity.sound.cloneNode(); // clone node allows for simultanious plays of sound
  //     const index = coinsArray.indexOf(entity);
  //
  //
  //     data.entities.score.value += 1;
  //     coinSound.play();
  //     coinsArray.splice(index, 1);
  //   }
  // },

  helpers: {
    gravity(entity) {
      entity.velY += 1.2;
      entity.y += entity.velY;
    }
  }
};
