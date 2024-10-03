/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number' || Number.isNaN(sqft)) {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
