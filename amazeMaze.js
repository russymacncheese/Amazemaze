var WINDOW_WIDTH = screen.width;
var WINDOW_HEIGHT = 400;
var BACKGROUND_COLOR = color(50);
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';


void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window
  frameRate(30); //how many times the draw function is called per second
}

void draw() {
  
}

class Player {
  var playerX, playerY

  Player (var px, var py) {
    playerX = px
    playerY = py
  }

  void drawAndUpdatePlayer() {
    drawPlayer();

  }

  void drawPlayer() {
    circle(10, playerX, playerY);
  }

}
