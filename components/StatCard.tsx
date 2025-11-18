
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  colorClass: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change, changeType, colorClass }) => {
  const isIncrease = changeType === 'increase';
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-full ${colorClass}`}>
          {icon}
        </div>
        <div className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
            isIncrease ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
          {isIncrease ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          )}
          <span>{change}</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
