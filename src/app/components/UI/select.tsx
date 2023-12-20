import RequiredMark from './requiredMark';

type PropTypes = {
  defaultValue?: string;
  label: string;
  required?: boolean;
  span: string;
  children: React.ReactNode;
};

const Select = (props: PropTypes) => {
  const name = props.label.toLowerCase().replaceAll(' ', '-');

  return (
    <div className={`flex flex-col gap-2 w-full ${props.span}`}>
      <label htmlFor={name} className='text-sm font-medium'>
        <span>{props.label}</span> {props.required && <RequiredMark />}
      </label>
      <select
        name={name}
        className='rounded px-2 py-1 shadow-sm bg-white outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 w-full'
        required={props.required}
        defaultValue={props.defaultValue}
      >
        {props.children}
      </select>
    </div>
  );
};

export default Select;
