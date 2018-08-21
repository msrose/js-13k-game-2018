class GameObject {
  constructor(
    game,
    name,
    stackingPriority,
    { x, y, width, height },
    params = {}
  ) {
    this.game = game
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.name = name
    this.stackingPriority = stackingPriority
    this.params = params
  }

  update() {}

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  getName() {
    return this.name
  }

  getStackingPriority() {
    return this.stackingPriority
  }
}

export default GameObject
