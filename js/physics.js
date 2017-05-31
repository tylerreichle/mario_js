class Physics {
  update(data) {
    this.gravity(data.entities.mario);
  }

  gravity(entity) {
    entity.velY += 1.2,
    entity.y += entity.velY;
  }
}

export default Physics;
