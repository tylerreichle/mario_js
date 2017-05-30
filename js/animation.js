class Animation {
  update(data) {
    this._mario(data);
  }

  _mario(data) {
    data.entities.mario.currentState.animation(data);
  }

  _coins(data) {

  }
}

export default Animation;
