// import React from 'react'
// import "./chart.css";
// import { 
//   LineChart, 
//   Line, 
//   XAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   ResponsiveContainer 
// } from 'recharts';
// // import userData from "../../dummydata";

// export default function Chart({title, userData, dataKey, grid}){

  
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];


//   return (
//     <div className='chart'>
//         <h3 className="chartTitle">{title}</h3>
//         <ResponsiveContainer width="100%" aspect={4/1}>
//           <LineChart data={data}>
//             <XAxis dataKey="name" stroke="#818cb3"/>
//             <Line type="monotone" dataKey={dataKey} stroke="#820cb3"/>
//             <Tooltip/>
//             {grid && <CartesianGrid stroke = "#293357" strokeDasharray='5 5 '/>}
//           </LineChart>
//         </ResponsiveContainer>
//     </div>
//   )
// }


// import React from 'react'

// export default function chart() {
//   return (
//     <div>chart</div>
//   )
// }



import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#818cb3" />
          <Line type="monotone" dataKey={dataKey} stroke="#818cb3" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#293357" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}