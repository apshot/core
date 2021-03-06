import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import core from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await core({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts