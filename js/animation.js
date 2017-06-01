class Animation {
  update(data) {
    data.entities.mario.currentState.animation(data);
  }
}

export default Animation;
