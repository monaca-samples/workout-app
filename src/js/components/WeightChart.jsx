import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

const WeightChart = () => {

  // TODO: get actual data
  const actualWeigths = [
    60,
    58,
    56,
    59,
  ];
  const xLabels = [
    '01/10/2023',
    '01/11/2023',
    '01/12/2023',
    '01/01/2024',
  ];

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
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          series={[
            {
              data: actualWeigths, label:'Actual weight'
            },
            {
              data: [57, 57, 57, 57], label:'Ideal weight'
            },
          ]}
        />
      </div>
    </>
  );
}

export default WeightChart;
