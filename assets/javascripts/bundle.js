/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Entity {
  constructor(type, sprite, xPos, yPos, width, height) {
    this.type = type;
    this.sprite = sprite;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Entity;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sprite {
  constructor(img, srcX, srcY, srcW, srcH) {
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sprite;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Goomba extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 115, 5, 16, 16);
    super('goomba', sprite, xPos, yPos, width, height);

    const self = this;
    this.squishSound = new Audio('./assets/audio/sounds/stomp.wav');

    this.spriteAnimations = {
      walking: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 115, 5, 16, 16),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 131, 5, 16, 16),
        ],
        currentFrame: 0,
      },
      dead: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 147.5, 5, 16, 16),
    };

    this.states = {
      walking: {
        movement(data) {
          if (self.direction === 'left') {
            self.xPos -= self.velX;
          } else {
            self.xPos += self.velX;
          }
        },
        animation(data) {
          if (data.animationFrame % 10 === 0) {
            self.sprite = self.spriteAnimations.walking
              .frames[self.spriteAnimations.walking.currentFrame];

            self.spriteAnimations.walking.currentFrame += 1;

            if (self.spriteAnimations.walking.currentFrame > 1) {
              self.spriteAnimations.walking.currentFrame = 0;
            }
          }
        },
      },
      dead: {
        movement(data) {
          self.velX = 0;
        },
        animation(data) {
          self.sprite = self.spriteAnimations.dead;
        },
      },
    };

    this.currentState = this.states.walking;
    this.direction = 'right';
    this.velY = 0;
    this.velX = 0.7;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Goomba;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Koopa extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 253, 29, 16, 24);
    super('koopa', sprite, xPos, yPos, width, height);

    const self = this;
    this.squishSound = new Audio('./assets/audio/sounds/stomp.wav');

    this.spriteAnimations = {
      walkRight: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 253, 29, 16, 24),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 237, 29, 16, 24),
        ],
        currentFrame: 0,
      },

      walkLeft: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 173, 5, 16, 24),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 189, 5, 16, 24),
        ],
        currentFrame: 0,
      },
      hiding: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 237.5, 14, 16, 15),
    };

    this.states = {
      walking: {
        movement(data) {
          if (self.direction === 'right') {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },

        animation(data) {
          if (self.direction === 'right') {
            if (data.animationFrame % 10 === 0) {
              self.sprite = self.spriteAnimations.walkRight
                .frames[self.spriteAnimations.walkRight.currentFrame];

              self.spriteAnimations.walkRight.currentFrame += 1;

              if (self.spriteAnimations.walkRight.currentFrame > 1) {
                self.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 10 === 0) {
              self.sprite = self.spriteAnimations.walkLeft
                .frames[self.spriteAnimations.walkLeft.currentFrame];
              self.spriteAnimations.walkLeft.currentFrame += 1;

              if (self.spriteAnimations.walkLeft.currentFrame > 1) {
                self.spriteAnimations.walkLeft.currentFrame = 0;
              }
            }
          }
        },
      },

      hiding: {
        movement(data) {
          self.width = 16;
          self.height = 17;
          self.velX = 0;
        },
        animation(data) {
          self.sprite = self.spriteAnimations.hiding;
        },
      },

      sliding: {
        movement(data) {
          self.velX = 3;
          if (self.direction === 'right') {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },

        animation(data) {
          self.sprite = self.spriteAnimations.hiding;
        },
      },
    };

    this.currentState = this.states.walking;
    this.direction = 'right';
    this.velY = 0;
    this.velX = 0.5;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Koopa;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Mario extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 651, 5, 16, 16);
    super('mario', sprite, xPos, yPos, width, height);

    const self = this;
    this.jumpSound = new Audio('./assets/audio/sounds/jump.wav');
    this.deathSound = new Audio('./assets/audio/sounds/mario_death.wav');
    this.bumpSound = new Audio('./assets/audio/sounds/bump.wav');
    this.powerupSound = new Audio('./assets/audio/sounds/powerup.wav');
    this.powerdownSound = new Audio('./assets/audio/sounds/powerdown.wav');

    this.spriteAnimations = {
      walkRight: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 667, 5, 16, 16),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 683, 5, 16, 16),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 699, 5, 16, 16),
        ],
        currentFrame: 0,
      },
      walkLeft: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 844, 21, 16, 16),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 828, 21, 16, 16),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 812, 21, 16, 16),
        ],
        currentFrame: 0,
      },
      bigWalkRight: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 295, 5, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 311, 5, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 327, 5, 16, 32),
        ],
        currentFrame: 0,
      },
      bigWalkLeft: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 583, 37, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 567, 37, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 551, 37, 16, 32),
        ],
        currentFrame: 0,
      },
      resizeRight: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 519, 5, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 279, 5, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 519, 5, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 279, 5, 16, 32),
        ],
        currentFrame: 0,
      },
      resizeLeft: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 519, 5, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 279, 5, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 519, 5, 16, 32),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 279, 5, 16, 32),
        ],
        currentFrame: 0,
      },
      standRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 651, 5, 16, 16),
      standLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 860, 21, 16, 16),
      jumpRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 731, 5, 16, 16),
      jumpLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 778, 22, 16, 16),

      bigStandRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 278.7, 5, 16, 32),
      bigStandLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 599.5, 37, 16, 32),
      bigJumpRight: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 359, 5, 16, 32),
      bigJumpLeft: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 519, 37, 16, 32),
      dead: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 748, 5, 16, 16),
    };

    this.states = {
      jumping: {
        movement(data) {
          if (self.velY === 1.2) {
            const jumpSound = self.jumpSound.cloneNode();
            jumpSound.play();
            self.velY -= 14;
          }
        },
        animation(data) {
          if (self.direction === 'right') {
            self.sprite = self.spriteAnimations.jumpRight;
          } else {
            self.sprite = self.spriteAnimations.jumpLeft;
          }
        },
      },

      bigJumping: {
        movement(data) {
          if (self.velY === 1.2) {
            self.jumpSound.play();
            self.velY -= 14;
          }
        },
        animation(data) {
          if (self.direction === 'right') {
            self.sprite = self.spriteAnimations.bigJumpRight;
          } else {
            self.sprite = self.spriteAnimations.bigJumpLeft;
          }
        },
      },

      standing: {
        movement(data) {

        },
        animation(data) {
          if (self.direction === 'right') {
            self.sprite = self.spriteAnimations.standRight;
          } else {
            self.sprite = self.spriteAnimations.standLeft;
          }
        },
      },

      bigStanding: {
        movement(data) {

        },
        animation(data) {
          if (self.direction === 'right') {
            self.sprite = self.spriteAnimations.bigStandRight;
          } else {
            self.sprite = self.spriteAnimations.bigStandLeft;
          }
        },
      },

      walking: {
        movement(data) {
          if (self.direction === 'right') {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },

        animation(data) {
          if (self.direction === 'right') {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.walkRight
                .frames[self.spriteAnimations.walkRight.currentFrame];

              self.spriteAnimations.walkRight.currentFrame += 1;

              if (self.spriteAnimations.walkRight.currentFrame > 2) {
                self.spriteAnimations.walkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.walkLeft
                .frames[self.spriteAnimations.walkLeft.currentFrame];
              self.spriteAnimations.walkLeft.currentFrame += 1;

              if (self.spriteAnimations.walkLeft.currentFrame > 2) {
                self.spriteAnimations.walkLeft.currentFrame = 0;
              }
            }
          }
        },
      },

      bigWalking: {
        movement(data) {
          if (self.direction === 'right') {
            self.xPos += self.velX;
          } else {
            self.xPos -= self.velX;
          }
        },

        animation(data) {
          if (self.direction === 'right') {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.bigWalkRight
                .frames[self.spriteAnimations.bigWalkRight.currentFrame];

              self.spriteAnimations.bigWalkRight.currentFrame += 1;

              if (self.spriteAnimations.bigWalkRight.currentFrame > 2) {
                self.spriteAnimations.bigWalkRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.bigWalkLeft
                .frames[self.spriteAnimations.bigWalkLeft.currentFrame];
              self.spriteAnimations.bigWalkLeft.currentFrame += 1;

              if (self.spriteAnimations.bigWalkLeft.currentFrame > 2) {
                self.spriteAnimations.bigWalkLeft.currentFrame = 0;
              }
            }
          }
        },
      },

      resizing: {
        movement(data) {

        },
        animation(data) {
          if (self.direction === 'right') {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.resizeRight
                .frames[self.spriteAnimations.resizeRight.currentFrame];

              self.spriteAnimations.resizeRight.currentFrame += 1;

              if (self.spriteAnimations.resizeRight.currentFrame > 3) {
                self.spriteAnimations.resizeRight.currentFrame = 0;
              }
            }
          } else {
            if (data.animationFrame % 5 === 0) {
              self.sprite = self.spriteAnimations.resizeLeft
                .frames[self.spriteAnimations.resizeLeft.currentFrame];
              self.spriteAnimations.resizeLeft.currentFrame += 1;

              if (self.spriteAnimations.resizeLeft.currentFrame > 3) {
                self.spriteAnimations.resizeLeft.currentFrame = 0;
              }
            }
          }
        },
      },

      dead: {
        movement(data) {
          self.velX = 0;
        },

        animation(data) {
          self.sprite = self.spriteAnimations.dead;
        },
      },
    };

    this.currentState = this.states.standing;
    this.direction = 'right';
    this.bigMario = false;
    this.velY = 0;
    this.velX = 3.8;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mario;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Score {
  constructor(xPos, yPos) {
    this.value = 0;
    this.coinCount = 0;
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = '12px';
    this.font = 'PixelEmulator';
    this.color = 'white';
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Score;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
const levelOne = {

  flag: [3185, 24, 16, 24],
  flagpole: [3185, 48, 16, 135],
  castle: [3263, 112, 80, 80],

  blocks: [
    [256, 128, 16, 16], [352, 64, 16, 16], [368, 128, 16, 16],
    [1264, 128, 16, 16], [1520, 64, 16, 16], [1712, 128, 16, 16],
    [1760, 128, 16, 16], [1808, 128, 16, 16], [2080, 64, 16, 16],
    [2096, 64, 16, 16], [2736, 128, 16, 16],
  ],

  goombas: [
    [512, 176, 16, 16],
    [672, 176, 16, 16],
    [832, 176, 16, 16],
    [2768, 176, 16, 16],
    [560, 176, 16, 16],
    [1920, 176, 16, 16],
  ],

  koopas: [
    [400, 176, 16, 24],
    [864, 176, 16, 24],
    [2352, 176, 16, 24],
  ],

  smallClouds: [
    [311, 16, 32, 24],
    [903, 32, 32, 24],
    [1080, 16, 32, 24],
    [1687, 32, 32, 24],
    [1863, 16, 32, 24],
    [2455, 32, 32, 24],
    [2631, 16, 32, 24],
    [3223, 32, 32, 24],
  ],

  mediumClouds: [
    [584, 16, 48, 24],
    [1368, 16, 48, 24],
    [2135, 16, 48, 24],
    [2904, 16, 48, 24],
  ],

  largeClouds: [
    [440, 32, 64, 24],
    [1224, 32, 64, 24],
    [1992, 32, 64, 24],
    [2759, 32, 64, 24],
  ],

  ground: [
    [-16, 0, 16, 200], [0, 192, 16, 16], [16, 192, 16, 16], [32, 192, 16, 16],
    [48, 192, 16, 16], [64, 192, 16, 16], [80, 192, 16, 16], [96, 192, 16, 16],
    [112, 192, 16, 16], [128, 192, 16, 16], [144, 192, 16, 16],
    [160, 192, 16, 16], [176, 192, 16, 16], [192, 192, 16, 16],
    [208, 192, 16, 16], [224, 192, 16, 16], [240, 192, 16, 16],
    [256, 192, 16, 16], [272, 192, 16, 16], [288, 192, 16, 16],
    [304, 192, 16, 16], [320, 192, 16, 16], [336, 192, 16, 16],
    [352, 192, 16, 16], [368, 192, 16, 16], [384, 192, 16, 16],
    [400, 192, 16, 16], [416, 192, 16, 16], [432, 192, 16, 16],
    [448, 192, 16, 16],
    [464, 192, 16, 16],
    [480, 192, 16, 16],
    [496, 192, 16, 16],
    [512, 192, 16, 16],
    [528, 192, 16, 16],
    [544, 192, 16, 16],
    [560, 192, 16, 16],
    [576, 192, 16, 16],
    [592, 192, 16, 16],
    [608, 192, 16, 16],
    [624, 192, 16, 16],
    [640, 192, 16, 16],
    [656, 192, 16, 16],
    [672, 192, 16, 16],
    [688, 192, 16, 16],
    [704, 192, 16, 16],
    [720, 192, 16, 16],
    [736, 192, 16, 16],
    [752, 192, 16, 16],
    [768, 192, 16, 16],
    [784, 192, 16, 16],
    [800, 192, 16, 16],
    [816, 192, 16, 16],
    [832, 192, 16, 16],
    [848, 192, 16, 16],
    [864, 192, 16, 16],
    [880, 192, 16, 16],
    [896, 192, 16, 16],
    [912, 192, 16, 16],
    [928, 192, 16, 16],
    [944, 192, 16, 16],
    [960, 192, 16, 16],
    [976, 192, 16, 16],
    [992, 192, 16, 16],
    [1008, 192, 16, 16],
    [1024, 192, 16, 16],
    [1040, 192, 16, 16],
    [1056, 192, 16, 16],
    [1072, 192, 16, 16],
    [1088, 192, 16, 16],
    [1136, 192, 16, 16],
    [1152, 192, 16, 16],
    [1168, 192, 16, 16],
    [1184, 192, 16, 16],
    [1200, 192, 16, 16],
    [1216, 192, 16, 16],
    [1232, 192, 16, 16],
    [1248, 192, 16, 16],
    [1264, 192, 16, 16],
    [1280, 192, 16, 16],
    [1296, 192, 16, 16],
    [1312, 192, 16, 16],
    [1328, 192, 16, 16],
    [1344, 192, 16, 16],
    [1360, 192, 16, 16],
    [1376, 192, 16, 16],
    [1392, 192, 16, 16],
    [1440, 192, 16, 16],
    [1456, 192, 16, 16],
    [1472, 192, 16, 16],
    [1488, 192, 16, 16],
    [1504, 192, 16, 16],
    [1520, 192, 16, 16],
    [1536, 192, 16, 16],
    [1552, 192, 16, 16],
    [1568, 192, 16, 16],
    [1584, 192, 16, 16],
    [1600, 192, 16, 16],
    [1616, 192, 16, 16],
    [1632, 192, 16, 16],
    [1648, 192, 16, 16],
    [1664, 192, 16, 16],
    [1680, 192, 16, 16],
    [1696, 192, 16, 16],
    [1712, 192, 16, 16],
    [1728, 192, 16, 16],
    [1744, 192, 16, 16],
    [1760, 192, 16, 16],
    [1776, 192, 16, 16],
    [1792, 192, 16, 16],
    [1808, 192, 16, 16],
    [1824, 192, 16, 16],
    [1840, 192, 16, 16],
    [1856, 192, 16, 16],
    [1872, 192, 16, 16],
    [1888, 192, 16, 16],
    [1904, 192, 16, 16],
    [1920, 192, 16, 16],
    [1936, 192, 16, 16],
    [1952, 192, 16, 16],
    [1968, 192, 16, 16],
    [1984, 192, 16, 16],
    [2000, 192, 16, 16],
    [2016, 192, 16, 16],
    [2032, 192, 16, 16],
    [2048, 192, 16, 16],
    [2064, 192, 16, 16],
    [2080, 192, 16, 16],
    [2096, 192, 16, 16],
    [2112, 192, 16, 16],
    [2128, 192, 16, 16],
    [2144, 192, 16, 16],
    [2160, 192, 16, 16],
    [2176, 192, 16, 16],
    [2192, 192, 16, 16],
    [2208, 192, 16, 16],
    [2224, 192, 16, 16],
    [2240, 192, 16, 16],
    [2256, 192, 16, 16],
    [2272, 192, 16, 16],
    [2288, 192, 16, 16],
    [2304, 192, 16, 16],
    [2320, 192, 16, 16],
    [2336, 192, 16, 16],
    [2352, 192, 16, 16],
    [2368, 192, 16, 16],
    [2384, 192, 16, 16],
    [2400, 192, 16, 16],
    [2416, 192, 16, 16],
    [2432, 192, 16, 16],
    [2448, 192, 16, 16],
    [2496, 192, 16, 16],
    [2512, 192, 16, 16],
    [2528, 192, 16, 16],
    [2544, 192, 16, 16],
    [2560, 192, 16, 16],
    [2576, 192, 16, 16],
    [2592, 192, 16, 16],
    [2608, 192, 16, 16],
    [2624, 192, 16, 16],
    [2640, 192, 16, 16],
    [2656, 192, 16, 16],
    [2672, 192, 16, 16],
    [2688, 192, 16, 16],
    [2704, 192, 16, 16],
    [2720, 192, 16, 16],
    [2736, 192, 16, 16],
    [2752, 192, 16, 16],
    [2768, 192, 16, 16],
    [2784, 192, 16, 16],
    [2800, 192, 16, 16],
    [2816, 192, 16, 16],
    [2832, 192, 16, 16],
    [2848, 192, 16, 16],
    [2864, 192, 16, 16],
    [2880, 192, 16, 16],
    [2896, 192, 16, 16],
    [2912, 192, 16, 16],
    [2928, 192, 16, 16],
    [2944, 192, 16, 16],
    [2960, 192, 16, 16],
    [2976, 192, 16, 16],
    [2992, 192, 16, 16],
    [3008, 192, 16, 16],
    [3024, 192, 16, 16],
    [3040, 192, 16, 16],
    [3056, 192, 16, 16],
    [3072, 192, 16, 16],
    [3088, 192, 16, 16],
    [3104, 192, 16, 16],
    [3120, 192, 16, 16],
    [3136, 192, 16, 16],
    [3152, 192, 16, 16],
    [3168, 192, 16, 16],
    [3184, 192, 16, 16],
    [3200, 192, 16, 16],
    [3216, 192, 16, 16],
    [3232, 192, 16, 16],
    [3248, 192, 16, 16],
    [3264, 192, 16, 16],
    [3280, 192, 16, 16],
    [3296, 192, 16, 16],
    [3312, 192, 16, 16],
    [3328, 192, 16, 16],
    [3344, 192, 16, 16],
    [3360, 192, 16, 16],
    [3376, 192, 16, 16],
    [3392, 192, 16, 16],
    [3408, 192, 16, 16],
    [3424, 192, 16, 16],
    [3440, 192, 16, 16],
    [3456, 192, 16, 16],
    [3472, 192, 16, 16],
    [3488, 192, 16, 16],
    [3504, 192, 16, 16],
    [3520, 192, 16, 16],
    [3536, 192, 16, 16],
    [3552, 192, 16, 16],
    [3568, 192, 16, 16],
    [3584, 192, 16, 16],
    [3600, 192, 16, 16],
    [3616, 192, 16, 16],
    [3632, 192, 16, 16],
    [3648, 192, 16, 16],
    [3664, 192, 16, 16],
    [3680, 192, 16, 16],
    [3696, 192, 16, 16],
    [3712, 192, 16, 16],
    [3728, 192, 16, 16],
    [3744, 192, 16, 16],
    [3760, 192, 16, 16],
    [3776, 192, 16, 16], [3792, 192, 16, 16],
    [3808, 192, 16, 16], [3824, 192, 16, 16],
    [3840, 192, 16, 16], [2208, 128, 16, 64], [2192, 144, 16, 48], [2176, 160, 16, 32],
    [2256, 128, 16, 64], [2272, 144, 16, 48],
    [2288, 160, 16, 32], [2304, 176, 16, 16], [2384, 176, 16, 16],
    [2400, 160, 16, 32], [2416, 144, 16, 48], [2432, 128, 32, 64],
    [2496, 128, 16, 64], [2512, 144, 16, 48], [2528, 160, 16, 32],
    [2544, 176, 16, 16], [3024, 64, 32, 128],
    [46, 3024, 80, 96], [3008, 80, 16, 112], [2992, 96, 16, 96],
    [2976, 112, 16, 80], [2960, 128, 16, 64], [2944, 144, 16, 48],
    [2928, 160, 16, 32], [2912, 176, 16, 16],
  ],

  bricks: [
    [2160, 176, 16, 16], [2176, 160, 16, 16], [2176, 176, 16, 16],
    [2192, 144, 16, 16], [2192, 160, 16, 16], [2192, 176, 16, 16],
    [2208, 128, 16, 16], [2208, 144, 16, 16], [2208, 160, 16, 16],
    [2208, 176, 16, 16], [2256, 128, 16, 16], [2256, 144, 16, 16],
    [2256, 160, 16, 16], [2256, 176, 16, 16], [2272, 144, 16, 16],
    [2272, 160, 16, 16], [2272, 176, 16, 16], [2288, 160, 16, 16],
    [2288, 176, 16, 16], [2304, 176, 16, 16], [3184, 176, 16, 16],

    [2384, 176, 16, 16],
    [2400, 160, 16, 16], [2400, 176, 16, 16],
    [2416, 144, 16, 16], [2416, 160, 16, 16], [2416, 176, 16, 16],
    [2432, 128, 16, 16], [2432, 144, 16, 16], [2432, 160, 16, 16], [2432, 176, 16, 16],
    [2448, 128, 16, 16], [2448, 144, 16, 16], [2448, 160, 16, 16], [2448, 176, 16, 16],

    [2496, 128, 16, 16], [2496, 144, 16, 16], [2496, 160, 16, 16], [2496, 176, 16, 16],
    [2512, 144, 16, 16], [2512, 160, 16, 16], [2512, 176, 16, 16],
    [2528, 160, 16, 16], [2528, 176, 16, 16],
    [2544, 176, 16, 16],

    [2912, 176, 16, 16],
    [2928, 160, 16, 16], [2928, 176, 16, 16],
    [2944, 144, 16, 16], [2944, 160, 16, 16], [2944, 176, 16, 16],
    [2960, 128, 16, 16], [2960, 144, 16, 16], [2960, 160, 16, 16], [2960, 176, 16, 16],
    [2976, 112, 16, 16], [2976, 128, 16, 16], [2976, 144, 16, 16], [2976, 160, 16, 16], [2976, 176, 16, 16],
    [2992, 96, 16, 16], [2992, 112, 16, 16], [2992, 128, 16, 16], [2992, 144, 16, 16], [2992, 160, 16, 16], [2992, 176, 16, 16],
    [3008, 80, 16, 16], [3008, 96, 16, 16], [3008, 112, 16, 16], [3008, 128, 16, 16], [3008, 144, 16, 16], [3008, 160, 16, 16], [3008, 176, 16, 16],
    [3024, 64, 16, 16], [3024, 80, 16, 16], [3024, 96, 16, 16], [3024, 112, 16, 16], [3024, 128, 16, 16], [3024, 144, 16, 16], [3024, 160, 16, 16], [3024, 176, 16, 16],
    [3040, 64, 16, 16], [3040, 80, 16, 16], [3040, 96, 16, 16], [3040, 112, 16, 16], [3040, 128, 16, 16], [3040, 144, 16, 16], [3040, 160, 16, 16], [3040, 176, 16, 16],
  ],

  shrubs: [
    [183, 176, 54, 16],
    [375, 176, 32, 16],
    [663, 176, 32, 16],
    [951, 176, 32, 16],
    [1143, 176, 32, 16],
    [1447, 176, 32, 16],
    [1735, 176, 32, 16],
    [1927, 176, 32, 16],
    [2224, 176, 32, 16],
    [2695, 176, 32, 16],
  ],

  mountains: [
    [255, 172, 48, 19],
    [767, 157, 80, 35],
    [1023, 172, 49, 20],
    [1551, 157, 82, 35],
    [1807, 172, 50, 20],
    [2320, 157, 80, 35],
    [2575, 172, 50, 20],
    [3087, 157, 81, 35],
    [3359, 157, 81, 35],
  ],

  pipes: [
    [3568, 128, 32, 64], [3536, 160, 32, 32], [2880, 160, 32, 32],
    [2624, 160, 32, 32], [448, 160, 32, 32], [608, 144, 32, 48],
    [736, 128, 32, 64], [912, 128, 32, 64],
  ],

  coins: [
    [256, 128, 16, 16], [336, 128, 16, 16],
  ],

  mushrooms: [
    [336, 128, 16, 16], [1760, 64, 16, 16],
  ],

  breakables: [
    [384, 128, 16, 16], [352, 128, 16, 16], [320, 128, 16, 16], [2752, 128, 16, 16],
    [2720, 128, 16, 16], [2704, 128, 16, 16], [2096, 128, 16, 16], [2080, 128, 16, 16],
    [2064, 64, 16, 16], [2112, 64, 16, 16], [1952, 64, 16, 16], [1968, 64, 16, 16],
    [1984, 64, 16, 16], [1632, 128, 16, 16], [1616, 128, 16, 16], [1504, 64, 16, 16],
    [1488, 64, 16, 16], [1472, 64, 16, 16], [1520, 128, 16, 16], [1408, 64, 16, 16],
    [1392, 64, 16, 16], [1376, 64, 16, 16], [1360, 64, 16, 16], [1344, 64, 16, 16],
    [1328, 64, 16, 16], [1312, 64, 16, 16], [1296, 64, 16, 16], [1280, 128, 16, 16],
    [1248, 128, 16, 16], [1904, 128, 16, 16],
  ],
};
/* harmony export (immutable) */ __webpack_exports__["a"] = levelOne;





/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_scenery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_block__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_breakable__ = __webpack_require__(14);




class MapBuilder {
  constructor(level, tileset, spriteSheet) {
    this.level = level;
    this.tileset = tileset;
    this.spriteSheet = spriteSheet;

    this.mountainSheet = new Image();
    this.mountainSheet.src = './assets/sprites/mountain.png';
    this.cloudsSheet = new Image();
    this.cloudsSheet.src = './assets/sprites/clouds.png';
    this.castleSheet = new Image();
    this.castleSheet.src = './assets/sprites/castle.png';

    this.sceneryEntities = [];
    this.brickEntities = [];
    this.breakableEntities = [];
    this.blockEntities = [];

    // Create all entities in the map
    level.ground.forEach((ground) => {
      this.sceneryEntities.push(
        new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["a" /* Ground */](this.tileset, ground[0], ground[1], ground[2], ground[3]),
      );
    });

    level.shrubs.forEach((shrub) => {
      this.sceneryEntities.push(
        new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["b" /* Shrub */](this.tileset, shrub[0], shrub[1], shrub[2], shrub[3]),
      );
    });

    level.mountains.forEach((mountain) => {
      this.sceneryEntities.push(
        new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["c" /* Mountain */](
          this.mountainSheet, mountain[0], mountain[1], mountain[2], mountain[3]),
      );
    });

    level.pipes.forEach((pipe) => {
      this.sceneryEntities.push(
        new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["d" /* Pipe */](this.tileset, pipe[0], pipe[1], pipe[2], pipe[3]),
      );
    });

    level.smallClouds.forEach((smallCloud) => {
      this.sceneryEntities.push(
        new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["e" /* SmallCloud */](
          this.cloudsSheet, smallCloud[0], smallCloud[1], smallCloud[2], smallCloud[3],
      ));
    });

    level.mediumClouds.forEach((mediumCloud) => {
      this.sceneryEntities.push(
        new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["f" /* MediumCloud */](
          this.cloudsSheet, mediumCloud[0], mediumCloud[1], mediumCloud[2], mediumCloud[3],
      ));
    });

    level.largeClouds.forEach((largeCloud) => {
      this.sceneryEntities.push(
        new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["g" /* LargeCloud */](
          this.cloudsSheet, largeCloud[0], largeCloud[1], largeCloud[2], largeCloud[3],
      ));
    });

    level.blocks.forEach((block) => {
      this.blockEntities.push(
        new __WEBPACK_IMPORTED_MODULE_1__entities_block__["a" /* default */]('coin', this.tileset, block[0], block[1], block[2], block[3]),
      );
    });

    level.mushrooms.forEach((block) => {
      this.blockEntities.push(
        new __WEBPACK_IMPORTED_MODULE_1__entities_block__["a" /* default */]('mushroom', this.tileset, block[0], block[1], block[2], block[3]),
      );
    });

    level.breakables.forEach((breakable) => {
      this.breakableEntities.push(
        new __WEBPACK_IMPORTED_MODULE_2__entities_breakable__["a" /* default */](this.tileset, breakable[0], breakable[1], breakable[2], breakable[3]),
      );
    });

    level.bricks.forEach((brick) => {
      this.sceneryEntities.push(
        new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["h" /* Brick */](this.tileset, brick[0], brick[1], brick[2], brick[3]));
    });

    this.sceneryEntities.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["i" /* Flag */](this.tileset, level.flag[0], level.flag[1], level.flag[2], level.flag[3]),
    );

    this.sceneryEntities.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["j" /* Flagpole */](
        this.tileset, level.flagpole[0], level.flagpole[1], level.flagpole[2], level.flagpole[3]),
    );

    this.sceneryEntities.push(
      new __WEBPACK_IMPORTED_MODULE_0__entities_scenery__["k" /* Castle */](
        this.castleSheet, level.castle[0], level.castle[1], level.castle[2], level.castle[3]),
    );
  }

  create(data) {
    this.sceneryEntities.forEach((scene) => {
      data.entities.scenery.push(scene);
    });

    this.breakableEntities.forEach((breakable) => {
      data.entities.scenery.push(breakable);
    });

    this.blockEntities.forEach((block) => {
      data.entities.scenery.push(block);
    });
  }

  renderMap(data) {
    this.sceneryEntities.forEach((scene) => {
      this.drawEntity(scene, data);
    });

    this.brickEntities.forEach((brick) => {
      this.drawEntity(brick, data);
    });

    this.breakableEntities.forEach((breakable) => {
      this.drawEntity(breakable, data);
    });

    this.blockEntities.forEach((block) => {
      this.drawEntity(block, data);
    });
  }

  // Only draw entity when in Viewport
  drawEntity(entity, data) {
    const ctx = data.canvas.ctx;
    const viewport = data.viewport;

    if (((entity.xPos + entity.width >= viewport.vX &&
      entity.xPos + entity.width <= viewport.vX + viewport.width)) &&
      ((entity.yPos + entity.height >= viewport.vY &&
        entity.yPos + entity.height <= viewport.vY + viewport.height))) {
      ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.xPos - viewport.vX, entity.yPos - viewport.vY,
        entity.width, entity.height,
      );
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MapBuilder;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animation; });
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




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
const input = {
  down: {},
  pressed: {},

  init() {
    $(window).on('keydown', (event) => {
      this.down[event.keyCode] = true;
    });

    $(window).on('keyup', () => {
      delete this.down[event.keyCode];
      delete this.pressed[event.keyCode];
    });
  },

  update(data) {
    const mario = data.entities.mario;

    if (data.userControl) {
      // Move Left. Left-Arrow or A
      if (this.isDown(37) || this.isDown(65)) {
        if (mario.velY === 1.2) {
          if (mario.bigMario) {
            mario.currentState = mario.states.bigWalking;
          } else {
            mario.currentState = mario.states.walking;
          }
        } else {
          mario.xPos -= mario.velX;
        }
        mario.direction = 'left';
      }
      // Move Right. Right-Arrow or D
      if (this.isDown(39) || this.isDown(68)) {
        if (mario.velY === 1.2) {
          if (mario.bigMario) {
            mario.currentState = mario.states.bigWalking;
          } else {
            mario.currentState = mario.states.walking;
          }
        } else {
          mario.xPos += mario.velX;
        }
        mario.direction = 'right';
      }

      // Jump. Up-Arrow, W, or Spacebar
      if (this.isPressed(38) || this.isPressed(32) || this.isPressed(87)) {
        if (mario.bigMario) {
          mario.currentState = mario.states.bigJumping;
        } else {
          mario.currentState = mario.states.jumping;
        }
      }
    } else {
      mario.currentState = mario.states.dead;
    }
  },

  isDown(code) {
    return this.down[code];
  },

  isPressed(code) {
    if (this.pressed[code]) {
      return false;
    } else if (this.down[code]) {
      this.pressed[code] = true;
      return this.pressed[code];
    }
  },
};




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movement; });
const movement = {
  update(data) {
    data.entities.mario.currentState.movement(data);

    data.entities.mushrooms.forEach((mushroom) => {
      mushroom.currentState.movement(data);
    });

    data.entities.goombas.forEach((goomba) => {
      goomba.currentState.movement(data);
    });

    data.entities.koopas.forEach((goomba) => {
      goomba.currentState.movement(data);
    });
  },
};




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return physics; });
const physics = {
  update(data) {
    // detect entity collisions
    this.collisionDetection(data);
    this.sceneryCollisionDetection(data);
    this.marioFallingCheck(data);

    // apply gravity to all entities
    this.gravity(data.entities.mario);

    data.entities.mushrooms.forEach((mushroom) => {
      this.gravity(mushroom);
    });

    data.entities.goombas.forEach((goomba) => {
      this.gravity(goomba);
    });

    data.entities.koopas.forEach((koopa) => {
      this.gravity(koopa);
    });
  },

  collisionDetection(data) {
    const collidables = [
      data.entities.coins,
      data.entities.mushrooms,
      data.entities.goombas,
      data.entities.koopas,
    ];

    const entityCollisionCheck = (entity) => {
      if (data.entities.mario.xPos < entity.xPos + entity.width &&
        data.entities.mario.xPos + data.entities.mario.width > entity.xPos &&
        data.entities.mario.yPos < entity.yPos + entity.height &&
        data.entities.mario.height + data.entities.mario.yPos > entity.yPos) {
        // Collision Occured
        this.handleCollision(data, entity);
      }
    };

    collidables.forEach(entities =>
      entities.forEach((entity) => { entityCollisionCheck(entity); }),
    );
    // this.enemyCollisions(data);
  },

  // enemyCollisions(data) {
  //   const goombas = data.entities.goombas;
  //   const koopas = data.entities.koopas;
  //
  //   const checkCollisions = (entityOne, entityTwo) => {
  //     if ((entityOne.xPos < entityTwo.xPos && entityOne.yPos >= entityTwo.yPos) ||
  //         (entityOne.xPos > entityTwo.xPos && entityOne.yPos >= entityTwo.yPos)) {
  //           console.log('collision');
  //       // E1 Sliding Koopa
  //       if (entityOne.type === 'koopa' && entityOne.currentState === entityOne.states.sliding) {
  //         if (entityTwo.type === 'koopa' && entityOne.currentState === entityOne.states.sliding) {
  //           this.koopaDeath(entityOne, data);
  //           this.koopaDeath(entityTwo, data);
  //         } else {
  //           this.enemyDeath(entityTwo, data); // write single method for both
  //         } // E2 Sliding Koopa
  //       } else if (entityTwo.type === 'koopa' && entityTwo.currentState === entityTwo.states.sliding) {
  //         this.enemyDeath(entityOne, data);
  //       } else {
  //         entityOne.direction = entityOne.direction === 'left' ? 'right' : 'left';
  //         entityTwo.direction = entityTwo.direction === 'left' ? 'right' : 'left';
  //       }
  //     }
  //
  //     goombas.forEach(goomba => {
  //       koopas.forEach(koopa => {
  //         checkCollisions(goomba, koopa);
  //       });
  //     });
  //
  //     goombas.forEach(goombaOne => {
  //       goombas.forEach(goombaTwo => {
  //         checkCollisions(goombaOne, goombaTwo);
  //       });
  //     });
  //
  //     koopas.forEach(koopaOne => {
  //       koopas.forEach(koopaTwo => {
  //         checkCollisions(koopaOne, koopaTwo);
  //       });
  //     });
  //   };
  // },

  handleCollision(data, entity) {
    const mario = data.entities.mario;

    if ((entity.type === 'goomba' ||
      entity.type === 'koopa') &&
      mario.type !== 'invincible') {
      // mario's right
      if (mario.xPos < entity.xPos && mario.velY <= entity.velY) {
        mario.xPos = entity.xPos - mario.width;
        // slide shell instead of death
        if (entity.type === 'koopa' &&
          entity.currentState === entity.states.hiding) {
          entity.direction = 'right';
          entity.xPos += 5;

          setTimeout(() => {
            entity.currentState = entity.states.sliding;
          }, 50);
        } else {
          if (mario.bigMario) {
            this.marioShrink(mario);
          } else {
            mario.currentState = mario.states.dead;
            this.marioDeath(data);
          }
        }
      }
      // mario's left
      if (mario.xPos > entity.xPos && mario.velY <= entity.velY) {
        mario.xPos = entity.xPos + mario.width;

        if (entity.type === 'koopa' &&
          entity.currentState === entity.states.hiding) {
          entity.direction = 'left';
          entity.xPos -= 5;

          setTimeout(() => {
            entity.currentState = entity.states.sliding;
          }, 50);
        } else {
          if (mario.bigMario) {
            this.marioShrink(mario);
          } else {
            mario.currentState = mario.states.dead;
            this.marioDeath(data);
          }
        }
      }
      //  Mario bot
      if (mario.yPos < entity.yPos &&
        (mario.xPos + mario.width) > entity.xPos &&
        mario.xPos < (entity.xPos + entity.width) &&
        mario.velY >= entity.velY) {
        mario.currentState = mario.states.standing;
        mario.yPos = entity.yPos - mario.height;
        mario.velY = 0;

        if (entity.type === 'goomba') {
          this.enemyDeath(entity, data);
        } else if (entity.type === 'koopa') {
          if (entity.currentState === entity.states.hiding) {
            this.koopaSlide(entity);
          } else if (entity.currentState === entity.states.sliding) {
            this.enemyDeath(entity, data);
          } else {
            this.koopaHide(entity);
          }
        }

        if (mario.yPos > entity.yPos &&
          (mario.xPos + mario.width) >= entity.xPos &&
          mario.xPos < (entity.xPos + entity.width)) {
          mario.velY = 1.2;
          mario.xPos = entity.xPos;
          if (mario.bigMario) {
            this.marioShrink(mario);
          } else {
            mario.currentState = mario.states.dead;
            this.marioDeath(data);
          }
        }
      }
    }

    if (entity.type === 'mushroom') {
      mario.bigMario = true;
      mario.height = 32;
      mario.powerupSound.play();

      const index = data.entities.mushrooms.indexOf(entity);
      delete data.entities.mushrooms[index];
    }

    if (entity.type === 'coin') {
      data.entities.score.value += 50;
      data.entities.score.coinCount += 1;
      entity.coinSound.play();

      const index = data.entities.coins.indexOf(entity);
      delete data.entities.coins[index];
    }
  },

  marioFallingCheck(data) {
    if (data.entities.mario.yPos >= 210) {
      data.entities.mario.deathSound.play();
      data.userControl = false;

      setTimeout(() => {
        data.reset();
      }, 3000);
    }
  },

  marioDeath(data) {
    data.userControl = false;
    data.sounds.backgroundMusic.pause();
    data.entities.mario.deathSound.play();

    setTimeout(() => {
      data.entities.mario.height = 16;
      data.entities.mario.type = 'dead';
      data.entities.mario.velY -= 13;
    }, 500);

    setTimeout(() => {
      data.reset();
    }, 3000);
  },
  // freeze one sec while resize. return to movement
  marioShrink(mario) {
    mario.bigMario = false;
    mario.powerdownSound.play();
    mario.type = 'invincible';
    mario.currentState = mario.states.resizing;

    setTimeout(() => {
      mario.currentState = mario.states.standing;
      mario.height = 16;
    }, 1000);

    setTimeout(() => {
      mario.type = 'mario';
    }, 1500);
  },

  koopaHide(entity) {
    entity.type = 'invulnerable';
    entity.currentState = entity.states.hiding; // koopa stomp

    setTimeout(() => {
      entity.type = 'koopa';
    }, 200);
  },

  koopaSlide(entity) {
    entity.type = 'invulnerable';
    entity.currentState = entity.states.sliding;

    setTimeout(() => {
      entity.type = 'koopa';
    }, 200);
  },

  enemyDeath(entity, data) {
    if (entity.type === 'goomba') {
      data.entities.score.value += 100;
      entity.currentState = entity.states.dead;
      entity.type = 'dying';
      entity.squishSound.play();

      setTimeout(() => {
        const index = data.entities.goombas.indexOf(entity);
        delete data.entities.goombas[index];
      }, 800);
    } else {
      data.entities.score.value += 100;
      entity.velY -= 10;
      entity.type = 'dead';

      setTimeout(() => {
        const index = data.entities.koopas.indexOf(entity);
        delete data.entities.koopas[index];
      }, 400);
    }
  },

  levelFinish(data) {
    data.entities.mario.velX = 0;
    data.entities.mario.velY = 0;
    data.entities.mario.xPos += 3;

    data.sounds.backgroundMusic.pause();
    data.sounds.levelFinish.play();

    setTimeout(() => {
      data.reset();
    }, 6000);
  },

  sceneryCollisionDetection(data) {
    this.sceneryCollisionCheck(data, [data.entities.mario], data.entities.scenery);
    this.sceneryCollisionCheck(data, data.entities.mushrooms, data.entities.scenery);
    this.sceneryCollisionCheck(data, data.entities.goombas, data.entities.scenery);
    this.sceneryCollisionCheck(data, data.entities.koopas, data.entities.scenery);
  },

  sceneryCollisionCheck(data, entities, scenery) {
    entities.forEach((entity) => {
      scenery.forEach((scene) => {
        if (entity.xPos < scene.xPos + scene.width &&
          entity.xPos + entity.width > scene.xPos &&
          entity.yPos < scene.yPos + scene.height &&
          entity.height + entity.yPos > scene.yPos) {
          // Collision Occured
          if (scene.type === 'flag') {
            this.levelFinish(data);
          } else if (scene.type !== 'shrub' &&
            scene.type !== 'cloud' &&
            scene.type !== 'mountain') {
            this.sceneryCollision(data, entity, scene);
          }
        }
      });
    });
  },

  sceneryCollision(data, entity, scene) {
    // Left side
    if (entity.xPos < scene.xPos && entity.yPos >= scene.yPos) {
      if (scene.type === 'pipe' || scene.type === 'brick') {
        entity.xPos = scene.xPos - entity.width - 1;
      } else {
        entity.xPos = scene.xPos - entity.width;
      }

      if ((entity.type === 'goomba') ||
        (entity.type === 'koopa') ||
        (entity.type === 'mushroom')) {
        entity.direction = entity.direction === 'left' ? 'right' : 'left';
      }
    }
    // Right side
    if (entity.xPos > scene.xPos && entity.yPos >= scene.yPos) {
      entity.xPos = scene.xPos + scene.width;

      if ((entity.type === 'goomba') ||
        (entity.type === 'koopa') ||
        (entity.type === 'mushroom')) {
        entity.direction = entity.direction === 'left' ? 'right' : 'left';
      }
    }
    // Top
    if (entity.yPos < scene.yPos &&
      (entity.xPos + entity.width) > scene.xPos &&
      entity.xPos < (scene.xPos + scene.width) && entity.velY >= 0) {

      if (entity.type !== 'dead') { // fall through ground when dead
        if (entity.type === 'mario') {
          if (entity.bigMario) {
            entity.currentState = entity.states.bigStanding;
          } else {
            entity.currentState = entity.states.standing;
          }
        }
        entity.yPos = scene.yPos - entity.height - 1;
        entity.velY = 0;
      }
    }
    // Bot
    if (entity.yPos >= scene.yPos &&
      (entity.xPos + entity.width) >= scene.xPos &&
      entity.xPos < (scene.xPos + scene.width) && entity.velY < 0) {
      if (scene.type === 'block') {
        if (scene.contents === 'coin') {
          scene.collectCoin(data);
        } else if (scene.contents === 'mushroom') {
          scene.createMushroom(data);
        }
        scene.sprite = scene.used;
      } else if (scene.type === 'breakable') {
        if (entity.bigMario) {
          data.sounds.breakSound.play();
          scene.type = 'shrub';
          const index = data.mapBuilder.breakableEntities.indexOf(scene);
          delete data.mapBuilder.breakableEntities[index];
        } else {
          entity.bumpSound.play();
        }
      }
      entity.yPos = entity.yPos + entity.height;
      entity.xPos = scene.xPos;
      entity.velY = 1.2;
    }
  },

  gravity(entity) {
    entity.velY += 1.2;
    entity.yPos += entity.velY;
  },
};




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
const render = {
  init(data) {
    data.entities.scenery = [];
    data.mapBuilder.create(data);
  },

  // Clear canvas and redraw entities
  update(data) {
    data.canvas.ctx.clearRect(0, 0, 760, 600);
    data.canvas.ctx.fillStyle = '#63adff';
    data.canvas.ctx.fillRect(0, 0, 760, 600);

    data.mapBuilder.renderMap(data);

    data.entities.coins.forEach((coin) => {
      this.drawEntity(coin, data);
    });

    data.entities.mushrooms.forEach((mushroom) => {
      this.drawEntity(mushroom, data);
    });

    data.entities.goombas.forEach((goomba) => {
      this.drawEntity(goomba, data);
    });

    data.entities.koopas.forEach((koopa) => {
      this.drawEntity(koopa, data);
    });

    this.drawText(data);
    this.drawEntity(data.entities.mario, data);
  },

  // Only draw entities that fall in viewport
  drawEntity(entity, data) {
    if (((entity.xPos + entity.width >= data.viewport.vX &&
          entity.xPos + entity.width <= data.viewport.vX + data.viewport.width)) &&
        ((entity.yPos + entity.height >= data.viewport.vY &&
          entity.yPos + entity.height <= data.viewport.vY + data.viewport.height))) {
      data.canvas.ctx.drawImage(
        entity.sprite.img,
        entity.sprite.srcX, entity.sprite.srcY,
        entity.sprite.srcW, entity.sprite.srcH,
        entity.xPos - data.viewport.vX, entity.yPos - data.viewport.vY,
        entity.width, entity.height,
      );
    }
  },

  // Render hud
  drawText(data) {
    const text = data.entities.score;

    data.canvas.ctx.font = `${text.size} ${text.font}`;
    data.canvas.ctx.fillStyle = text.color;
    data.canvas.ctx.fillText(
      `Score: ${text.value}`, text.xPos - (data.viewport.width / 3), text.yPos,
    );
  },
};




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coin__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mushroom__ = __webpack_require__(16);





class Block extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(contents, tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 433, 1, 17, 17);
    super('block', sprite, xPos, yPos, width, height);

    this.contents = contents;
    this.coinSound = new Audio('./assets/audio/sounds/coin.wav');
    this.powerupSpawnSound = new Audio('./assets/audio/sounds/powerup_spawn.wav');
    this.used = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 486, 0, 18, 18);
    this.tileset = tileset;
  }

  createMushroom(data) {
    const mushroom = new __WEBPACK_IMPORTED_MODULE_3__mushroom__["a" /* default */](data.spriteSheet, this.xPos, this.yPos - 18, 16, 16);
    data.entities.mushrooms.push(mushroom);
    this.powerupSpawnSound.play();
    this.contents = 'empty';
  }

  collectCoin(data) {
    const coin = new __WEBPACK_IMPORTED_MODULE_2__coin__["a" /* default */](this.tileset, this.xPos - 2, this.yPos - 18, 18, 18);

    data.entities.score.value += 50;
    data.entities.score.coinCount += 1;
    this.contents = 'empty';
    this.coinSound.play();

    coin.currentState = coin.states.blockCoin;
    data.entities.coins.push(coin);

    setTimeout(() => {
      const index = data.entities.coins.indexOf(coin);
      delete data.entities.coins[index];
    }, 50);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Block;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Breakable extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 18, 0, 18, 18);
    super('breakable', sprite, xPos, yPos, width, height);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Breakable;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Coin extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(spriteSheet, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spriteSheet, 5, 5, 10, 14);
    super('coin', sprite, xPos, yPos, width, height);

    const self = this;
    this.type = 'coin';
    this.coinSound = new Audio('./assets/audio/sounds/coin.wav');

    this.tileset = new Image();
    this.tileset.src = './assets/sprites/tileset_gutter.png';

    this.spriteAnimations = {
      spin: {
        frames: [
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spriteSheet, 5, 5, 10, 14),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spriteSheet, 21, 5, 10, 14),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spriteSheet, 37, 5, 10, 14),
          new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](spriteSheet, 53, 5, 10, 14),
        ],
        currentFrame: 0,
      },
      blockCoin: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](this.tileset, 486, 18, 18, 18),
    };

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

      blockCoin: {
        animation(data) {
          self.sprite = self.spriteAnimations.blockCoin;
        },
      },
    };
    this.currentState = this.states.spinning;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Coin;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Mushroom extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(img, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 625, 5, 16, 16);
    super('mushroom', sprite, xPos, yPos, width, height);

    const self = this;

    this.spriteAnimations = {
      moving: new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](img, 625, 5, 16, 16),
    };

    this.states = {
      moving: {
        movement(data) {
          if (self.direction === 'left') {
            self.xPos -= self.velX;
          } else {
            self.xPos += self.velX;
          }
        },
        animation(data) {
          self.sprite = self.spriteAnimations.moving;
        },
      },
    };

    this.currentState = this.states.moving;
    this.direction = 'right';
    this.velY = 0;
    this.velX = 1.3;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mushroom;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Brick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Shrub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Mountain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SmallCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MediumCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LargeCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Flag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Flagpole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Castle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(1);



class Ground extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 0, 0, 16, 16);
    super('ground', sprite, xPos, yPos, width, height);
  }
}

class Pipe extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 0, 180, 35, 35);

    super('pipe', sprite, xPos, yPos, width, height);
  }
}
class Brick extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 0, 18, 18, 18);

    super('brick', sprite, xPos, yPos, width, height);
  }
}
class Shrub extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 198.5, 162.5, 53, 17);

    super('shrub', sprite, xPos, yPos, width, height);
  }
}

class Mountain extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 0, 0, 90, 39);

    super('mountain', sprite, xPos, yPos, width, height);
  }
}

class SmallCloud extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 64.5, 0, 33, 24);

    super('cloud', sprite, xPos, yPos, width, height);
  }
}

class MediumCloud extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 0, 24.5, 48, 24);

    super('cloud', sprite, xPos, yPos, width, height);
  }
}

class LargeCloud extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 0, 0, 64, 24);

    super('cloud', sprite, xPos, yPos, width, height);
  }
}

class Flag extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 289, 153, 16, 27);

    super('flag', sprite, xPos, yPos, width, height);
  }
}

class Flagpole extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 289, 163, 16, 18);

    super('flag', sprite, xPos, yPos, width, height);
  }
}

class Castle extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {
  constructor(tileset, xPos, yPos, width, height) {
    const sprite = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */](tileset, 0, 0, 80, 80);

    super('flag', sprite, xPos, yPos, width, height);
  }
}




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_render__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_input__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_animation__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_movement__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_physics__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_level_1_1__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_builder__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_mario__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_goomba__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_koopa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_score__ = __webpack_require__(5);














// todos: animate blocks. mario duck/run. enemy collisions

class Game {
  init() {
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');
    ctx.scale(3, 3);

    const canvas = {
      canvas: canvasEl,
      ctx,
    };

    const viewport = {
      width: 760,
      height: 600,
      vX: 0,
      vY: 0,
    };

    const backgroundMusic = document.getElementById('background_music');

    // Add mute button
    this.muted = false;

    document.getElementById('mute-button').addEventListener('click', (e) => {
      backgroundMusic.muted = !backgroundMusic.muted;
      if (this.muted) {
        this.muted = false;
        e.target.className = '';
      } else {
        this.muted = true;
        e.target.className += 'muted';
      }
      e.preventDefault();
    }, false);

    const spriteSheet = new Image();
    spriteSheet.src = './assets/sprites/spritesheet.png';

    const tileset = new Image();
    tileset.src = './assets/sprites/tileset_gutter.png';

    spriteSheet.addEventListener('load', () => {
      const data = {
        spriteSheet,
        canvas,
        viewport,
        animationFrame: 0,
        mapBuilder: new __WEBPACK_IMPORTED_MODULE_6__map_map_builder__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__map_level_1_1__["a" /* levelOne */], tileset, spriteSheet),
        entities: {},
        sounds: {
          backgroundMusic,
          breakSound: new Audio('./assets/audio/sounds/break_block.wav'),
          levelFinish: new Audio('./assets/audio/music/level_complete.mp3'),
        },
        userControl: true,
        reset: this.reset,
      };

      const mario = new __WEBPACK_IMPORTED_MODULE_7__entities_mario__["a" /* default */](spriteSheet, 175, 0, 16, 16);
      const score = new __WEBPACK_IMPORTED_MODULE_10__entities_score__["a" /* default */](270, 15);

      __WEBPACK_IMPORTED_MODULE_1__util_input__["a" /* default */].init(data);
      data.entities.mario = mario;
      data.entities.score = score;
      data.entities.coins = [];
      data.entities.mushrooms = [];
      data.entities.goombas = [];
      data.entities.koopas = [];

      // Load enemies from map
      __WEBPACK_IMPORTED_MODULE_5__map_level_1_1__["a" /* levelOne */].koopas.forEach((koopa) => {
        data.entities.koopas.push(
          new __WEBPACK_IMPORTED_MODULE_9__entities_koopa__["a" /* default */](spriteSheet, koopa[0], koopa[1], koopa[2], koopa[3]));
      });

      __WEBPACK_IMPORTED_MODULE_5__map_level_1_1__["a" /* levelOne */].goombas.forEach((goomba) => {
        data.entities.goombas.push(
          new __WEBPACK_IMPORTED_MODULE_8__entities_goomba__["a" /* default */](spriteSheet, goomba[0], goomba[1], goomba[2], goomba[3]));
      });

      __WEBPACK_IMPORTED_MODULE_0__util_render__["a" /* default */].init(data);
      this.run(data);
    });
  }

  run(data) {
    const loop = () => {
      __WEBPACK_IMPORTED_MODULE_1__util_input__["a" /* default */].update(data);
      __WEBPACK_IMPORTED_MODULE_2__util_animation__["a" /* default */].update(data);
      __WEBPACK_IMPORTED_MODULE_3__util_movement__["a" /* default */].update(data);
      __WEBPACK_IMPORTED_MODULE_4__util_physics__["a" /* default */].update(data);

      Game.updateView(data);
      __WEBPACK_IMPORTED_MODULE_0__util_render__["a" /* default */].update(data);

      data.animationFrame += 1;
      window.requestAnimationFrame(loop);
    };

    loop();
  }

  // Update viewport to follow Mario
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

  reset() {
    location.reload();
  }
}

const game = new Game();
game.init();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map