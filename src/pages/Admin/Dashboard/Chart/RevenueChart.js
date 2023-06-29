import React, { PureComponent } from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    uv: 2300,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

let start = new Date(),
  end = new Date();
start.setDate(start.getDate() - 7); // set to 'now' minus 7 days.
start.setHours(0, 0, 0, 0); // set to midnight.
function RevenueChart() {
  return (
    <div>
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  );
}

export default RevenueChart;
