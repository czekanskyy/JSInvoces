import Image from 'next/image';
import A4 from '../components/a4/a4';
import logo from '@/app/favicon.ico';
import Table from '../components/a4/table/table';
import { items } from '@/data/items';
import Link from 'next/link';

const Overview = () => {
  return (
    <main className='p-8 flex flex-col items-center justify-center gap-6'>
      <div className='shadow-md'>
        <A4>
          <div className='flex flex-col gap-y-6 h-full relative'>
            <section className='flex justify-between mb-4'>
              <div>
                <Image alt='company logo' src={logo} height={64} />
              </div>
              <div className='flex flex-col text-right'>
                <p>
                  Date of issue: <span className='font-semibold'>17.12.2023</span>
                </p>
                <p>
                  Date of sale: <span className='font-semibold'>13.12.2023</span>
                </p>
                <p>
                  Due date: <span className='font-semibold'>14.12.2023</span>
                </p>
                <p>
                  Payment method: <span className='font-semibold'>VISA ending 2137</span>
                </p>
              </div>
            </section>
            <section className='w-full flex justify-between'>
              <div className='flex flex-col'>
                <p className='text-base font-semibold mb-2'>Seller:</p>
                <p>Firma ABC</p>
                <p>ul. Testowa 4</p>
                <p className='hidden'>Address line 2</p>
                <p>00-000 Testowo</p>
                <p>Poland</p>
                <p>
                  Bank: <span>Global Bank Ltd.</span>
                </p>
                <p>
                  Acoount No. <span>1234567890</span>
                </p>
                <p>VAT number: 11223344</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-base font-semibold mb-2'>Buyer:</p>
                <p>Klient Testowy</p>
                <p>ul. Lorem 21/37</p>
                <p className='hidden'>Address line 2</p>
                <p>99-999 Ipsum</p>
                <p>Poland</p>
              </div>
            </section>
            <p className='font-bold text-2xl text-center'>VAT Invoice No. 2137/69</p>
            <section>
              <Table data={items} />
            </section>
            <section className='flex justify-between'>
              <p>
                Total: <span className='font-semibold'>4755,11 $</span>
              </p>
              <p>
                Paid: <span className='font-semibold'>4755,11 $</span>
              </p>
              <p>
                Due: <span className='font-semibold'>0 $</span>
              </p>
            </section>
            <hr />
            <p>
              Order number: <span className='font-semibold'>69420</span>
            </p>
            <section>
              <p>Notes:</p>
              <p className='italic'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quisquam eaque animi nobis laboriosam quibusdam magni eum illo? Sequi modi ipsum
                numquam ea dicta voluptates architecto perferendis consectetur vel possimus.
              </p>
            </section>
            <section className='absolute bottom-0 w-full'>
              <hr />
              <div className='flex justify-between absolute w-full top-2'>
                <p>Generated by: JSInvoices</p>
                <p>
                  Page <span className='font-semibold'>1</span> of <span className='font-semibold'>1</span>
                </p>
              </div>
            </section>
          </div>
        </A4>
      </div>
      <div className='w-[21cm] flex justify-between'>
        <Link href='../' className='px-4 py-2 bg-red-500 text-white rounded-md transition-all hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]'>
          Back
        </Link>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md transition-all hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]'>Download</button>
      </div>
    </main>
  );
};

export default Overview;
