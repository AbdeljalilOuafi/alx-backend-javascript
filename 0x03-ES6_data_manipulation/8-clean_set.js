#!/usr/bin/node

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const arr = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      const uniquePart = str.split(startString)[1];
      if (uniquePart) {
        arr.push(uniquePart);
      }
    }
  }
  return arr.join('-');
}
