import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip,ResponsiveContainer} from 'recharts';

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
       {/* <ResponsiveContainer width="100%" height="100%"> */}
        <PieChart width={500} height={500}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#eb6434"
            label
          />
         
          <Tooltip />
        </PieChart>
        {/* </ResponsiveContainer> */}
        </div>
    
    );
  }
}
