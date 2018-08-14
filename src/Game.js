class Game {
  constructor(screen, keyboard) {
    this.screen = screen
    this.objects = []
    this.keyboard = keyboard
  }

  update() {
    this.objects.forEach(object => object.update())
  }

  draw(context) {
    this.objects.forEach(object => object.draw(context))
  }

  addObject(object) {
    this.objects.push(object)
  }

  getKeyboard() {
    return this.keyboard
  }
}

export default Game
