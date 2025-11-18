
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', assets: 4000 },
  { name: 'Feb', assets: 3000 },
  { name: 'Mar', assets: 5000 },
  { name: 'Apr', assets: 4500 },
  { name: 'May', assets: 6000 },
  { name: 'Jun', assets: 5800 },
  { name: 'Jul', assets: 7200 },
];

const AssetChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-96">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Asset Growth (Million THB)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#d1d5db' }} />
          <YAxis tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#d1d5db' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              borderColor: '#e5e7eb',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Line type="monotone" dataKey="assets" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} name="Total Assets"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssetChart;
