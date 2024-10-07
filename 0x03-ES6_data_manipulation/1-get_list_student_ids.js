#!/usr/bin/node

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((item) => item.id);
}
