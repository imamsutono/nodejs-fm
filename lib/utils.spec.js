const { getNewUser, mapObjectToArray } = require('./utils')

describe('mapObjectToArray()', () => {
  test('maps values to array using callback', () => {
    const result = mapObjectToArray({age: 30, height: 65}, (k, v) => v + 10)

    expect(result).toEqual([40, 75])
  })

  test('callback get called', () => {
    const mockCb = jest.fn()
    const result = mapObjectToArray({age: 30, height: 65}, mockCb)

    expect(mockCb.mock.calls.length).toBe(2)
  })
})
