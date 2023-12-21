import { countries } from '@/data/countries';
import Divider from '../UI/divider';
import Input from '../UI/input';
import SectionWrapper from './sectionWrapper';
import Select from '../UI/select';
import FileInput from '../UI/fileInput';

const Seller = () => (
  <SectionWrapper title='Seller' description='Provide seller information (Company name, address & banking information)'>
    <Input label='Company name' span='col-span-3' required />
    <Input label='VAT number' span='col-span-3' required />
    <FileInput />
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
