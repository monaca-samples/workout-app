const generateRoutine = ( days, hours, firstTime, goal, targetGroup ) => {
  const routine = {};
  switch (goal) {
    case 'lose weight':
      if (days === 1) {
        if (hours === 1) {
          // do cardio only
          routine["1"] = [];
          routine["1"].push("0685", "0798", "2612", "1160");
          // push these exercises:
          // run 0685
          // stationary bike walk 0798
          // jump rope 2612
          // burpee 1160
        } else {
          // do cardio and strength
        }
      } else if (days === 2) {
        if (hours === 1) {
          // day 1:
          //    run, jump rope or walking on stepmill or walking on incline treadmill
          //    
        } else {
          // do cardio and strength
        }
      } else if (days === 3) {
        // do 3 days
      } else {
        // do 4 days
      }
      //
    break;
    case 'gain muscle':
      // divide depending on days available
      if (days === 1 || days === 2) {
        routine["1"] = [];
        routine["1"].push("0025", "0027", "0043", "0032");
        // do 
        // barbell full squat 0043
        // barbell deadlift 0032
        // barbell bench press 0025
        // barbell bent over row 0027
      } else if (days === 3) {
        routine["1"] = [];
        routine["1"].push("0025", "0027", "0043", "0032");
        routine["2"] = [];
        routine["2"].push("0294", "0231", "0405", "0585", "0599", "0605");
        routine["3"] = [];
        routine["3"].push("0025", "0027", "0043", "0032");
        // add one day of specialized?

        // day 1 and day 3 
        // barbell full squat
        // barbell deadlift
        // barbell bench press
        // barbell bent over row

        // day 2
        // dumbbell biceps curl 0294
        // cable standing one arm triceps extension 0231
        // dumbbell seated shoulder press 0405
        // lever leg extension 0585
        // lever seated leg curl 0599
        // lever standing calf raise 0605
      } else if (days === 4) {
        // upper lower

      } else {
        // push pull legs, upper lower
      }
    break;
    case 'gain flexibility':
      // IGNORE FOR NOW
    break;
    case 'become more athletic':
      // IGNORE FOR NOW
    break;
    default:      
      // add cardio to the 'gain muscle'
      // stationary bike walk
      alert("default")
    break;
  }

  return routine;
}

export {generateRoutine};