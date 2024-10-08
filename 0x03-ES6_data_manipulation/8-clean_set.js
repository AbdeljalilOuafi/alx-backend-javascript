#!/usr/bin/node

export default function cleanSet(set, startString) {
  const arr = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      arr.push(str.split(startString)[1]);
    }
  }
  return arr.join('-');
}
