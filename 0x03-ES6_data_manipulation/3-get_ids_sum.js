export default function getStudentIdsSum(arr) {
  return arr.reduce((accumulator, item) => accumulator + item.id, 0);
}
