export const Animation = {
  update: function(data) {
    Animation.jack(data);
    // Animation.coins(data);
  },

  jack: function(data) {
    data.entities.jack.currentState.animation(data);
  },

  // coins: function(data) {
  //   data.entities.coinsArray.forEach(coin => {
  //     coin.currentState.animation(data);
  //   });
  // }
};
