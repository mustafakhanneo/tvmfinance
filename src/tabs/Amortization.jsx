import React, { useState } from 'react';

function Amortization() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [principalAmortizationTable, setPrincipalAmortizationTable] = useState([]);
  const [paymentAmortizationTable, setPaymentAmortizationTable] = useState([]);

  const handleCalculatePrincipalAmortization = () => {
    // Calculate fixed principal payoff every year
    const principalPayment = loanAmount / duration;
    let remainingBalance = loanAmount;
    let begBalance = loanAmount;
    const principalTable = [];

    for (let i = 1; i <= duration; i++) {
      const interest = remainingBalance * (interestRate / 100);
      const principal = principalPayment;
      const totalPayment = interest + principal;
      if(i>1) {
        begBalance -= principal;
      }
      remainingBalance -= principal;
      principalTable.push({ year: i, begBalance, interest, principal, totalPayment, remainingBalance });
    }

    setPrincipalAmortizationTable(principalTable);
  };

  const handleCalculatePaymentAmortization = () => {
    // Calculate fixed payment every year
    const anuualRate = interestRate / 100;
        const a = 1 + interestRate/100;
        const z = -duration;
        const b = Math.pow(a, z);
        const c = 1 - b;
        const d = (c/interestRate)*100;
        const e = loanAmount/d;
    const payment = e;
    let remainingBalance = loanAmount;
    let begBalance = loanAmount;
    let totalprincipal = 0;
    const paymentTable = [];

    for (let i = 1; i <= duration; i++) {
      const interest = remainingBalance * anuualRate;
      const principal = payment - interest;
      remainingBalance -= principal;
      totalprincipal += principal;
      paymentTable.push({ year: i, begBalance, interest, principal, totalPayment: payment, remainingBalance });
      begBalance = remainingBalance;
    }

    setPaymentAmortizationTable(paymentTable);

    
  };

  return (
    <div className='flex flex-col space-y-4'>
    <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200"> 
  <div className="collapse-title text-xl font-medium">
    Amortization Calculator
  </div>
  <div className="collapse-content space-y-4"> 
      <div className='flex sm:flex-row flex-col sm:space-x-6 space-x-0 sm:space-y-0 space-y-2'>
        <input type="number" placeholder="Loan Amount" className="[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] input input-bordered w-auto max-w-xs" value={loanAmount} onChange={(e) => setLoanAmount(parseFloat(e.target.value))} />
        <input type="number" placeholder="Interest Rate in %" className="[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] input input-bordered w-auto max-w-xs" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
        <input type="number" placeholder="Years" className="[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] input input-bordered w-auto max-w-xs" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} />
      </div>
      <div className='flex flex-row space-x-4 justify-start'>
      <button className="btn w-auto back input-bordered" onClick={handleCalculatePrincipalAmortization}>Calculate Principal Amortization</button>
      <button className="btn w-auto back input-bordered" onClick={handleCalculatePaymentAmortization}>Calculate Payment Amortization</button>
      </div>
      </div>
      </div>
      <p className="sm:text-xl text-md font-pilcrow font-medium">Principal Amortization Table</p>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Year</th>
        <th>Beg. Balance</th>
        <th>Interest</th>
        <th>Principal</th>
        <th>Principal</th>
        <th>Remaining Balance</th>
      </tr>
    </thead>
        <tbody>
          {principalAmortizationTable.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.begBalance.toFixed(2)}</td>
              <td>{row.interest.toFixed(2)}</td>
              <td>{row.principal.toFixed(2)}</td>
              <td>{row.totalPayment.toFixed(2)}</td>
              <td>{row.remainingBalance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <p className="sm:text-xl text-md font-pilcrow font-medium">Payment Amortization Table</p>
      <div className="overflow-x-auto">
  <table className="table">
    <thead>
          <tr>
            <th>Year</th>
            <th>Beginning Balance</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Total Payment</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {paymentAmortizationTable.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.begBalance.toFixed(2)}</td>
              <td>{row.interest.toFixed(2)}</td>
              <td>{row.principal.toFixed(2)}</td>
              <td>{row.totalPayment.toFixed(2)}</td>
              <td>{row.remainingBalance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Amortization;
