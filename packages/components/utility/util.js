import GraphemeSplitter from 'grapheme-splitter'

const splitter = new GraphemeSplitter()

export const countGraphemes = (str = '') => {
  return splitter.countGraphemes(str)
}
