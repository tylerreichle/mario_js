export const movement = {
  update(data) {
    data.entities.mario.currentState.movement(data);

    data.entities.goombas.forEach(goomba => {
      goomba.currentState.movement(data);
    });

    data.entities.koopas.forEach(goomba => {
      goomba.currentState.movement(data);
    });
  }
};
