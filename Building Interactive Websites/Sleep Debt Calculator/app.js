const getSleepHours = day => {
  if (day === 'sunday' || day == 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday' || day == 'saturday') {
    return 8;
  }
};

const getActualSleepHours = () => {
  return getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');
};

const getIdealSleepHours = idealHours => {
  return idealHours * 7;
}

const calculateSleepDebt = idealHours => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(idealHours);

  if (actualSleepHours === idealSleepHours){
    return console.log('User got perfect sleep. You slept: ' + actualSleepHours)
  }

  else if (actualSleepHours > idealSleepHours) {
    const sleepProfit = actualSleepHours - idealSleepHours;
    return console.log(`User got too much sleep.You slept ${sleepProfit} more hours than needed.`);
  }

  else {
    const sleepDebt = idealSleepHours- actualSleepHours ;
    return console.log(`Get some rest. You need ${sleepDebt} more hours`);
  }
}
calculateSleepDebt(3);
