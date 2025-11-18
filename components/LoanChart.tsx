
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Emergency', value: 400 },
  { name: 'Housing', value: 1200 },
  { name: 'Personal', value: 800 },
  { name: 'Vehicle', value: 600 },
  { name: 'Education', value: 300 },
];

const LoanChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-96">
       <h3 className="text-lg font-semibold text-gray-800 mb-4">Loan Distribution (Million THB)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#d1d5db' }}/>
          <YAxis type="category" dataKey="name" width={80} tick={{ fill: '#6b7280' }} axisLine={{ stroke: '#d1d5db' }}/>
          <Tooltip 
             contentStyle={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              borderColor: '#e5e7eb',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
            cursor={{ fill: 'rgba(224, 242, 254, 0.5)' }}
          />
          <Bar dataKey="value" fill="#22c55e" barSize={20} radius={[0, 10, 10, 0]} name="Loan Amount"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoanChart;
