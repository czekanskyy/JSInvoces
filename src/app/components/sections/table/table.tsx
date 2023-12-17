import Td from './td';
import Th from './th';

type propTypes = {
  data?: {
    id: number;
    name: string;
    qty: number;
    unit: string;
    netPrice: number;
    discount: number;
    taxRate: number;
    currency: string;
  }[];
};

const Table = (props: propTypes) => {
  return (
    <table className='w-full relative'>
      <thead className='bg-gray-100 sticky top-0'>
        <tr>
          <Th class='w-1'>#</Th>
          <Th class='w-1'>Name</Th>
          <Th class='w-1'>Quantity</Th>
          <Th class='w-1'>Unit</Th>
          <Th class='w-44'>Net price</Th>
          <Th class='w-1'>Discount</Th>
          <Th class='w-44'>Net value</Th>
          <Th class='w-24'>Tax rate</Th>
          <Th class='w-44'>Tax amount</Th>
          <Th class='w-44'>Gross value</Th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-100'>
        {props.data?.map(item => {
          const netValue = (item.netPrice * item.qty) / ((100 - item.discount) / 100);
          const taxAmount = netValue * (item.taxRate / 100);
          const grossValue = netValue + taxAmount;
          const currency = item.currency;

          console.log(netValue, taxAmount);

          return (
            <tr className={item.id % 2 == 0 ? 'bg-gray-50' : ''}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.qty}</Td>
              <Td>{item.unit}</Td>
              <Td>{formatPrice(item.netPrice, currency)}</Td>
              <Td>{item.discount}%</Td>
              <Td>{formatPrice(netValue, currency)}</Td>
              <Td>{item.taxRate}%</Td>
              <Td>{formatPrice(taxAmount, currency)}</Td>
              <Td>{formatPrice(grossValue, currency)}</Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const formatPrice = (price: number, currency: string) =>
  price.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });

export default Table;
