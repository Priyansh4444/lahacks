"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    time: 44,
  },
  {
    name: "Feb",
    time: 23,
  },
  {
    name: "Mar",
    time: 56,
  },
  {
    name: "Apr",
    time: 34,
  },
  {
    name: "May",
    time: 67,
  },
  {
    name: "Jun",
    time: 45,
  },
  {
    name: "Jul",
    time: 23,
  },
  {
    name: "Aug",
    time: 45,
  },
  {
    name: "Sep",
    time: 67,
  },
  {
    name: "Oct",
    time: 56,
  },
  {
    name: "Nov",
    time: 34,
  },
  {
    name: "Dec",
    time: 23,
  },
];

export default function Example() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={
          {
            fill: "hsl(var(--foreground))",
            opacity: 0.9,
          } as React.CSSProperties
        }
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          style={
            {
              fill: "hsl(var(--foreground))",
              opacity: 0.9,
            } as React.CSSProperties
          }
        />
        <YAxis
          style={
            {
              fill: "hsl(var(--foreground))",
              opacity: 0.9,
            } as React.CSSProperties
          }
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="time"
          stackId="a"
          fill="#8884d8"
          style={
            {
              fill: "hsl(var(--foreground))",
              opacity: 0.9,
              borderRadius: "30px",
            } as React.CSSProperties
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
//     >
