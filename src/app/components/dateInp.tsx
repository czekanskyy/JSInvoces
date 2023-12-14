type propsType = {};

const DateInp = (props: propsType) => (
  <input
    type='date'
    defaultValue={new Date().toLocaleDateString('en-CA')}
    className='text-sm border rounded px-2 py-1 focus:outline-none focus:border-1 focus:border-gray-600'
  ></input>
);

export default DateInp;
