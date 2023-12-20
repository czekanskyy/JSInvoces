import Input from '../UI/input';
import SectionWrapper from './sectionWrapper';

const Dates = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-CA');

  return (
    <SectionWrapper title='Dates' description='Select the dates to be on the invoice'>
      <Input label='Date of sale' span='col-span-2' type='date' required defaultValue={date} />
      <Input label='Issue date' span='col-span-2' type='date' required defaultValue={date} />
      <Input label='Due date' span='col-span-2' type='date' required defaultValue={date} />
    </SectionWrapper>
  );
};

export default Dates;
