import Game from './Game'
import Keyboard from './Keyboard'
import GameObject from './GameObject'

const screen = document.getElementById('screen')
const context = screen.getContext('2d')

const keyboard = new Keyboard()
const game = new Game(screen, keyboard)
const player = new GameObject(game, { x: 50, y: 50, width: 50, height: 50 })

game.addObject(player)

const tick = () => {
  context.clearRect(0, 0, screen.width, screen.height)
  game.update()
  game.draw(context)
  requestAnimationFrame(tick)
}

tick()
