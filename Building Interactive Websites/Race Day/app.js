let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = false;

const runnerAge = 10;

if (registerEarly === true && runnerAge > 18){
  raceNumber += 1000;
}

if (registerEarly === true && runnerAge > 18) {
  console.log(`${raceNumber} will run at 9:30 am`);
}
else if (registerEarly === false && runnerAge > 18) {
  console.log(`${raceNumber} will run at 11:00 am`);
}

else if (runnerAge < 18) {
  console.log(`${raceNumber} will run at 12:30 am`);
}

else {
  console.log('Please see the registration deck');
}
