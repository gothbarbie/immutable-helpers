function addToArrayAtIndex(arr = [], item = '', index = 0) {
  if (index < 0 || index + 1 > arr.length) {
    return null
  }
  return [
    ...arr.slice(0, index),
    item,
    ...arr.slice(index)
  ]
}

function deletePropFromObject(obj = {}, prop = '') {
  if (!obj.hasOwnProperty(prop)) {
    return obj
  }
  let { [prop]: omit, ...res } = obj
  return res
}

function deleteFromArrayByValue(arr = [], value = '') {
  return arr.filter(item => item !== value)
}

function deleteMultipleFromArrayByValues(arr = [], values = []) {
  return arr.filter(item => !values.includes(item))
}

function deleteFromArrayByIndex(arr = [], index = 0) {
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1, arr.length)
  ]
}

// TODO: handle unordered indexes (1,4,2...)
function deleteMultipleFromArrayByIndexes(arr, indexes) {
  const arrCopy = [...arr]
  let subtract = 0
  for (i of indexes) {
    arrCopy.splice(i - subtract, 1)
    subtract += 1
  }
  console.log('arrCopy', arrCopy)
  return arrCopy
}

module.exports = {
  addToArrayAtIndex,
  deletePropFromObject,
  deleteFromArrayByValue,
  deleteMultipleFromArrayByValues,
  deleteFromArrayByIndex,
  deleteMultipleFromArrayByIndexes,
}
