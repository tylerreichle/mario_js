# Super Mario Bros

## Background

Super Mario Bros is a 2D video game platforming originally developed and released by Nintendo is 1983. Mario runs through each level trying to reach the castle on the other side to save the princess. Each level contains various enemies, coins to collect, and mushrooms to power-up Mario. Mario's primary form of attack is jumping on top of enemies but touching enemies from the sides results in loss of a life. The game is over when the player runs out of lives or the game timer runs out.

There many levels in each Super Mario Bros release and this simulation will recreate the first level with as close to the number of features in the game that time will allow. These will be outlined in the **Functionality & MVP** and **Bonus Features section**.

## Functionality & MVP

In this Super Mario Bros recreation the player will be able to:

- Play through the entire first level
- Attack enemies by jumping on them from above
- Collect coins by smashing bricks and jumping into boxes
- Power-up Mario by collecting mushrooms

In addition this project will include:

- An about modal describing the background and how to play the game
- A production README

## Wireframes

![Index Page](./docs/wireframes/MarioJS.png)

Plan for the background to be a Gameboy

## Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and a minified version of jquery for overall structure and game logic
- HTML5 Canvas will be used for DOM manipulation and rendering of the game state
- Webpack to bundle and serve up the various scripts in the correct order

In addition to the webpack entry file, there will be the following scripts used in this project:

**entities.js**: Entities will be used to store the current state of all entities in the game. This includes the construction of Mario, enemies, coins and walls locations.

**game.js**: Game will be the main game class and handle logic for running the game loop. This will also create the foreground and background canvas.

**input.js**: Input will handle listening for user input and passing on that to the game state.

**animation.js** and **movement.js**: Movement will control enemy movement and update the game state based on player input. Animations will be a helper function used for calling the animation method of each entity in the game after user input.

**physics.js**: Physics will be in charge of collision detection of all the game entities. This will also apply gravity to all entities.

**render.js**: Render will draw each game entity onto the main canvas along with drawing the hud onto the canvas.

## Implementation Timeline

**Day 1**: Setup necessary Node modules, including Webpack config and an entry file. Write the essentials methods in all of the listed scripts to get the game background drawn with Mario in the foreground. Construct the level map using the tileset spritesheet. Add wall and ground entities.

**Day 2**: Day two will focus on filling the map in with breakable bricks and question mark blocks along with their behavior with Mario collision. Place coins in the correct locations throughout the map as well as inside select bricks and block.

**Day 3**: Create and render the Goomba and Koopa Turtle enemies and their appropriate actions with Mario collision.

Add the ability for Mario to shrink upon taking damage and grow when picking up a mushroom including death animation.

**Day 4**: Add the hud with lives count, player score, and countdown timer. Style the index page with modals for the info and controls boxes.

## Bonus features

There are many additional feature that could be added in the future. Some anticipated updates are:

- Add the ability to grab flower power-ups and shoot fireballs at enemies
- Underground portion of level
- Multiple levels and additional enemy types.
