class Game {
  constructor(screen, keyboard, initialize) {
    this.screen = screen
    this.keyboard = keyboard
    this.initialize = () => {
      this.objects = []
      this.objectMap = {}
      this.gameOver = false
      initialize(this)
    }
    this.initialize()
  }

  getFlatObjectList() {
    return this.objects.reduce(
      (allObjects, priorityList) => allObjects.concat(priorityList),
      []
    )
  }

  update() {
    if (this.gameOver && this.keyboard.isKeyPressed('Enter')) {
      this.initialize()
    }
    this.getFlatObjectList().forEach(object => object.update())
  }

  draw(context) {
    this.getFlatObjectList().forEach(object => object.draw(context))
  }

  addObject(object) {
    const stackingPriority = object.getStackingPriority()
    if (!this.objects[stackingPriority]) {
      this.objects[stackingPriority] = []
    }
    this.objects[stackingPriority].push(object)
    this.objectMap[object.getName()] = object
  }

  removeObject(objectToRemove) {
    this.objects = this.objects.map(priorityList => {
      return priorityList.filter(object => object !== objectToRemove)
    })
    delete this.objectMap[objectToRemove.getName()]
  }

  getObject(name) {
    return this.objectMap[name]
  }

  isColliding(object1, object2) {
    if (object1 === object2 || !object1 || !object2) {
      return false
    }
    const isRightLeftOfLeft = object1.x + object1.width < object2.x
    const isBottomAboveTop = object1.y + object1.height < object2.y
    const isTopBelowBottom = object1.y > object2.y + object2.height
    const isLeftRightOfRight = object1.x > object2.x + object2.width
    return (
      !isRightLeftOfLeft &&
      !isBottomAboveTop &&
      !isTopBelowBottom &&
      !isLeftRightOfRight
    )
  }

  getKeyboard() {
    return this.keyboard
  }

  getScreen() {
    return this.screen
  }

  end() {
    this.objects = []
    this.objectMap = {}
    this.gameOver = true
  }
}

export default Game
