"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Frontend Eng", applicants: 45 },
  { name: "Product Mgr", applicants: 28 },
  { name: "UX Designer", applicants: 34 },
  { name: "Data Analyst", applicants: 15 },
];

export default function RecruiterChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#a1a1aa', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#a1a1aa', fontSize: 12 }} 
          />
          <Tooltip
            cursor={{ fill: '#ffffff', opacity: 0.05 }}
            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff', borderRadius: '8px' }}
            itemStyle={{ color: '#8b5cf6' }}
          />
          <Bar dataKey="applicants" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
