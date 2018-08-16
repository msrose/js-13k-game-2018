class GameObject {
  constructor(game, name, { x, y, width, height }) {
    this.game = game
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.name = name
  }

  update() {}

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  getName() {
    return this.name
  }
}

export default GameObject
