const Dates = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-CA');

  return (
    <section className='grid grid-cols-3 gap-6'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-lg font-medium'>Dates</h2>
        <h3 className='text-sm text-gray-600'>Select the dates to be on the invoice</h3>
      </div>
      <div className='col-span-2 grid grid-cols-6 gap-x-6 gap-y-6'>
        <div className='flex flex-col gap-2 w-full col-span-2'>
          <label htmlFor='dateOfSale' className='text-sm font-medium'>
            Date of sale <span className='text-red-500'>*</span>
          </label>
          <div>
            <input
              type='date'
              name='dateOfSale'
              defaultValue={date}
              className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full col-span-2'>
          <label htmlFor='issueDate' className='text-sm font-medium'>
            Issue date <span className='text-red-500'>*</span>
          </label>
          <div>
            <input
              type='date'
              name='issueDate'
              defaultValue={date}
              className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full col-span-2'>
          <label htmlFor='dueDate' className='text-sm font-medium'>
            Due date
          </label>
          <div>
            <input
              type='date'
              name='dueDate'
              defaultValue={date}
              className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dates;
