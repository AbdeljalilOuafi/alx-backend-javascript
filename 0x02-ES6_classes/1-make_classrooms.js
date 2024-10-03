#!/usr/bin/node

import ClassRoom from './0-classroom'

export default function initializeRooms() {
  const classRooms = [];
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      classRooms.push(new ClassRoom(19));
    } else if (i === 1) {
      classRooms.push(new ClassRoom(20));
    } else if (i === 2) {
      classRooms.push(new ClassRoom(34));
    }
  }
  return classRooms;
}
