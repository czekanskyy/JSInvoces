import { items } from '@/data/items';
import Table from './table/table';

const Products = () => (
  <section className='grid grid-cols-3 gap-6'>
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-medium'>Products</h2>
      <h3 className='text-sm text-gray-600'>Add products to be shown on invoce</h3>
    </div>
    <div className='col-span-2 flex flex-col gap-y-4'>
      <div className='overflow-auto rounded pb-2 border shadow-sm max-h-96'>
        <Table data={items} />
      </div>
      <p className='font-medium'>Add new:</p>
      <form className='flex flex-col gap-y-2'>
        <div className='col-span-2 grid grid-cols-6 gap-x-6 gap-y-6'>
          <div className='flex flex-col gap-2 w-full col-span-4'>
            <label htmlFor='fullName' className='text-sm font-medium'>
              Item name <span className='text-red-500'>*</span>
            </label>
            <div>
              <input
                type='text'
                name='fullName'
                className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 w-full col-span-1'>
            <label htmlFor='fullName' className='text-sm font-medium'>
              Quantity <span className='text-red-500'>*</span>
            </label>
            <div>
              <input
                type='text'
                name='fullName'
                className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 w-full col-span-1'>
            <label htmlFor='fullName' className='text-sm font-medium'>
              Unit <span className='text-red-500'>*</span>
            </label>
            <div>
              <input
                type='text'
                name='fullName'
                defaultValue='pc'
                className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
              />
            </div>
          </div>
        </div>

        <div className='col-span-2 grid grid-cols-6 gap-x-6 gap-y-6'>
          <div className='flex flex-col gap-2 w-full col-span-2'>
            <label htmlFor='fullName' className='text-sm font-medium'>
              Price <span className='text-red-500'>*</span>
            </label>
            <div>
              <input
                type='text'
                name='fullName'
                className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 w-full col-span-2'>
            <label htmlFor='fullName' className='text-sm font-medium'>
              Discount <span className='text-red-500'>*</span>
            </label>
            <div className='flex justify-between gap-x-1 items-center rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 w-full'>
              <input type='text' name='fullName' defaultValue='0' className='w-full outline-none' />
              <span className='text-gray-500 font-medium'>%</span>
            </div>
          </div>

          <div className='flex flex-col gap-2 w-full col-span-1'>
            <label htmlFor='fullName' className='text-sm font-medium'>
              Tax rate <span className='text-red-500'>*</span>
            </label>
            <div className='flex justify-between gap-x-1 items-center rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 w-full'>
              <input type='text' name='fullName' defaultValue='23' className='w-full outline-none' />
              <span className='text-gray-500 font-medium'>%</span>
            </div>
          </div>

          <button
            className='px-4 py-2 h-min self-end text-sm bg-green-500 text-white rounded-md transition-all hover:shadow-[0_0_10px_rgba(34,197,94,0.5)] focus:shadow-[0_0_10px_rgba(34,197,94,0.5)] outline-none'
            type='button'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Products;
