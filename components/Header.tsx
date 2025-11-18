
import React from 'react';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white" placeholder="Search..." />
            </div>
            
            <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </button>
            
            <div className="flex items-center space-x-3">
               <img className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/100/100" alt="User" />
               <div>
                  <p className="text-gray-800 font-semibold text-sm">Somchai Jaidee</p>
                  <p className="text-gray-500 text-xs">Administrator</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
