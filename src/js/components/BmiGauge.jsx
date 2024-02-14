import GaugeChart from "react-gauge-chart";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useAtomValue } from "jotai/react";
import { userData } from "js/state/state";

const BmiGauge = () => {
  const user = useAtomValue(userData);

  const calculateBMI = () => {
    return (
      user.weights[user.weights.length - 1].weight /
      (user.height / 100) ** 2
    ).toFixed(2);
  };

  /**
   * Returns a value between 0 and 1 to position the needle in the gauge chart
   * according to the bmi value
   */
  const gageCalc = (bmi) => {
    let result = 0;
    if (bmi < 18.5) {
      result = getPercentage(bmi, 16, 18.5, 0);
    } else if (bmi >= 18.5 && bmi < 25) {
      result = getPercentage(bmi, 18.5, 25, 0.2);
    } else if (bmi >= 25 && bmi < 30) {
      result = getPercentage(bmi, 25, 30, 0.4);
    } else if (bmi >= 30 && bmi < 35) {
      result = getPercentage(bmi, 30, 35, 0.6);
    } else if (bmi >= 35) {
      result = getPercentage(bmi, 35, 40, 0.8);
    }
    return result;
  };

  const getPercentage = (bmi, lowerBound, upperBound, segmentAdjustment) => {
    return (
      (bmi - lowerBound) / (upperBound - lowerBound) / 5 + segmentAdjustment
    );
  };

  const getTitle = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
      return "Obese";
    } else if (bmi >= 35) {
      return "Extremely Obese";
    }
  };

  return (
    <>
      <Typography variant="h6">BMI</Typography>
      <GaugeChart
        id="bmi-chart"
        nrOfLevels={5}
        percent={gageCalc(calculateBMI())}
        colors={["#ffa100", "#44ff00", "#fff000", "#ffa100", "#ff0000"]}
        arcPadding={0}
        cornerRadius={0}
        hideText={true}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h6">{getTitle(calculateBMI())}</Typography>
      </Box>
    </>
  );
};

export default BmiGauge;
