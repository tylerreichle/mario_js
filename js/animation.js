export const Animation = {
  update: function(data) {
    Animation.mario(data);
    // Animation.coins(data);
  },

  mario: function(data) {
    data.entities.mario.currentState.animation(data);
  },

  // coins: function(data) {
  //   data.entities.coinsArray.forEach(coin => {
  //     coin.currentState.animation(data);
  //   });
  // }
};
