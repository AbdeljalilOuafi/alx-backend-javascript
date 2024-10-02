import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lasName, fileName) {
  const userPromise = signUpUser(firstName, lasName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
