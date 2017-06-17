const animation = {
  update(data) {
    data.entities.mario.currentState.animation(data);

    data.entities.coins.forEach((coin) => {
      coin.currentState.animation(data);
    });

    data.entities.mushrooms.forEach((mushroom) => {
      mushroom.currentState.animation(data);
    });

    data.entities.goombas.forEach((goomba) => {
      goomba.currentState.animation(data);
    });

    data.entities.koopas.forEach((koopa) => {
      koopa.currentState.animation(data);
    });
  },
};

export { animation as default };
