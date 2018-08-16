import GameObject from './GameObject'

class Line extends GameObject {
  update() {
    if (this.x + this.width < 0) {
      this.game.removeObject(this)
      const screen = this.game.getScreen()
      const lineHeight = 50
      const nextLine = new Line(this.game, this.getName(), {
        x: screen.width,
        y:
          screen.height / 2 -
          lineHeight / 2 +
          (Math.random() * lineHeight * 2 - lineHeight),
        width: screen.width,
        height: lineHeight,
      })
      this.game.addObject(nextLine)
      return
    }
    this.x -= 2
  }
}

export default Line
