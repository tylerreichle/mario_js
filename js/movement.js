export const movement = {
  update(data) {
    movement.mario(data);
    movement.goombas(data);
  },

  mario(data) {
    data.entities.mario.currentState.movement(data);
  },

  goombas(data) {
    data.entities.goombas.forEach(goomba => {
      goomba.currentState.movement(data);
    });
  }
};
