import { countries } from '@/data/countries';
import Divider from '../UI/divider';
import Input from '../UI/input';
import SectionWrapper from './sectionWrapper';
import Select from '../UI/select';

const Buyer = () => (
  <SectionWrapper title='Buyer' description='Provide buyer information (Full name, ID & address)'>
    <Input label='Full name' span='col-span-3' required />
    <Input label='ID number' span='col-span-3' required />
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
  </SectionWrapper>
);

export default Buyer;
