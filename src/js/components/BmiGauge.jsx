import GaugeChart from "react-gauge-chart";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useAtomValue } from "jotai/react";
import { userData } from "js/state/state";
import { BmiCategory } from "js/BmiCategory";

const BmiGauge = () => {
  const user = useAtomValue(userData);

  const calculateBMI = () => {
    return (
      user.weights[user.weights.length - 1].weight /
      (user.height / 100) ** 2
    ).toFixed(2);
  };

  return (
    <>
      <Typography variant="h6">BMI</Typography>
      <GaugeChart
        id="bmi-chart"
        nrOfLevels={5}
        percent={BmiCategory.getCategory(calculateBMI()).calculateGage()}
        colors={["#ffa100", "#44ff00", "#fff000", "#ffa100", "#ff0000"]}
        arcPadding={0}
        cornerRadius={0}
        hideText={true}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h6">
          {BmiCategory.getCategory(calculateBMI()).getTitle()}
        </Typography>
      </Box>
    </>
  );
};

export default BmiGauge;
