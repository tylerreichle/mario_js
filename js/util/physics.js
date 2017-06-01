export const physics = {
  update(data) {
    // collisions
    this.collisionDetection(data);
    this.sceneryCollisionDetection(data);

    // apply gravity
    this.gravity(data.entities.mario);

    data.entities.goombas.forEach(goomba => {
      this.gravity(goomba);
    });

    data.entities.koopas.forEach(koopa => {
      this.gravity(koopa);
    });
  },

  collisionDetection(data) {
    const mario = data.entities.mario;
    const goombas = data.entities.goombas;
    const koopas = data.entities.koopas;

    const entityCollisionCheck = (entity) => {
      if (mario.xPos < entity.xPos + entity.width &&
        mario.xPos + mario.width > entity.xPos &&
        mario.yPos < entity.yPos + entity.height &&
        mario.height + mario.yPos > entity.yPos) {
          // Collision Occured
          this.handleCollision(data, entity);
        }
      };

      goombas.forEach(goomba => {
        entityCollisionCheck(goomba);
      });

      koopas.forEach(koopa => {
        entityCollisionCheck(koopa);
      });
    },

    handleCollision(data, entity) {
      const mario = data.entities.mario;

      if ((entity.type === 'goomba') || (entity.type === 'koopa')) {
        // mario right
        if (mario.xPos < entity.xPos && mario.yPos >= entity.yPos) { // mario damage
          mario.xPos = entity.xPos - mario.width;

          if (entity.type === 'koopa' && entity.currentState === entity.states.hiding) { // slide shell instead of death
            entity.currentState = entity.states.sliding;
          } else {
            mario.currentState = mario.states.dead;
            this.marioDeath(data);
          }
        }
        // mario left
        if (mario.xPos > entity.xPos && mario.yPos >= entity.yPos) { // mario damage
          mario.xPos = entity.xPos + entity.width;

          if (entity.type === 'koopa' && entity.currentState === entity.states.hiding) {
            entity.currentState = entity.states.sliding;
          } else {
            mario.currentState = mario.states.dead;
            this.marioDeath(data);
          }
        }
        //  Mario bot
        if (mario.yPos < entity.yPos && (mario.xPos + mario.width) > entity.xPos &&
        mario.xPos < (entity.xPos + entity.width) && mario.velY >= 0) {
          mario.currentState = mario.states.standing;
          mario.yPos = entity.yPos - mario.height;
          mario.velY = 0;

          if (entity.type === 'goomba') { // goomba stomp
            entity.currentState = entity.states.dead;
            entity.type = 'dying';
            const squishSound = entity.squishSound.cloneNode();
            squishSound.play();

            setTimeout(() => {
              const index = data.entities.goombas.indexOf(entity);
              delete data.entities.goombas[index];
            }, 800);

          } else if (entity.type === 'koopa') {
            if (entity.currentState === entity.states.hiding) { // stationary shell stomp
              entity.type = 'invulnerable';
              entity.currentState = entity.states.sliding;

              setTimeout(() => {
                entity.type = 'koopa';
              }, 200);

            } else if (entity.currentState === entity.states.sliding) { // sliding shell stomp
              entity.velY -= 10;
              entity.type = 'dead';

              setTimeout(() => {
                const index = data.entities.koopas.indexOf(self);
                delete data.entities.koopas[index];
              }, 400);
            } else {
              entity.type = 'invulnerable';
              entity.currentState = entity.states.hiding; // koopa stomp

              setTimeout(() => {
                entity.type = 'koopa';
              }, 200);
            }
          }
        }
      }
    },

    marioDeath(data) {
      const mario = data.entities.mario;
      data.control = false;

      setTimeout(() => {
        mario.type = 'dead';
        mario.velY -= 13;

      }, 500);
    },

    // if (mario.yPos < entity.yPos && (mario.xPos + mario.width) > entity.xPos + 10 &&
    //     mario.xPos < (entity.xPos + entity.width) - 10 && mario.velY >= 0) {
    //       mario.currentState = mario.states.standing;
    //       mario.yPos = entity.yPos - mario.height;
    //       mario.velY = 0;
    // }

    sceneryCollisionDetection(data) {
      const mario = data.entities.mario;
      const goombas = data.entities.goombas;
      const koopas = data.entities.koopas;
      const scenery = data.entities.scenery;

      this.sceneryCollisionCheck([mario], scenery);
      this.sceneryCollisionCheck(goombas, scenery);
      this.sceneryCollisionCheck(koopas, scenery);
    },

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
      },

      sceneryCollision(entity, scene) {
        // Left side
        if (entity.xPos < scene.xPos && entity.yPos >= scene.yPos) {
          entity.xPos = scene.xPos - entity.width;

          if ((entity.type === 'goomba') || (entity.type === 'koopa')) {
            entity.direction = entity.direction === 'left' ? 'right' : 'left';
          }
        }
        // Right side
        if (entity.xPos > scene.xPos && entity.yPos >= scene.yPos) {
          entity.xPos = scene.xPos + scene.width;

          if ((entity.type === 'goomba') || (entity.type === 'koopa')) {
            entity.direction = entity.direction === 'left' ? 'right' : 'left';
          }
        }
        // Top
        if (entity.yPos < scene.yPos && (entity.xPos + entity.width) > scene.xPos + 10 &&
        entity.xPos < (scene.xPos + scene.width) - 10 && entity.velY >= 0) {
          if (entity.type !== 'dead') { // fall through ground when dead
            if (entity.type === 'mario') {
              entity.currentState = entity.states.standing;
            }
            entity.yPos = scene.yPos - entity.height;
            entity.velY = 0;
          }
        }

        // if (mario.yPos < entity.yPos && (mario.xPos + mario.width) > entity.xPos + 10 &&
        //     mario.xPos < (entity.xPos + entity.width) - 10 && mario.velY >= 0) {
        //       mario.currentState = mario.states.standing;
        //       mario.yPos = entity.yPos - mario.height;
        //       mario.velY = 0;
        // }
      },

      gravity(entity) {
        entity.velY += 1.2;
        entity.yPos += entity.velY;
      }
    };
