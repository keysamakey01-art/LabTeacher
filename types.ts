export enum TransactionType {
  DEPOSIT = 'Deposit',
  WITHDRAWAL = 'Withdrawal',
  LOAN_PAYMENT = 'Loan Payment',
  NEW_LOAN = 'New Loan',
}

export enum TransactionStatus {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
  FAILED = 'Failed',
}

export interface Transaction {
  id: string;
  memberName: string;
  memberId: string;
  date: string;
  type: TransactionType;
  amount: number;
  status: TransactionStatus;
}

export enum MemberStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    SUSPENDED = 'Suspended',
}

export interface Member {
    id: string;
    name: string;
    joinDate: string;
    savings: number;
    loan: number;
    status: MemberStatus;
}