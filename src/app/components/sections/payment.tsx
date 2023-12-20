import { currencies } from '@/data/currencies';
import Input from '../UI/input';
import Select from '../UI/select';
import SectionWrapper from './sectionWrapper';

const Payment = () => {
  return (
    <SectionWrapper title='Payment & Notes' description='Provide data about payment (inc. payment status, method, currency etc.) and other information'>
      <Input label='Total' span='col-span-2' defaultValue='0' />
      <Input label='Paid' span='col-span-2' defaultValue='0' required />
      <Select label='Currency' span='col-span-2' required defaultValue='USD'>
        {currencies.map(currency => (
          <option key={currency.code} value={currency.code}>
            {currency.name} ({currency.symbol})
          </option>
        ))}
      </Select>
      <Select label='Payment status' span='col-span-3' required>
        <option value='Paid'>Paid</option>
        <option value='Unpaid'>Unpaid</option>
      </Select>
      <Select label='Payment method' span='col-span-3' required>
        <option value='Credit / Debit Card'>Credit / Debit Card</option>
        <option value='Cash'>Cash</option>
        <option value='PayPal'>PayPal</option>
        <option value='Other'>Other</option>
      </Select>
      <div className='flex flex-col gap-2 w-full col-span-6'>
        <label htmlFor='notes' className='text-sm font-medium'>
          Notes
        </label>
        <div>
          <textarea
            name='notes'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Payment;
