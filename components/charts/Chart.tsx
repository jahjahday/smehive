import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [38, 22, 30, 8],
      backgroundColor: [
          'rgba(59, 109, 108, 1)',
        'rgba(186, 237, 189, 1)',
        'rgba(245, 2220, 155, 1)',
        'rgba(210, 80, 80, 1)',
      ],
      borderColor: [
        'rgba(59, 109, 108, 1)',
        'rgba(186, 237, 189, 1)',
        'rgba(245, 2220, 155, 1)',
        'rgba(210, 80, 80, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return <Doughnut data={data} />;
}
