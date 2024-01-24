import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

const WeightChart = ({ weights }) => {

  // TODO: get actual data
  const actulWeigths = [
    60,
    58,
    56,
    59,
  ];
  const xsabels = [
    '01/10/2023',
    '01/11/2023',
    '01/12/2023',
    '01/01/2024',
  ];

  const actualWeigths = () => {
    const result = [];
    for (let i = 0; i<weights.length; i++) {
      result.push(weights[i].weight)
    }
    return result;
  }

  const xLabels = () => {
    const result = [];
    for (let i = 0; i<weights.length; i++) {
      result.push(weights[i].date)
    }
    return result;
  }

  const idealWeights = () => {
    const result = [];
    for (let i = 0; i<weights.length; i++) {
      result.push(57);
    }
    return result;
  }

  return (
    <>
      <Typography variant="h6">
        Weight Chart
      </Typography>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <LineChart
          margin={{
            top: 50,
            right: 40,
            left: 40,
            bottom: 30,
          }}
          xAxis={[{ scaleType: 'point', data: xLabels() }]}
          series={[
            {
              data: actualWeigths(), label:'Actual weight'
            },
            {
              data: idealWeights(), label:'Ideal weight'
            },
          ]}
        />
      </div>
    </>
  );
}

export default WeightChart;
