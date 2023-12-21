import RequiredMark from './requiredMark';

type PropTypes = {
  defaultValue?: string;
  disabled?: boolean;
  label: string;
  required?: boolean;
  span: string;
  type?: string;
  withText?: {
    position: 'before' | 'after';
    content: string;
  };
  reference?: React.MutableRefObject<HTMLInputElement | undefined>;
};

const Input = (props: PropTypes) => {
  const name = props.label.toLowerCase().replaceAll(' ', '-');

  const InputField = ({ styles }: { styles?: string }) => {
    return (
      <input
        type={props.type || 'text'}
        name={name}
        className={`w-full outline-none ${styles} ${props.disabled ? 'cursor-not-allowed bg-slate-200' : 'bg-white'}`}
        defaultValue={props.defaultValue}
        required={props.required}
        disabled={props.disabled}
      />
    );
  };

  return (
    <div className={`flex flex-col gap-2 w-full ${props.span}`}>
      <label htmlFor={name} className='text-sm font-medium'>
        <span>{props.label}</span> {props.required && <RequiredMark />}
      </label>
      {!props.withText ? (
        <InputField styles='rounded px-2 py-1 shadow-sm bg-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500' />
      ) : (
        <div className='flex justify-between gap-x-1 items-center rounded px-2 py-1 shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 w-full'>
          {props.withText.position == 'before' && <span className='text-gray-500 font-medium'>{props.withText.content}</span>}
          <InputField />
          {props.withText.position == 'after' && <span className='text-gray-500 font-medium'>{props.withText.content}</span>}
        </div>
      )}
    </div>
  );
};

export default Input;
