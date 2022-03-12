import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip} from 'recharts';

const data01 = [
  { name: 'facebook', value: 4000 },
  { name: 'insta', value: 3000 },
  { name: 'telegream', value: 3000 }
 
];



export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
     <div className='center'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
         
          <Tooltip />
        </PieChart>
        </div>
    
    );
  }
}
