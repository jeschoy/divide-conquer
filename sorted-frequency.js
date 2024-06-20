function sortedFrequency(arr, num) {
  let firstIdx = findingFirst(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findingLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findingFirst(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return findingFirst(arr, num, mid + 1, high);
    } else {
      return findingFirst(arr, num, low, mid - 1);
    }
  }
  return -1;
}

function findingLast(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return findingLast(arr, num, low, mid - 1);
    } else {
      return findingLast(arr, num, mid + 1, high);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
