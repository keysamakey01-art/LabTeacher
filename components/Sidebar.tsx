import React from 'react';
import DashboardIcon from './icons/DashboardIcon';
import MembersIcon from './icons/MembersIcon';
import LoansIcon from './icons/LoansIcon';
import DepositsIcon from './icons/DepositsIcon';
import ReportsIcon from './icons/ReportsIcon';
import SettingsIcon from './icons/SettingsIcon';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
      active
        ? 'bg-sky-500 text-white shadow-lg'
        : 'text-gray-600 hover:bg-sky-100 hover:text-sky-600'
    }`}
  >
    {icon}
    <span className="ml-4">{label}</span>
  </a>
);

interface SidebarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed">
      <div className="flex items-center justify-center h-20 border-b border-gray-200">
        <div className="flex items-center">
            <svg className="h-8 w-8 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          <h1 className="text-xl font-bold text-gray-800 ml-2">Teacher's Coop</h1>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavItem icon={<DashboardIcon />} label="Dashboard" active={currentPage === 'Dashboard'} onClick={() => setCurrentPage('Dashboard')} />
        <NavItem icon={<MembersIcon />} label="Members" active={currentPage === 'Members'} onClick={() => setCurrentPage('Members')} />
        <NavItem icon={<LoansIcon />} label="Loans" active={currentPage === 'Loans'} onClick={() => setCurrentPage('Loans')} />
        <NavItem icon={<DepositsIcon />} label="Deposits" active={currentPage === 'Deposits'} onClick={() => setCurrentPage('Deposits')} />
        <NavItem icon={<ReportsIcon />} label="Reports" active={currentPage === 'Reports'} onClick={() => setCurrentPage('Reports')} />
        <NavItem icon={<SettingsIcon />} label="Settings" active={currentPage === 'Settings'} onClick={() => setCurrentPage('Settings')} />
      </nav>
      <div className="p-4 border-t border-gray-200">
          <div className="p-4 bg-sky-50 rounded-lg text-center">
              <h4 className="font-semibold text-sky-800">Need Help?</h4>
              <p className="text-sm text-sky-600 mt-1">Check our documentation.</p>
              <button className="mt-3 text-sm bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors">
                  Documentation
              </button>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;