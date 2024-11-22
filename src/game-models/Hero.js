// Наш герой.

class Hero {
  constructor({ positionX, positionY, boomerang, trackHeight }) {
    this.skin = "🤠"; // можете использовать любые emoji '💃'

    this.positionX = positionX;
    this.positionY = positionY;

    this.boomerang = boomerang;
    this.trackHeight = trackHeight;
  }

  moveLeft() {
    if (this.positionX > 0) this.positionX -= 1;
    // this.boomerang.moveBoomLeft();
  }

  moveRight() {
    if (this.positionX < 30) this.positionX += 1;
    // this.boomerang.moveBoomRight();
  }

  moveTop() {
    // Идем вверх
    if (this.positionY > 0) this.positionY -= 1;
    // this.boomerang.moveBoomtop();
  }

  moveBottom() {
    // Идем вниз
    if (this.positionY < this.trackHeight - 1) this.positionY += 1;
    // this.boomerang.moveBoombottom();
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
