class Keyboard {
  constructor() {
    this.keyMap = {}
    window.addEventListener('keydown', event => {
      this.keyMap[event.key] = true
    })
    window.addEventListener('keyup', event => {
      this.keyMap[event.key] = false
    })
  }

  isKeyPressed(key) {
    return !!this.keyMap[key]
  }
}

export default Keyboard
