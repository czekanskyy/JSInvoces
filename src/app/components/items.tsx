import { items } from '@/data/items';
import Table from './table/table';
import Td from './table/td';
import Th from './table/th';

const Items = () => {
  return (
    <section className='col-span-2'>
      <Table cols={10}>
        <Th>#</Th>
        <Th>Name</Th>
        <Th>Quantity</Th>
        <Th>Unit</Th>
        <Th>Net price</Th>
        <Th>Discount</Th>
        <Th>Net value</Th>
        <Th>Tax rate</Th>
        <Th>Tax amount</Th>
        <Th>Gross value</Th>
        {items.map(item => {
          const netValue = item.netPrice * item.qty * ((100 - item.discount) / 100);
          const taxAmount = (netValue * item.taxRate) / 100;
          const grossValue = netValue + taxAmount;
          return (
            <>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.qty}</Td>
              <Td>{item.unit}</Td>
              <Td>{toPrice(item.netPrice, item.currency)}</Td>
              <Td>{item.discount}%</Td>
              <Td>{toPrice(netValue, item.currency)}</Td>
              <Td>{item.taxRate}%</Td>
              <Td>{toPrice(taxAmount, item.currency)}</Td>
              <Td>{toPrice(grossValue, item.currency)}</Td>
            </>
          );
        })}
      </Table>
    </section>
  );
};

const toPrice = (value: number, currencySymbol: string) =>
  value.toLocaleString('pl-PL', {
    style: 'currency',
    currency: currencySymbol,
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default Items;
