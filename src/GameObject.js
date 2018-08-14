class GameObject {
  constructor(game, { x, y, width, height }) {
    this.game = game
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  update() {}

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}

export default GameObject
