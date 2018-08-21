import GameObject from './GameObject'
import Font from './Font'
import { withContext } from './CanvasHelpers'

class Segment {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }

  draw(context) {
    const { x, y, width, height, color } = this
    withContext(context, { fillStyle: color }, context => {
      context.fillRect(x, y, width, height)
    })
  }
}

class Letter {
  constructor(letter, x, y, width, height) {
    const letterMap = Font.get(letter)
    const segHeight = height / letterMap.length
    const segWidth = width / letterMap[0].length
    this.segments = Font.get(letter)
      .map((row, i) =>
        row.map(
          (val, j) =>
            new Segment(
              x + j * segWidth,
              y + i * segHeight,
              segWidth,
              segHeight,
              val ? 'black' : 'white'
            )
        )
      )
      .reduce((acc, row) => acc.concat(row), [])
  }

  draw(context) {
    this.segments.forEach(segment => segment.draw(context))
  }
}

class Word {
  constructor(text, x, y, width, height, letterSpacing) {
    const letterWidth = (width - letterSpacing * text.length) / text.length
    this.letters = text
      .split('')
      .map(
        (letter, i) =>
          new Letter(
            letter,
            x + i * (letterWidth + letterSpacing),
            y,
            letterWidth,
            height
          )
      )
  }

  draw(context) {
    this.letters.forEach(letter => letter.draw(context))
  }
}

class Text extends GameObject {
  draw(context) {
    const { value, wordSpacing, letterSpacing } = this.params
    const words = value.split(' ')
    const letterCount = words.join('').length
    let offset = 0
    this.words = words.map(word => {
      const wordWidth =
        ((this.width - wordSpacing * words.length) / letterCount) * word.length
      const wordObj = new Word(
        word,
        this.x + offset,
        this.y,
        wordWidth,
        this.height,
        letterSpacing
      )
      offset += wordWidth + wordSpacing
      return wordObj
    })
    this.words.forEach(word => word.draw(context))
  }
}

export default Text
