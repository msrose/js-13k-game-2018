class GameObject {
  constructor(game, { x, y, width, height }) {
    this.game = game
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  update() {
    const keyboard = this.game.getKeyboard()
    if (keyboard.isKeyPressed('ArrowUp')) {
      this.y -= 10
    } else if (keyboard.isKeyPressed('ArrowDown')) {
      this.y += 10
    }
    if (keyboard.isKeyPressed('ArrowLeft')) {
      this.x -= 10
    } else if (keyboard.isKeyPressed('ArrowRight')) {
      this.x += 10
    }
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}

export default GameObject
