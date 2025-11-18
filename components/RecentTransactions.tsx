
import React from 'react';
import { Transaction, TransactionType, TransactionStatus } from '../types';

const transactions: Transaction[] = [
  { id: 'T001', memberName: 'Anong Saelim', memberId: 'M1023', date: '2023-10-27', type: TransactionType.DEPOSIT, amount: 5000, status: TransactionStatus.COMPLETED },
  { id: 'T002', memberName: 'Boonmee Pongsak', memberId: 'M1089', date: '2023-10-27', type: TransactionType.LOAN_PAYMENT, amount: 12000, status: TransactionStatus.COMPLETED },
  { id: 'T003', memberName: 'Chaiya Suksom', memberId: 'M1045', date: '2023-10-26', type: TransactionType.WITHDRAWAL, amount: 2000, status: TransactionStatus.COMPLETED },
  { id: 'T004', memberName: 'Duangkamol Inkaew', memberId: 'M1101', date: '2023-10-26', type: TransactionType.NEW_LOAN, amount: 150000, status: TransactionStatus.PENDING },
  { id: 'T005', memberName: 'Ekkachai Boonruang', memberId: 'M1011', date: '2023-10-25', type: TransactionType.DEPOSIT, amount: 10000, status: TransactionStatus.COMPLETED },
  { id: 'T006', memberName: 'Fonthip Sangthong', memberId: 'M1072', date: '2023-10-25', type: TransactionType.LOAN_PAYMENT, amount: 7500, status: TransactionStatus.FAILED },
];

const StatusBadge: React.FC<{ status: TransactionStatus }> = ({ status }) => {
  const baseClasses = 'px-3 py-1 text-xs font-semibold rounded-full inline-block';
  switch (status) {
    case TransactionStatus.COMPLETED:
      return <span className={`${baseClasses} bg-green-100 text-green-800`}>Completed</span>;
    case TransactionStatus.PENDING:
      return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Pending</span>;
    case TransactionStatus.FAILED:
      return <span className={`${baseClasses} bg-red-100 text-red-800`}>Failed</span>;
    default:
      return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
  }
};

const RecentTransactions: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Member</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Type</th>
              <th scope="col" className="px-6 py-3 text-right">Amount (THB)</th>
              <th scope="col" className="px-6 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {tx.memberName}
                  <span className="block text-xs text-gray-400">{tx.memberId}</span>
                </td>
                <td className="px-6 py-4">{tx.date}</td>
                <td className="px-6 py-4">{tx.type}</td>
                <td className="px-6 py-4 text-right font-mono">{tx.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
                  <StatusBadge status={tx.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
