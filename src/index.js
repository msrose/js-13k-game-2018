import Game from './Game'
import Keyboard from './Keyboard'
import Player from './Player'
import GameObject from './GameObject'

const screen = document.getElementById('screen')
const context = screen.getContext('2d')

const keyboard = new Keyboard()
const game = new Game(screen, keyboard, game => {
  const playerHeight = 50
  const player = new Player(game, {
    x: 0,
    y: screen.height / 2 - playerHeight / 2,
    width: 50,
    height: playerHeight,
  })

  const lineHeight = 50
  const line = new GameObject(game, {
    x: 0,
    y: screen.height / 2 - lineHeight / 2,
    width: screen.width,
    height: lineHeight,
  })

  game.addObject(line, 'line')
  game.addObject(player, 'player')
})

const tick = () => {
  context.clearRect(0, 0, screen.width, screen.height)
  game.update()
  game.draw(context)
  requestAnimationFrame(tick)
}

tick()
