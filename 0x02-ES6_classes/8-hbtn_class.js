/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to return the size when cast to a number
  valueOf() {
    return this._size;
  }

  // Method to return the location when cast to a string
  toString() {
    return this._location;
  }
}
