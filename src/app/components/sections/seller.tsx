import { countries } from '@/data/countries';
import Divider from '../UI/divider';
import Input from '../UI/input';
import SectionWrapper from './sectionWrapper';
import Select from '../UI/select';

const Seller = () => (
  <SectionWrapper title='Seller' description='Provide seller information (Company name, address & banking information)'>
    <Input label='Company name' span='col-span-3' required />
    <Input label='VAT number' span='col-span-3' required />
    <div className='flex flex-col gap-2 w-full col-span-6'>
      <label htmlFor='logo' className='text-sm font-medium'>
        Company logo
      </label>
      <div className='border border-dashed rounded p-4 flex flex-col items-center justify-center gap-1 text-sm'>
        <div>
          <label
            htmlFor='file-upload'
            className='relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500'
          >
            <span>Upload a file</span>
            <input type='file' id='file-upload' name='file-upload' className='sr-only' />
          </label>
          <span className='text-gray-600'> or drag and drop</span>
        </div>
        <p className='text-xs text-gray-600'>PNG, JPG or WEBP</p>
      </div>
    </div>
    <Divider />
    <Input label='Address line 1' span='col-span-3' required />
    <Input label='Address line 2' span='col-span-3' />
    <Input label='ZIP code' span='col-span-2' required />
    <Input label='City' span='col-span-2' required />
    <Select label='Country' span='col-span-2' required defaultValue='Poland'>
      {countries.map(country => (
        <option key={country.id} value={country.name}>
          {country.name}
        </option>
      ))}
    </Select>
    <Divider />
    <Input label='Bank' span='col-span-3' required />
    <Input label='Account No.' span='col-span-3' required />
  </SectionWrapper>
);

export default Seller;
