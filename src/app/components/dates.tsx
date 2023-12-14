import DateInp from './dateInp';

const Dates = () => {
  return (
    <section className='grid grid-cols-2 w-96 gap-2 max-h-min self-start'>
      Date of sale: <DateInp />
      Invoce date: <DateInp />
      Due date: <DateInp />
    </section>
  );
};

export default Dates;
