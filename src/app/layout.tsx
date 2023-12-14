import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'JSInvoces',
  description: 'JavaScript invoces generator',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-gray-100`}>{children}</body>
    </html>
  );
};

export default RootLayout;
