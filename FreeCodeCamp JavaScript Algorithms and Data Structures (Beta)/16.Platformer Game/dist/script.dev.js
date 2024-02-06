"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var startBtn = document.getElementById("start-btn");
var canvas = document.getElementById("canvas");
var startScreen = document.querySelector(".start-screen");
var checkpointScreen = document.querySelector(".checkpoint-screen");
var checkpointMessage = document.querySelector(".checkpoint-screen > p");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 0.5;
var isCheckpointCollisionDetectionActive = true;

var Player =
/*#__PURE__*/
function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 10,
      y: 400
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 40;
    this.height = 40;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "#99c9ff";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        if (this.position.y < 0) {
          this.position.y = 0;
          this.velocity.y = gravity;
        }

        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }

      if (this.position.x < this.width) {
        this.position.x = this.width;
      }
    }
  }]);

  return Player;
}();

var Platform =
/*#__PURE__*/
function () {
  function Platform(x, y) {
    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.width = 200;
    this.height = 40;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "#acd157";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Platform;
}();

var CheckPoint =
/*#__PURE__*/
function () {
  function CheckPoint(x, y) {
    _classCallCheck(this, CheckPoint);

    this.position = {
      x: x,
      y: y
    };
    this.width = 40;
    this.height = 70;
  }

  _createClass(CheckPoint, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "#f1be32";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "claim",
    value: function claim() {
      this.width = 0;
      this.height = 0;
      this.position.y = Infinity;
    }
  }]);

  return CheckPoint;
}();

;
var player = new Player();
var platformPositions = [{
  x: 500,
  y: 450
}, {
  x: 700,
  y: 400
}, {
  x: 850,
  y: 350
}, {
  x: 900,
  y: 350
}, {
  x: 1050,
  y: 150
}, {
  x: 2500,
  y: 450
}, {
  x: 2900,
  y: 400
}, {
  x: 3150,
  y: 350
}, {
  x: 3900,
  y: 450
}, {
  x: 4200,
  y: 400
}, {
  x: 4400,
  y: 200
}, {
  x: 4700,
  y: 150
}];
var platforms = platformPositions.map(function (platform) {
  return new Platform(platform.x, platform.y);
});
var checkpointPositions = [{
  x: 1170,
  y: 80
}, {
  x: 2900,
  y: 330
}, {
  x: 4800,
  y: 80
}];
var checkpoints = checkpointPositions.map(function (checkpoint) {
  return new CheckPoint(checkpoint.x, checkpoint.y);
});

var animate = function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  platforms.forEach(function (platform) {
    platform.draw();
  });
  checkpoints.forEach(function (checkpoint) {
    checkpoint.draw();
  });
  player.update();

  if (keys.rightKey.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      checkpoints.forEach(function (checkpoint) {
        checkpoint.position.x -= 5;
      });
    } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      checkpoints.forEach(function (checkpoint) {
        checkpoint.position.x += 5;
      });
    }
  }

  platforms.forEach(function (platform) {
    var collisionDetectionRules = [player.position.y + player.height <= platform.position.y, player.position.y + player.height + player.velocity.y >= platform.position.y, player.position.x >= platform.position.x - player.width / 2, player.position.x <= platform.position.x + platform.width - player.width / 3];

    if (collisionDetectionRules.every(function (rule) {
      return rule;
    })) {
      player.velocity.y = 0;
      return;
    }

    var platformDetectionRules = [player.position.x >= platform.position.x - player.width / 2, player.position.x <= platform.position.x + platform.width - player.width / 3, player.position.y + player.height >= platform.position.y, player.position.y <= platform.position.y + platform.height];

    if (platformDetectionRules.every(function (rule) {
      return rule;
    })) {
      player.position.y = platform.position.y + player.height;
      player.velocity.y = gravity;
    }

    ;
  });
  checkpoints.forEach(function (checkpoint, index) {
    var checkpointDetectionRules = [player.position.x >= checkpoint.position.x, player.position.y >= checkpoint.position.y, player.position.y + player.height <= checkpoint.position.y + checkpoint.height, isCheckpointCollisionDetectionActive];

    if (checkpointDetectionRules.every(function (rule) {
      return rule;
    })) {
      checkpoint.claim();

      if (index === checkpoints.length - 1) {
        isCheckpointCollisionDetectionActive = false;
        showCheckpointScreen("You reached the final checkpoint!");
        movePlayer("ArrowRight", 0, false);
      } else if (player.position.x >= checkpoint.position.x && player.position.x <= checkpoint.position.x + 40) {
        showCheckpointScreen("You reached a checkpoint!");
      }
    }

    ;
  });
};

var keys = {
  rightKey: {
    pressed: false
  },
  leftKey: {
    pressed: false
  }
};

var movePlayer = function movePlayer(key, xVelocity, isPressed) {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }

  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;

      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }

      player.velocity.x -= xVelocity;
      break;

    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 8;
      break;

    case "ArrowRight":
      keys.rightKey.pressed = isPressed;

      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }

      player.velocity.x += xVelocity;
  }
};

var startGame = function startGame() {
  canvas.style.display = "block";
  startScreen.style.display = "none";
  animate();
};

var showCheckpointScreen = function showCheckpointScreen(msg) {
  checkpointScreen.style.display = "block";
  checkpointMessage.textContent = msg;

  if (isCheckpointCollisionDetectionActive) {
    setTimeout(function () {
      return checkpointScreen.style.display = "none";
    }, 2000);
  }
};

startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", function (_ref) {
  var key = _ref.key;
  movePlayer(key, 8, true);
});
window.addEventListener("keyup", function (_ref2) {
  var key = _ref2.key;
  movePlayer(key, 0, false);
});