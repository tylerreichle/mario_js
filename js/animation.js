export const animation = {
  update(data) {
    data.entities.mario.currentState.animation(data);

    data.entities.goombas.forEach(goomba => {
      goomba.currentState.animation(data);
    });
  }
};
