// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.positionX = 25;
    this.positionY = Math.floor(Math.random() * 6);
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
    console.log(skins);
    
  }

  moveLeft() {
    if (this.positionX === 0) {
      this.positionX = 20;
    }
    this.positionX -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

const enemy = new Enemy 
console.log(enemy);
   

module.exports = Enemy;
