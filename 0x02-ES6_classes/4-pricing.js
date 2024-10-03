#!/usr/bin/node

import Currency from './3-currency';

/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || Number.isNaN(amount)) {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || Number.isNaN(amount)) {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number' || Number.isNaN(conversionRate)) {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
