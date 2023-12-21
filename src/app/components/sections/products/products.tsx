'use client';

import { items } from '@/data/items';
import Table from './products-table/table';
import Input from '../../UI/input';
import Button from '../../UI/button';
import SectionWrapper from '../sectionWrapper';
import { useRef, useState } from 'react';

type tableData = {
  id: number;
  name: string;
  qty: number;
  unit: string;
  netPrice: number;
  discount: number;
  taxRate: number;
  currency: string;
}[];

const Products = () => {
  const itemName = useRef<HTMLInputElement>();

  const [tableItems, setTableItems] = useState([]);
  const handleInsertion: React.MouseEventHandler<HTMLButtonElement> = e => {
    // console.log(itemName.current.value);
  };

  return (
    <SectionWrapper title='Products' description='Add products to be shown on invoce'>
      <div className='overflow-auto rounded pb-2 border shadow-sm max-h-96 col-span-6'>
        <Table data={items} />
      </div>
      <p className='font-medium col-span-6 mt-3 -mb-3'>Add new:</p>
      <Input reference={itemName} label='Item name' span='col-span-4' required />
      <Input label='Quantity' span='col-span-1' required />
      <Input label='Unit' span='col-span-1' required defaultValue='pc' />
      <Input label='Price' span='col-span-2' required />
      <Input label='Discount' span='col-span-2' defaultValue='0' withText={{ content: '%', position: 'after' }} />
      <Input label='Tax rate' span='col-span-1' required defaultValue='23' withText={{ content: '%', position: 'after' }} />
      <Button text='Add' color='btn-green' clickHandler={handleInsertion} />
    </SectionWrapper>
  );
};

export default Products;
