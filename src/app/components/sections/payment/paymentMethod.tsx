'use client';

import { useState } from 'react';
import Select from '../../UI/select';
import Input from '../../UI/input';

const PaymentMethod = () => {
  const [isOtherPaymentMethod, setOtherPaymentMethod] = useState(false);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    value === 'Other' ? setOtherPaymentMethod(true) : setOtherPaymentMethod(false);
  };

  return (
    <>
      <Select label='Payment method' span='col-span-3' required changeFunc={handleSelect}>
        <option value='Credit / Debit Card'>Credit / Debit Card</option>
        <option value='Cash'>Cash</option>
        <option value='PayPal'>PayPal</option>
        <option value='Other'>Other</option>
      </Select>
      {isOtherPaymentMethod && <Input label='Provide payment method' span='col-span-6' required />}
    </>
  );
};

export default PaymentMethod;
