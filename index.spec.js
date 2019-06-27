const {
  addToArrayAtIndex,
  deletePropFromObject,
  deleteFromArrayByValue,
  deleteMultipleFromArrayByValues,
  deleteFromArrayByIndex,
  deleteMultipleFromArrayByIndexes,
} = require('./index')

describe('addToArrayAtIndex', () => {
  const arr = ['apple', 'banana', 'orange']
  const item = 'peanut'
  it('handles too large index', () => {
    const expected = null
    expect(addToArrayAtIndex(arr, item, 4)).toEqual(expected)
  })

  it('handles too small index', () => {
    const expected = null
    expect(addToArrayAtIndex(arr, item, -1)).toEqual(expected)
  })

  it('adds to array at index', () => {
    const expected = ['apple', 'peanut', 'banana', 'orange']
    expect(addToArrayAtIndex(arr, item, 1)).toEqual(expected)
  })
})

describe('deletePropFromObject', () => {
  const obj = {
    item01: 'thing one',
    item02: 'thing two',
    item03: 'thing three',
  }

  it('handles non-existing property', () => {
    expect(deletePropFromObject(obj, 'item04')).toEqual(obj)
  })

  it('deletes property from object', () => {
    const expected = {
      item01: 'thing one',
      item03: 'thing three',
    }
    expect(deletePropFromObject(obj, 'item02')).toEqual(expected)
  })
})

describe('deleteFromArrayByValue', () => {
  const arr = ['item one', 'item two', 'item three']
  it('deletes item from array by value', () => {
    const expected = ['item one', 'item two']
    expect(deleteFromArrayByValue(arr, 'item three')).toEqual(expected)
  })

  it('handles value missing', () => {
    expect(deleteFromArrayByValue(arr, 'item four')).toEqual(arr)
  })
})

describe('deleteMultipleFromArrayByValues', () => {
  const arr = ['item one', 'item two', 'item three', 'item four', 'item five']
  it('deletes values from array by values', () => {
    const values = ['item three', 'item four']
    const expected = ['item one', 'item two', 'item five']
    expect(deleteMultipleFromArrayByValues(arr, values))
  })

  it('handles values missing', () => {
    const values = ['item three', 'item six']
    const expected = ['item one', 'item two', 'item five']
    expect(deleteMultipleFromArrayByValues(arr, values))
  })
})

describe('deleteFromArrayByIndex', () => {
  it('deletes item from array by index', () => {
    const arr = ['item one', 'item two', 'item three', 'item four']
    const expected = ['item one', 'item three', 'item four']
    expect(deleteFromArrayByIndex(arr, 1)).toEqual(expected)
  })
})

describe('deleteMultipleFromArrayByIndexes', () => {
  it('deletes multiple items from array by indexes', () => {
    const arr = ['item one', 'item two', 'item three', 'item four', 'item five', 'item six']
    const expected = ['item two', 'item three', 'item five']
    expect(deleteMultipleFromArrayByIndexes(arr, [0, 5, 3])).toEqual(expected)
  })
})
