const Buyer = () => (
  <section className='grid grid-cols-3 gap-6'>
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-medium'>Buyer</h2>
      <h3 className='text-sm text-gray-600'>Provide buyer information (Full name, ID & address)</h3>
    </div>
    <div className='col-span-2 grid grid-cols-6 gap-x-6 gap-y-6'>
      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='fullName' className='text-sm font-medium'>
          Full name <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='fullName'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='IDNumber' className='text-sm font-medium'>
          ID number <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='IDNumber'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='col-span-6' />

      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='addressLine1' className='text-sm font-medium'>
          Address line 1 <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='addressLine1'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='addressLine2' className='text-sm font-medium'>
          Address line 2
        </label>
        <div>
          <input
            type='text'
            name='addressLine2'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-2'>
        <label htmlFor='ZIPCode' className='text-sm font-medium'>
          ZIP code <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='ZIPCode'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-2'>
        <label htmlFor='city' className='text-sm font-medium'>
          City <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='city'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-2'>
        <label htmlFor='country' className='text-sm font-medium'>
          Country <span className='text-red-500'>*</span>
        </label>
        <div>
          <select
            name='country'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          >
            <option value='Poland' selected>
              Poland
            </option>
          </select>
        </div>
      </div>
    </div>
  </section>
);

export default Buyer;
