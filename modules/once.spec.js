import { once } from './once'

it('', () => {
  let counter = 0
  const runOnce = once(x => {
    counter++

    return x + 2
  })
  expect(runOnce(1)).toEqual(3)
  runOnce(1)
  runOnce(1)
  runOnce(1)
  expect(counter).toEqual(1)
})

it('', () => {
  const addOneOnce = once((a, b, c) => a + b + c)

  expect(addOneOnce(10, 20, 30)).toBe(60)
  expect(
    addOneOnce(40)
  ).toEqual(60)
})

