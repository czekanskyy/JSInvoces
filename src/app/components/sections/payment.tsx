const Payment = () => (
  <section className='grid grid-cols-3 gap-6'>
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-medium'>Payment & Notes</h2>
      <h3 className='text-sm text-gray-600'>Provide data about payment (inc. payment status, method, currency etc.) and other information</h3>
    </div>
    <div className='col-span-2 grid grid-cols-6 gap-x-6 gap-y-6'>
      <div className='flex flex-col gap-2 w-full col-span-2'>
        <label htmlFor='total' className='text-sm font-medium'>
          Total
        </label>
        <div>
          <input
            type='text'
            name='total'
            disabled
            defaultValue={0}
            className='rounded px-2 py-1 shadow-sm bg-gray-50 cursor-not-allowed outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-2'>
        <label htmlFor='IDNumber' className='text-sm font-medium'>
          Paid <span className='text-red-500'>*</span>
        </label>
        <div>
          <input
            type='text'
            name='IDNumber'
            defaultValue={0}
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-2'>
        <label htmlFor='currency' className='text-sm font-medium'>
          Currency <span className='text-red-500'>*</span>
        </label>
        <div>
          <select
            name='currency'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          >
            <option value='USD' selected>
              USD ($)
            </option>
            <option value='EUR'>EUR (€)</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='paymentStatus' className='text-sm font-medium'>
          Payment status <span className='text-red-500'>*</span>
        </label>
        <div>
          <select
            name='paymentStatus'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          >
            <option value='paid' selected>
              paid
            </option>
            <option value='unpaid'>unpaid</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full col-span-3'>
        <label htmlFor='paymentMethod' className='text-sm font-medium'>
          Payment method <span className='text-red-500'>*</span>
        </label>
        <div>
          <select
            name='paymentMethod'
            className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
          >
            <option value='card' selected>
              Credit / Debit card
            </option>
            <option value='cash'>Cash</option>
          </select>
        </div>
      </div>

      <div className='col-span-6' />

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
    </div>
  </section>
);

export default Payment;
