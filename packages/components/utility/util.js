import GraphemeSplitter from 'grapheme-splitter'
import Big from 'big.js'

const splitter = new GraphemeSplitter()

export const PBig = Big()
PBig.NE = -7
PBig.PE = 21
PBig.RM = Big.roundHalfUp
PBig.strict = true

export const countGraphemes = (str = '') => {
  return splitter.countGraphemes(str)
}

export function isPromise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function'
}
