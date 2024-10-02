import handleProfileSignup from './6-final-user';

async function run() {
  try {
    const result = await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();
