import { items } from '@/data/items';
import Table from './table/table';
import Input from '../UI/input';
import Button from '../UI/button';
import SectionWrapper from './sectionWrapper';

const Products = () => (
  <SectionWrapper title='Products' description='Add products to be shown on invoce'>
    <div className='overflow-auto rounded pb-2 border shadow-sm max-h-96 col-span-6'>
      <Table data={items} />
    </div>
    <p className='font-medium col-span-6 mt-3 -mb-3'>Add new:</p>
    <Input label='Item name' span='col-span-4' required />
    <Input label='Quantity' span='col-span-1' required />
    <Input label='Unit' span='col-span-1' required defaultValue='pc' />
    <Input label='Price' span='col-span-2' required />
    <Input label='Discount' span='col-span-2' defaultValue='0' withText={{ content: '%', position: 'after' }} />
    <Input label='Tax rate' span='col-span-1' required defaultValue='23' withText={{ content: '%', position: 'after' }} />
    <Button color='btn-green' />
  </SectionWrapper>
);

export default Products;
