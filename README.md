# Mario JS
## Super Mario Bros Level 1-1 in JavaScript

## [Play Now!](https://tylerreichle.github.io/mario_js/)

 Mario runs through each level trying to reach the castle on the other side to save the princess. Each level contains various enemies, coins to collect, and mushrooms to power-up Mario. Mario's primary form of attack is jumping on top of enemies but touching enemies from the sides results in loss of a life.

<img src="docs/screens/gameplay.gif" alt="gameplay gif" width="760" height="600"/>

 ## Controls

| Action     | Key Input                       |
|:----------:|:-------------------------------:|
| Move Left  | 'A' / Left-Arrow               |
| Move Right | 'D' / Right-Arrow              |
| Jump       | 'W' / Spacebar / Up-Arrow      |

## Technologies Used

Super Mario Bros JS was build using the following technologies:

- Vanilla JavaScript used for overall game structure and logic.

- Minified version of jQuery used to detect user input.

- A HTML5 Canvas used for rendering of the current game state and all game entities.

- Webpack used to bundle and serve up the various scripts in the correct order.

<img src="docs/screens/big_mario.png" alt="Screenshot Two" width="760" height="600"/>

## Technical Details

Game viewport updates to follow Mario based of his current x pos on the canvas. Render will only draw entities currently in the viewport, preventing unnessesary usage of resources and memory.

```javascript
// game.js
static updateView(data) {
  const viewport = data.viewport;
  const margin = viewport.width / 6;
  const center = {
    x: data.entities.mario.xPos + (data.entities.mario.width * 0.5),
    y: data.entities.mario.yPos + (data.entities.mario.height * 0.5),
  };

  if (center.x < viewport.vX + (margin * 2)) {
    viewport.vX = Math.max(center.x - margin, 0);
  } else if (center.x > (viewport.vX + viewport.width) - (margin * 2)) {
    viewport.vX = Math.min((center.x + margin) - viewport.width, 3400 - viewport.width);
  }
}

// render.js
drawEntity(entity, data) {
  if (((entity.xPos + entity.width >= data.viewport.vX &&
        entity.xPos + entity.width <= data.viewport.vX + data.viewport.width)) &&
      ((entity.yPos + entity.height >= data.viewport.vY &&
        entity.yPos + entity.height <= data.viewport.vY + data.viewport.height))) {
      // draw entity to screen
    }
  }
```

Entities animated by drawing multiple sprites

```javascript
this.spriteAnimations = {
  spin: {
    frames: [
      new Sprite(spriteSheet, 5, 5, 10, 14),
      new Sprite(spriteSheet, 21, 5, 10, 14),
      new Sprite(spriteSheet, 37, 5, 10, 14),
      new Sprite(spriteSheet, 53, 5, 10, 14),
    ],
    currentFrame: 0,
  }

this.states = {
  spinning: {
    animation(data) {
      if (data.animationFrame % 13 === 0) {
        self.sprite =
          self.spriteAnimations.spin.frames[self.spriteAnimations.spin.currentFrame];
        self.spriteAnimations.spin.currentFrame += 1;

        if (self.spriteAnimations.spin.currentFrame > 3) {
          self.spriteAnimations.spin.currentFrame = 0;
        }
      }
    },
  },
```

Map builder

```javascript
level.ground.forEach((ground) => {
  this.sceneryEntities.push(
    new Scenery.Ground(this.tileset, ground[0], ground[1], ground[2], ground[3]),
  );
});

level.pipes.forEach((pipe) => {
  this.sceneryEntities.push(
    new Scenery.Pipe(this.tileset, pipe[0], pipe[1], pipe[2], pipe[3]),
  );
});

renderMap(data) {
  this.sceneryEntities.forEach((scene) => {
    this.drawEntity(scene, data);
  });

  this.brickEntities.forEach((brick) => {
    this.drawEntity(brick, data);
  });
```

## Bonus features
There are many additional feature that could be added in the future. Some anticipated updates are:

- Add the ability to grab flower power-ups and shoot fireballs at enemies
- Underground portion of level
- Multiple levels and additional enemy types.
