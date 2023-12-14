import { countries } from '@/data/countries';

const CountriesList = () => {
  return (
    <select className='text-sm border rounded px-2 py-1 w-96 focus:outline-none focus:border-1 focus:border-gray-600 bg-white'>
      <option value='null' selected>
        Select country
      </option>
      {countries.map((country, i) => (
        <option key={i} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountriesList;
