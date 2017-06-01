export const Movement = {
  update(data) {
    Movement.mario(data);
    Movement.goombas(data);
  },

  mario(data) {
    data.entities.mario.currentState.movement(data);
  },

  goombas(data) {
    data.entities.goomba.currentState.movement(data);
  }
};
