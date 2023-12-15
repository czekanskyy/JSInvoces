const Seller = () => (
  <section className='grid grid-cols-3 gap-6'>
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-medium'>Seller</h2>
      <h3 className='text-sm text-gray-600'>Provide seller information (Company name, address & banking information)</h3>
    </div>
    <div className='col-span-2 grid grid-cols-6 gap-x-6 gap-y-6'>
      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='companyName' className='text-sm font-medium'>
          Company name <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='companyName'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='VATNumber' className='text-sm font-medium'>
          VAT number
        </label>
        <div>
          <input
            type='text'
            name='VATNumber'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-6'>
        <label htmlFor='logo' className='text-sm font-medium'>
          Company logo
        </label>
        <div className='border border-dashed rounded p-4 flex flex-col items-center justify-center gap-1 text-sm'>
          <div>
            <label
              htmlFor='file-upload'
              className='relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500'
            >
              <span>Upload a file</span>
              <input type='file' id='file-upload' name='file-upload' className='sr-only' />
            </label>
            <span className='text-gray-600'> or drag and drop</span>
          </div>
          <p className='text-xs text-gray-600'>PNG, JPG or WEBP</p>
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

      <div className='col-span-6' />

      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='bankName' className='text-sm font-medium'>
          Bank <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='bankName'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='accountNumber' className='text-sm font-medium'>
          Account No. <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='accountNumber'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>
    </div>
  </section>
);

export default Seller;
