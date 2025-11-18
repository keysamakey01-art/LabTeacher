import React from 'react';
import { Member, MemberStatus } from '../types';
import StatCard from './StatCard';
import MembersIcon from './icons/MembersIcon';
import LoansIcon from './icons/LoansIcon';

const members: Member[] = [
    { id: 'M1023', name: 'Anong Saelim', joinDate: '2020-01-15', savings: 150000, loan: 50000, status: MemberStatus.ACTIVE },
    { id: 'M1089', name: 'Boonmee Pongsak', joinDate: '2019-11-02', savings: 250000, loan: 0, status: MemberStatus.ACTIVE },
    { id: 'M1045', name: 'Chaiya Suksom', joinDate: '2021-03-20', savings: 80000, loan: 200000, status: MemberStatus.ACTIVE },
    { id: 'M1101', name: 'Duangkamol Inkaew', joinDate: '2018-07-10', savings: 500000, loan: 150000, status: MemberStatus.INACTIVE },
    { id: 'M1011', name: 'Ekkachai Boonruang', joinDate: '2022-05-01', savings: 45000, loan: 0, status: MemberStatus.ACTIVE },
    { id: 'M1072', name: 'Fonthip Sangthong', joinDate: '2017-09-25', savings: 320000, loan: 75000, status: MemberStatus.SUSPENDED },
    { id: 'M1234', name: 'Gamon Kaew-net', joinDate: '2023-08-12', savings: 12000, loan: 10000, status: MemberStatus.ACTIVE },
];

const StatusBadge: React.FC<{ status: MemberStatus }> = ({ status }) => {
  const baseClasses = 'px-3 py-1 text-xs font-semibold rounded-full inline-block';
  switch (status) {
    case MemberStatus.ACTIVE:
      return <span className={`${baseClasses} bg-green-100 text-green-800`}>Active</span>;
    case MemberStatus.INACTIVE:
      return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Inactive</span>;
    case MemberStatus.SUSPENDED:
      return <span className={`${baseClasses} bg-red-100 text-red-800`}>Suspended</span>;
    default:
      return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
  }
};

const NewMemberIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
)

const MembersPage: React.FC = () => {
  return (
    <div className="space-y-8">
        {/* Member Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <StatCard 
              icon={<MembersIcon className="h-7 w-7 text-sky-600" />} 
              title="Total Members" 
              value="1,254"
              change="+12"
              changeType="increase"
              colorClass="bg-sky-100"
            />
            <StatCard 
              icon={<NewMemberIcon />} 
              title="New Members (Month)" 
              value="23"
              change="+8.5%"
              changeType="increase"
              colorClass="bg-indigo-100"
            />
            <StatCard 
              icon={<LoansIcon className="h-7 w-7 text-orange-600" />} 
              title="Members with Loans" 
              value="876"
              change="-2.1%"
              changeType="decrease"
              colorClass="bg-orange-100"
            />
        </div>

      {/* Members Table */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <h3 className="text-lg font-semibold text-gray-800">All Members</h3>
            <div className="flex w-full md:w-auto items-end gap-4">
                {/* Search Field */}
                <div className="flex-grow">
                    <label htmlFor="member-search" className="block text-sm font-medium text-gray-700">
                        ค้นหา/แกไขข้อมูลสมาชิก
                    </label>
                    <div className="relative mt-1">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            id="member-search"
                            type="search"
                            className="block w-full rounded-lg border-0 bg-gray-100 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                            placeholder="ค้นหาด้วยชื่อ หรือรหัสสมาชิก"
                        />
                    </div>
                </div>
                
                {/* Add Member Button */}
                <button className="flex flex-shrink-0 items-center bg-coop-blue hover:bg-coop-blue-dark text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add New Member</span>
                </button>
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Member</th>
                <th scope="col" className="px-6 py-3">Join Date</th>
                <th scope="col" className="px-6 py-3 text-right">Savings (THB)</th>
                <th scope="col" className="px-6 py-3 text-right">Loan (THB)</th>
                <th scope="col" className="px-6 py-3 text-center">Status</th>
                <th scope="col" className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {member.name}
                    <span className="block text-xs text-gray-400">{member.id}</span>
                  </td>
                  <td className="px-6 py-4">{member.joinDate}</td>
                  <td className="px-6 py-4 text-right font-mono text-coop-green-dark">{member.savings.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-mono text-red-600">{member.loan.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge status={member.status} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="font-medium text-sky-600 hover:underline">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
