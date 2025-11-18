import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import AssetChart from './components/AssetChart';
import LoanChart from './components/LoanChart';
import RecentTransactions from './components/RecentTransactions';
import MembersIcon from './components/icons/MembersIcon';
import LoansIcon from './components/icons/LoansIcon';
import DepositsIcon from './components/icons/DepositsIcon';
import MembersPage from './components/MembersPage';

const TotalAssetsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6.75 6.75 0 000-13.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v.75m0 16.5V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h.75m16.5 0H21" />
        <path strokeLinecap="round"strokeLinejoin="round" d="M5.25 5.25l.53.53m12.44 12.44l.53.53" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 18.75l.53-.53m12.44-12.44l.53-.53" />
    </svg>
)

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 lg:ml-64">
        <Header title={currentPage} />
        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
          {currentPage === 'Dashboard' && (
            <>
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard 
                  icon={<TotalAssetsIcon />} 
                  title="Total Assets" 
                  value="฿25.6M"
                  change="+5.2%"
                  changeType="increase"
                  colorClass="bg-green-100"
                />
                <StatCard 
                  icon={<LoansIcon className="h-7 w-7 text-orange-600" />} 
                  title="Total Loans" 
                  value="฿18.2M"
                  change="+2.1%"
                  changeType="increase"
                  colorClass="bg-orange-100"
                />
                <StatCard 
                  icon={<MembersIcon className="h-7 w-7 text-sky-600" />} 
                  title="Active Members" 
                  value="1,254"
                  change="+12"
                  changeType="increase"
                  colorClass="bg-sky-100"
                />
                <StatCard 
                  icon={<DepositsIcon className="h-7 w-7 text-purple-600" />} 
                  title="New Deposits (Month)" 
                  value="฿1.2M"
                  change="-3.5%"
                  changeType="decrease"
                  colorClass="bg-purple-100"
                />
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                <div className="xl:col-span-3">
                  <AssetChart />
                </div>
                <div className="xl:col-span-2">
                  <LoanChart />
                </div>
              </div>
              
              {/* Recent Transactions */}
              <div>
                <RecentTransactions />
              </div>
            </>
          )}

          {currentPage === 'Members' && <MembersPage />}
        </div>
      </main>
    </div>
  );
};

export default App;
