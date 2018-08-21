import Game from './Game'
import Keyboard from './Keyboard'
import Player from './Player'
import Line from './Line'
import Text from './Text'

const screen = document.getElementById('screen')
const context = screen.getContext('2d')

const keyboard = new Keyboard()

const initialize = game => {
  const titleWidth = 200
  const title = new Text(
    game,
    'title',
    1000,
    {
      x: screen.width / 2 - titleWidth / 2,
      y: 10,
      width: titleWidth,
      height: 20,
    },
    { value: 'offline', wordSpacing: 10, letterSpacing: 3 }
  )

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

  game.addObject(title)
  game.addObject(line)
  game.addObject(nextLine)
  game.addObject(player)
}

const onEnd = game => {
  const gameOverWidth = 200
  const gameOverHeight = 50
  game.addObject(
    new Text(
      this,
      'gameover',
      1000,
      {
        x: screen.width / 2 - gameOverWidth / 2,
        y: screen.height / 2 - gameOverHeight / 2,
        width: gameOverWidth,
        height: gameOverHeight,
      },
      { value: 'game over', wordSpacing: 10, letterSpacing: 3 }
    )
  )
}

const game = new Game(screen, keyboard, initialize, onEnd)

const tick = () => {
  context.clearRect(0, 0, screen.width, screen.height)
  game.update()
  game.draw(context)
  requestAnimationFrame(tick)
}

tick()
