import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

const WeightChart = ({ weights }) => {

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
