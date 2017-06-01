class Animation {
  update(data) {
    data.entities.mario.currentState.animation(data);

    data.entities.goombas.forEach(goomba => {
      goomba.currentState.animation(data);
    });
  }
}

export default Animation;
