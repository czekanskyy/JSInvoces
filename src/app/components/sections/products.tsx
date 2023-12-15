import { items } from '@/data/items';

const Products = () => (
  <section className='grid grid-cols-3 gap-6'>
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-medium'>Products</h2>
      <h3 className='text-sm text-gray-600'>Select products to be shown on invoce</h3>
    </div>
    <div className='col-span-2'>
      <table className='w-full overflow-x-scroll rounded-xl'>
        <thead>
          <tr>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>#</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Name</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Quantity</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Unit</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Net price</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Discount</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Net value</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Tax rate</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Tax amount</th>
            <th className='px-3 py-1 font-semibold bg-blue-500 text-white border border-black'>Gross value</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            const netValue = (item.netPrice * item.qty) / ((100 - item.discount) / 100);
            const taxAmount = netValue * (item.taxRate / 100);
            const grossValue = netValue + taxAmount;

            console.log(netValue, taxAmount);

            return (
              <tr className={item.id % 2 == 0 ? 'bg-blue-50' : ''}>
                <td className='px-3 py-1 border border-black'>{item.id}</td>
                <td className='px-3 py-1 border border-black'>{item.name}</td>
                <td className='px-3 py-1 border border-black'>{item.qty}</td>
                <td className='px-3 py-1 border border-black'>{item.unit}</td>
                <td className='px-3 py-1 border border-black'>
                  {item.netPrice} {item.currency}
                </td>
                <td className='px-3 py-1 border border-black'>{item.discount}%</td>
                <td className='px-3 py-1 border border-black'>
                  {formatPrice(netValue)} {item.currency}
                </td>
                <td className='px-3 py-1 border border-black'>{item.taxRate}%</td>
                <td className='px-3 py-1 border border-black'>
                  {formatPrice(taxAmount)} {item.currency}
                </td>
                <td className='px-3 py-1 border border-black'>
                  {formatPrice(grossValue)} {item.currency}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </section>
);

const formatPrice = (price: number) =>
  price.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
export default Products;
