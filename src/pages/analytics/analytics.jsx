import React,{ PureComponent } from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import "./analytics.css";
import Chart from "../../components/chart/chart";
import { userData, pieData } from "../../dummydata";


export default class analytics extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';
  
    render() {
      return (
        <div className='analytics'>
            <h1>Analytics</h1>
            <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        </div>
      );
    }
  }
  
