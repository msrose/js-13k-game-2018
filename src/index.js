import Game from './Game'
import Keyboard from './Keyboard'
import Player from './Player'
import Line from './Line'

const screen = document.getElementById('screen')
const context = screen.getContext('2d')

const keyboard = new Keyboard()
const game = new Game(screen, keyboard, game => {
  const playerHeight = 50
  const player = new Player(game, 'player', 100, {
    x: 0,
    y: screen.height / 2 - playerHeight / 2,
    width: 50,
    height: playerHeight,
  })

  const lineHeight = 25
  const line = new Line(game, 'line', 50, {
    x: 0,
    y: screen.height / 2 - lineHeight / 2,
    width: screen.width,
    height: lineHeight,
  })

  const nextLine = new Line(game, 'line2', 50, {
    x: screen.width,
    y:
      screen.height / 2 -
      lineHeight / 2 +
      (Math.random() * lineHeight * 2 - lineHeight),
    width: screen.width,
    height: lineHeight,
  })

  game.addObject(line)
  game.addObject(nextLine)
  game.addObject(player)
})

const tick = () => {
  context.clearRect(0, 0, screen.width, screen.height)
  game.update()
  game.draw(context)
  requestAnimationFrame(tick)
}

tick()
