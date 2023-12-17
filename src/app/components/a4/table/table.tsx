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
  let totalNetPrice = 0;
  let totalDiscount = 0;
  let totalNetValue = 0;
  let totalTaxAmount = 0;
  let totalGrossValue = 0;

  return (
    <table className='w-full border border-black'>
      <thead className='bg-neutral-100'>
        <tr>
          <Th class='w-1'>#</Th>
          <Th class='w-96'>Name</Th>
          <Th class='w-1'>Qty</Th>
          <Th class='w-1'>Unit</Th>
          <Th class='w-1'>Net price</Th>
          <Th class='w-1'>Discount</Th>
          <Th class='w-1'>Net value</Th>
          <Th class='w-1'>Tax rate</Th>
          <Th class='w-1'>Tax amount</Th>
          <Th class='w-1'>Gross value</Th>
        </tr>
      </thead>
      <tbody className='divide-y divide-black'>
        {props.data?.map(item => {
          const discount = (item.discount / 100) * (item.netPrice * item.qty);
          const netValue = item.netPrice * item.qty - discount;
          const taxAmount = netValue * (item.taxRate / 100);
          const grossValue = netValue + taxAmount;

          totalNetPrice += item.netPrice;
          totalDiscount += discount;
          totalNetValue += netValue;
          totalTaxAmount += taxAmount;
          totalGrossValue += grossValue;

          console.log(netValue, taxAmount);

          return (
            <tr className={item.id % 2 == 0 ? 'bg-neutral-50' : ''}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.qty}</Td>
              <Td>{item.unit}</Td>
              <Td>{formatPrice(item.netPrice)}</Td>
              <Td>{-discount}</Td>
              <Td>{formatPrice(netValue)}</Td>
              <Td>{item.taxRate}%</Td>
              <Td>{formatPrice(taxAmount)}</Td>
              <Td>{formatPrice(grossValue)}</Td>
            </tr>
          );
        })}
        <tr className='font-bold'>
          <td className='p-1 border border-transparent border-r-black' colSpan={2}>
            &nbsp;
          </td>
          <td className='p-1 whitespace-nowrap border border-black text-right' colSpan={2}>
            Total ($):
          </td>
          <td className='p-1 whitespace-nowrap border border-black'>{formatPrice(totalNetPrice)}</td>
          <td className='p-1 whitespace-nowrap border border-black'>{formatPrice(totalDiscount)}</td>
          <td className='p-1 whitespace-nowrap border border-black'>{formatPrice(totalNetValue)}</td>
          <td className='p-1 whitespace-nowrap border border-black'>&nbsp;</td>
          <td className='p-1 whitespace-nowrap border border-black'>{formatPrice(totalTaxAmount)}</td>
          <td className='p-1 whitespace-nowrap border border-black'>{formatPrice(totalGrossValue)}</td>
        </tr>
      </tbody>
    </table>
  );
};

const formatPrice = (price: number) =>
  price.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default Table;
