import { currencies } from '@/data/currencies';
import Input from './input';

const Payment = () => {
  return (
    <section className='grid grid-cols-2 w-96 gap-2'>
      Total: <Input halved />
      Paid: <Input halved />
      Payment status: <Input halved />
      Payment method: <Input halved />
      Currency:{' '}
      <select className='text-sm border rounded px-2 py-1 focus:outline-none focus:border-1 focus:border-gray-600 bg-white'>
        {currencies.map(currency => (
          <option key={currency.code}>
            {currency.code} ({currency.symbol})
          </option>
        ))}
      </select>
      <span className='col-span-2'>Notes:</span>
      <textarea className='text-sm col-span-2 border rounded px-2 py-1 focus:outline-none focus:border-1 focus:border-gray-600'></textarea>
    </section>
  );
};

export default Payment;
