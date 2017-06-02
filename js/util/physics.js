export const physics = {
  update(data) {
    // collisions
    this.collisionDetection(data);
    this.sceneryCollisionDetection(data);

    // apply gravity
    this.gravity(data.entities.mario);

    data.entities.mushrooms.forEach(mushroom => {
      this.gravity(mushroom);
    });

    data.entities.goombas.forEach(goomba => {
      this.gravity(goomba);
    });
    data.entities.koopas.forEach(koopa => {
      this.gravity(koopa);
    });
  },

  collisionDetection(data) {
    const mario = data.entities.mario;
    const coins = data.entities.coins;
    const mushrooms = data.entities.mushrooms;
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

      mushrooms.forEach(mushroom => {
        entityCollisionCheck(mushroom);
      });

      coins.forEach(coin => {
        entityCollisionCheck(coin);
      });

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
        // mario's right
        if (mario.xPos < entity.xPos && mario.yPos >= entity.yPos) {
          mario.xPos = entity.xPos - mario.width;
          // slide shell instead of death
          if (entity.type === 'koopa' && entity.currentState === entity.states.hiding) {
            entity.direction = 'right';
            entity.xPos += 5;
            setTimeout(() => {
              entity.currentState = entity.states.sliding;
            }, 50);

          } else {
            mario.currentState = mario.states.dead;
            this.marioDeath(data);
          }
        }
        // mario's left
        if (mario.xPos > entity.xPos && mario.yPos >= entity.yPos) {
          mario.xPos = entity.xPos + mario.width;

          if (entity.type === 'koopa' &&
          entity.currentState === entity.states.hiding) {

            entity.direction = 'left';
            entity.xPos -= 5;
            setTimeout(() => {
              entity.currentState = entity.states.sliding;
            }, 50);

          } else {
            mario.currentState = mario.states.dead;
            this.marioDeath(data);
          }
        }
        //  Mario bot
        if (mario.yPos < entity.yPos &&
          (mario.xPos + mario.width) > entity.xPos &&
          mario.xPos < (entity.xPos + entity.width) && mario.velY >= 0) {

            mario.currentState = mario.states.standing;
            mario.yPos = entity.yPos - mario.height;
            mario.velY = 0;

            if (entity.type === 'goomba') {
              this.goombaDeath(entity, data);

            } else if (entity.type === 'koopa') {
              if (entity.currentState === entity.states.hiding) {
                this.koopaSlide(entity);
              } else if (entity.currentState === entity.states.sliding) {
                this.koopaDeath(entity, data);
              } else {
                this.koopaHide(entity);
              }
            }

            if (mario.yPos > entity.yPos &&
              (mario.xPos + mario.width) >= entity.xPos &&
              mario.xPos < (entity.xPos + entity.width)) {

                mario.velY = 1.2;
                mario.xPos = entity.xPos;
                this.marioDeath(data);
              }
            }
          }


          if (entity.type === 'coin') {
            const coins = data.entities.coins;
            const coinSound = entity.coinSound.cloneNode();
            const index = coins.indexOf(entity);

            data.entities.score.value += 50;
            data.entities.score.coinCount += 1;
            coinSound.play();
            delete coins[index];
          }
        },

        marioDeath(data) {
          const mario = data.entities.mario;
          const deathSound = mario.deathSound;

          data.control = false;
          deathSound.play();

          setTimeout(() => {
            mario.type = 'dead';
            mario.velY -= 13;

          }, 500);
        },

        goombaDeath(entity, data) {
          data.entities.score.value += 100;
          entity.currentState = entity.states.dead;
          entity.type = 'dying';
          const squishSound = entity.squishSound.cloneNode();
          squishSound.play();

          setTimeout(() => {
            const index = data.entities.goombas.indexOf(entity);
            delete data.entities.goombas[index];
          }, 800);
        },

        koopaHide(entity) {
          entity.type = 'invulnerable';
          entity.currentState = entity.states.hiding; // koopa stomp

          setTimeout(() => {
            entity.type = 'koopa';
          }, 200);
        },

        koopaSlide(entity) {
          entity.type = 'invulnerable';
          entity.currentState = entity.states.sliding;

          setTimeout(() => {
            entity.type = 'koopa';
          }, 200);
        },

        koopaDeath(entity, data) {
          data.entities.score.value += 100;
          entity.velY -= 10;
          entity.type = 'dead';

          setTimeout(() => {
            const index = data.entities.koopas.indexOf(entity);
            delete data.entities.koopas[index];
          }, 400);
        },

        sceneryCollisionDetection(data) {
          const mario = data.entities.mario;
          const mushrooms = data.entities.mushrooms;
          const goombas = data.entities.goombas;
          const koopas = data.entities.koopas;
          const scenery = data.entities.scenery;

          this.sceneryCollisionCheck(data, [mario], scenery);
          this.sceneryCollisionCheck(data, mushrooms, scenery);
          this.sceneryCollisionCheck(data, goombas, scenery);
          this.sceneryCollisionCheck(data, koopas, scenery);
        },

        sceneryCollisionCheck(data, entities, scenery) {
          entities.forEach(entity => {
            scenery.forEach(scene => {
              if (entity.xPos < scene.xPos + scene.width &&
                entity.xPos + entity.width > scene.xPos &&
                entity.yPos < scene.yPos + scene.height &&
                entity.height + entity.yPos > scene.yPos) {
                  // Collision Occured
                  this.sceneryCollision(data, entity, scene);
                }
              });
            });
          },

          sceneryCollision(data, entity, scene) {
            // Left side
            if (entity.xPos < scene.xPos && entity.yPos >= scene.yPos) {
              entity.xPos = scene.xPos - entity.width;

              if ((entity.type === 'goomba') ||
              (entity.type === 'koopa')  ||
              (entity.type === 'mushroom')) {
                entity.direction = entity.direction === 'left' ? 'right' : 'left';
              }
            }
            // Right side
            if (entity.xPos > scene.xPos && entity.yPos >= scene.yPos) {
              entity.xPos = scene.xPos + scene.width;

              if ((entity.type === 'goomba') ||
              (entity.type === 'koopa')  ||
              (entity.type === 'mushroom')) {
                entity.direction = entity.direction === 'left' ? 'right' : 'left';
              }
            }
            // Top
            if (entity.yPos < scene.yPos &&
              (entity.xPos + entity.width) > scene.xPos + 10 &&
              entity.xPos < (scene.xPos + scene.width) - 10 && entity.velY >= 0) {

                if (entity.type !== 'dead') { // fall through ground when dead
                  if (entity.type === 'mario') {
                    entity.currentState = entity.states.standing;
                  }
                  entity.yPos = scene.yPos - entity.height;
                  entity.velY = 0;
                }
              }

              // Bot
              if (entity.yPos > scene.yPos &&
                (entity.xPos + entity.width) >= scene.xPos &&
                entity.xPos < (scene.xPos + scene.width) && entity.velY < 0) {

                  if (scene.type === 'block') {
                    scene.sprite = scene.used;

                    if (scene.coin) {
                      const coinSound = scene.coinSound.cloneNode();
                      coinSound.play();
                      scene.coin = false;
                      scene.drawCoin(data);
                      data.entities.score.value += 50;
                      data.entities.score.coinCount += 1;
                    }
                  }

                  if (entity.type === 'mario') {
                    const bumpSound = entity.bumpSound.cloneNode();
                    bumpSound.play();
                  }

                  entity.yPos = entity.yPos + entity.height;
                  entity.velY = 1.2;
                  entity.xPos = scene.xPos;
                }

              },

              gravity(entity) {
                entity.velY += 1.2;
                entity.yPos += entity.velY;
              }
            };
