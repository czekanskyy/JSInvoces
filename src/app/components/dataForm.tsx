import Buyer from './sections/buyer';
import Dates from './sections/dates';
import Payment from './sections/payment';
import Products from './sections/products';
import Seller from './sections/seller';

const DataForm = () => {
  return (
    <form className='bg-white 2xl:w-1/2 h-screen overflow-scroll p-8 flex flex-col gap-4'>
      <h1 className='text-4xl font-semibold mb-6 text-center'>
        <span className='inline-block pl-4 pt-4 pr-1 pb-1 bg-yellow-300 rounded'>JS</span> Invoces Generator
      </h1>
      <Seller />
      <hr className='my-6' />
      <Buyer />
      <hr className='my-6' />
      <Dates />
      <hr className='my-6' />
      <Products />
      <hr className='my-6' />
      <Payment />
    </form>
  );
};

export default DataForm;
