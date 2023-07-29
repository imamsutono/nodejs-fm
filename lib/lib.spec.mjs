import { add } from './mylib.mjs'
import assert from 'assert'

try {
  console.log('add() should add two numbers')
  assert.strictEqual(add(1, 2), 3)
  console.log('SUCCESS')
} catch (e) {
  console.log('FAIL')
  console.error(e)
}
