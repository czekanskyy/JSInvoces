import Input from './input';
import CountriesList from './countriesList';

const Buyer = () => (
  <section className='flex flex-col gap-y-2'>
    <p className='text-xl text-gray-600 font-semibold'>Buyer</p>
    <Input placeholder='Full name' />
    <Input placeholder='ID number' />
    <div />
    <Input placeholder='Address line 1' />
    <Input placeholder='Address line 2' />
    <div className='flex justify-between w-96'>
      <Input placeholder='ZIP code' halved />
      <Input placeholder='City' halved />
    </div>
    <CountriesList />
  </section>
);

export default Buyer;
