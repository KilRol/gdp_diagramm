function merge(left, right, fn) {
  let arr = []
  while (left.length && right.length) {
    if (fn(left[0], right[0]) < 0) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

export function mergeSort(array, fn) {
  if (array.length < 2) {
    return array
  }
  const left = array.splice(0, array.length / 2)
  return merge(mergeSort(left, fn), mergeSort(array, fn), fn)
}