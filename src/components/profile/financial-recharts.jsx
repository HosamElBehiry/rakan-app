"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Total: 450,
    services: 250,
    projects: 300,
    marketplaces: 200,
  },
  {
    name: "Feb",
    Total: 350,
    services: 180,
    projects: 220,
    marketplaces: 150,
  },
  {
    name: "Mar",
    Total: 250,
    services: 120,
    projects: 150,
    marketplaces: 100,
  },
  {
    name: "Apr",
    Total: 400,
    services: 300,
    projects: 350,
    marketplaces: 250,
  },
  {
    name: "May",
    Total: 300,
    services: 250,
    projects: 280,
    marketplaces: 200,
  },
  {
    name: "Jun",
    Total: 350,
    services: 280,
    projects: 320,
    marketplaces: 220,
  },
  {
    name: "Jul",
    Total: 500,
    services: 350,
    projects: 400,
    marketplaces: 300,
  },
  {
    name: "Aug",
    Total: 550,
    services: 400,
    projects: 450,
    marketplaces: 350,
  },
  {
    name: "Sep",
    Total: 600,
    services: 450,
    projects: 500,
    marketplaces: 400,
  },
  {
    name: "Oct",
    Total: 700,
    services: 500,
    projects: 600,
    marketplaces: 450,
  },
  {
    name: "Nov",
    Total: 750,
    services: 550,
    projects: 650,
    marketplaces: 500,
  },
  {
    name: "Dec",
    Total: 800,
    services: 600,
    projects: 700,
    marketplaces: 550,
  },
];

export const FinancialRecharts = () => {
  return (
    <div className="flex-1">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 800]}
            ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800]}
            allowDataOverflow={true}
            allowDecimals={false}
            interval={0}
          />
          <Tooltip />
          <Legend content={<CustomizedLegend />} />
          <ReferenceLine y={800} stroke="red" label="Max" />
          <Line type="monotone" dataKey="Total" stroke="#00FF73" />
          <Line type="monotone" dataKey="services" stroke="#DFB400" />
          <Line type="monotone" dataKey="projects" stroke="#FF44C1" />
          <Line type="monotone" dataKey="marketplaces" stroke="#9D53FF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomizedLegend = ({ payload }) => {
  return (
    <div className="flex items-center justify-end gap-5 mt-5">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-2">
          <div
            style={{ backgroundColor: entry.color }}
            className="size-2.5 rounded-full"
          />
          <span className="text-white text-xs">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
