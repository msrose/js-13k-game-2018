import GameObject from './GameObject'
import { withContext } from './CanvasHelpers'

class Player extends GameObject {
  update() {
    const keyboard = this.game.getKeyboard()
    const screen = this.game.getScreen()
    if (
      !this.game.isColliding(this, this.game.getObject('line')) &&
      !this.game.isColliding(this, this.game.getObject('line2'))
    ) {
      this.game.end()
      return
    }
    if (keyboard.isKeyPressed('ArrowUp')) {
      this.y -= 10
      if (this.y < 0) {
        this.y = 0
      }
    } else if (keyboard.isKeyPressed('ArrowDown')) {
      this.y += 10
      if (this.y + this.height > screen.height) {
        this.y = screen.height - this.height
      }
    }
    if (keyboard.isKeyPressed('ArrowLeft')) {
      this.x -= 10
      if (this.x < 0) {
        this.x = 0
      }
    } else if (keyboard.isKeyPressed('ArrowRight')) {
      this.x += 10
      if (this.x + this.width > screen.width) {
        this.x = screen.width - this.width
      }
    }
  }

  draw(context) {
    withContext(context, { fillStyle: 'red' }, context => {
      super.draw(context)
    })
  }
}

export default Player
