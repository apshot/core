/* yarn example/ */
import core from '../src'

(async () => {
  const res = await core({
    text: 'example',
  })
  console.log(res)
})()