class Movement {
  update(data) {
    this.mario(data);
  }

  mario(data) {
    data.entities.mario.currentState.movement(data);
  }
}

export default Movement;
