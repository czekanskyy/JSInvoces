import Buyer from './buyer';
import Dates from './dates';
import Items from './items';
import Payment from './payment';
import Seller from './seller';

const DataForm = () => {
  return (
    <form className='grid grid-cols-2 bg-white p-12 rounded-lg shadow gap-x-8 gap-y-4'>
      <h1 className='text-4xl font-semibold mb-2 col-span-2'>Invoces Generator</h1>
      <h2 className='text-2xl font-light col-span-2'>Seller & Buyer info:</h2>
      <Seller />
      <Buyer />
      <h2 className='text-2xl font-light mt-2'>Dates:</h2>
      <h2 className='text-2xl font-light mt-2'>Payment info:</h2>
      <Dates />
      <Payment />
      <h2 className='text-2xl font-light col-span-2'>Items:</h2>
      <Items />
    </form>
  );
};

export default DataForm;
