export const Movement = {
  update(data) {
    Movement.mario(data);
  },

  mario(data) {
    data.entities.mario.currentState.movement(data);
  },
};
