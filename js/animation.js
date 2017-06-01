class Animation {
  update(data) {
    data.entities.mario.currentState.animation(data);
    data.entities.goomba.currentState.animation(data);
  }
}

export default Animation;
