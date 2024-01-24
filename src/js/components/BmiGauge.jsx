import GaugeChart from "react-gauge-chart";
import Typography from '@mui/material/Typography';

import { useAtomValue } from "jotai/react";
import { userData } from "../state/state";

const BmiGauge = () => {
  const user = useAtomValue(userData);

  const calculateBMI = () => {
    return (user.weights[user.weights.length-1].weight/((user.height/100)**2)).toFixed(2)
  }

  const gageCalc = (bmi) => {
    var result = 0;
    if (bmi >= 16 && bmi <= 18.5) {
      result = getPercentage(bmi, 16, 18.5, 0);
    } else if (bmi > 18.5 && bmi < 25) {
      result = getPercentage(bmi, 18.5, 25, 0.25);
    } else if (bmi >= 25 && bmi <= 30) {
      result = getPercentage(bmi, 25, 30, 0.5);
    } else {
      result = getPercentage(bmi, 25, 30, 0.75);
    }
    return result;
  };

  function getPercentage(bmi, lowerBound, upperBound, segmentAdjustment) {
    return (
      (bmi - lowerBound) / (upperBound - lowerBound) / 4 + segmentAdjustment
    );
  }

  return(
    <>
      <Typography variant="h6">
        BMI
      </Typography>
      <GaugeChart id="bmi-chart" 
        nrOfLevels={5} 
        percent={gageCalc(calculateBMI())}
        colors={["#ffa100", "#44ff00", "#fff000", "#ffa100", "#ff0000"]}
      />

    </>
  );
}

export default BmiGauge;
