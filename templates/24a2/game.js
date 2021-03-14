function create(game) {

}

function update(game) {

}

function onKeyPress(direction) {

}

function onDotClicked(x, y) {

}

let config = {
  create: create,
  update: update,
  onKeyPress: onKeyPress,
  onDotClicked: onDotClicked,
};

let game = new Game(config);
game.run();
