#!/usr/bin/node

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const returnArray = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          returnArray.push({ status: result.status, value: result.value });
        } else if (result.status === 'rejected') {
          returnArray.push({ status: result.status, value: result.reason });
        }
      });
      return returnArray;
    });
}
