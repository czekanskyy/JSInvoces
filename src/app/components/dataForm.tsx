import Button from './UI/button';
import Buyer from './sections/buyer';
import Dates from './sections/dates';
import Payment from './sections/payment/payment';
import Products from './sections/products/products';
import Seller from './sections/seller';

const DataForm = () => {
  return (
    <form className='bg-white p-8 flex flex-col gap-4 w-full max-w-6xl rounded-md shadow-md'>
      <h1 className='text-4xl font-semibold mb-6 text-center'>
        <span className='inline-block pl-4 pt-4 pr-1 pb-1 bg-yellow-300 rounded'>JS</span> Invoices Generator
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
      <Button text='Generate' color='btn-blue' class='w-full mt-6' />
    </form>
  );
};

export default DataForm;
