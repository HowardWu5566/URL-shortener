const usedShortURL = []

// 所有可用字元的陣列
function generateCharacter() {
  const character = '0123456789'
  const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetter = lowerCaseLetter.toUpperCase()
  const characterArr = (character + lowerCaseLetter + upperCaseLetter).split('')
  return characterArr
}

// 隨機產生 n 碼字串
function generateShortURL(length) {
  const range = generateCharacter()
  let shortURL = ''
  for (let i = 0; i < length; i++) {
    const singleLetter = range[Math.floor(Math.random() * range.length)]
    shortURL += singleLetter
  }
  return shortURL
}

function checkshortURL(shortURLLength) {
  const newItem = generateShortURL(shortURLLength)
  if (usedShortURL.some((item) => item === newItem)) {
    checkshortURL(shortURLLength)
  } else {
    usedShortURL.push(newItem)
  }
  return newItem
}

module.exports = checkshortURL
