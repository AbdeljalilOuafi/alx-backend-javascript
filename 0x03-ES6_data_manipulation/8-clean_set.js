export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((ele) => ele && ele.startsWith(startString))
    .map((ele) => ele.replace(startString, ''))
    .join('-');
}
