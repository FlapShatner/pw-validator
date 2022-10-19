export function genPassword(length, isUp, isLow, isNum, isSym) {
  const low = isLow ? 'abcdefghijklmnopqrstuvwxyz' : null
  const up = isUp ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : null
  const num = isNum ? '0123456789' : null
  const sym = isSym ? '!@#$%^&*()' : null

  const string = makeString(low, up, num, sym)

  let newPassword = ''
  for (let i = 0; i <= length; i++) {
    const random = Math.floor(Math.random() * string.length)
    newPassword += string.substring(random, random + 1)
  }

  return newPassword
}

const makeString = (low, up, num, sym) => {
  const string = [low, up, num, sym].join('')
  return string
}

export function getStrength(length, isUp, isLow, isNum, isSym) {
  let strength
  // if (length >= 12 && isUp && isLow && isNum && isSym) {
  //   strength = 'strong'
  // } else if ((length < 12 && isUp && isLow && isNum && isSym) || (length >= 12 && isUp && isLow && isNum) || (length >= 12 && isUp && isLow && isSym)) {
  //   strength = 'medium'
  // } else if ((length < 12 && isUp && isLow && isNum) || (length < 12 && isUp && isLow && isSym) || (length >= 12 && isUp && isLow)  {
  //   strength = 'weak'
  // } else {
  //   strength = 'tooWeak'
  // }
  if (length > 12) {
    if (isLow && isUp && isNum && isSym) {
      strength = 'strong'
    } else if ((isLow && isUp && isNum) || (isLow && isUp && isSym)) {
      strength = 'medium'
    } else if (isLow && isUp) {
      strength = 'weak'
    } else {
      strength = 'tooWeak'
    }
  } else if (isLow && isUp && isNum && isSym) {
    strength = 'medium'
  } else if ((isLow && isUp && isNum) || (isLow && isUp && isSym)) {
    strength = 'weak'
  } else {
    strength = 'tooWeak'
  }

  return strength
}
