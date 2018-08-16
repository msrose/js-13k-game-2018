import GameObject from './GameObject'

class Line extends GameObject {
  update() {
    if (this.x + this.width < 0) {
      const player = this.game.getObject('player')
      this.game.removeObject(this)
      const screen = this.game.getScreen()
      const offset = Math.random() * player.height * 2 - player.height
      const nextLine =
        this.getName() === 'line'
          ? this.game.getObject('line2')
          : this.game.getObject('line')
      const replacementLine = new Line(
        this.game,
        this.getName(),
        this.getStackingPriority(),
        {
          x: screen.width,
          y: nextLine.y + offset,
          width: screen.width,
          height: nextLine.height,
        }
      )
      this.game.addObject(replacementLine)
      return
    }
    this.x -= 5
  }
}

export default Line
