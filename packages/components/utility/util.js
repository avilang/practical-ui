import GraphemeSplitter from 'grapheme-splitter'

const splitter = new GraphemeSplitter()

export const countGraphemes = (str = '') => {
  return splitter.countGraphemes(str)
}

export function isPromise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function'
}
