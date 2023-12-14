import Input from './input';
import CountriesList from './countriesList';

const Seller = () => (
  <section className='flex flex-col gap-y-2'>
    <p className='text-xl text-gray-600 font-semibold'>Seller</p>
    <Input placeholder='Company name' />
    <Input placeholder='VAT number' />
    <div />
    <Input placeholder='Address line 1' />
    <Input placeholder='Address line 2' />
    <div className='flex justify-between w-96'>
      <Input placeholder='ZIP code' halved />
      <Input placeholder='City' halved />
    </div>
    <CountriesList />
    <div />
    <Input placeholder='Bank' />
    <Input placeholder='Account number' />
  </section>
);

export default Seller;
