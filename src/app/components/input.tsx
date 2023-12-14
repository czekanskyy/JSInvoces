type propsType = {
  type?: string;
  placeholder?: string;
  halved?: boolean;
};

const Input = (props: propsType) => (
  <input
    type={props.type ? `${props.type}` : 'text'}
    placeholder={props.placeholder}
    className={`text-sm border rounded px-2 py-1 focus:outline-none focus:border-1 focus:border-gray-600 placeholder:text-gray-400 placeholder:font-light ${
      props.halved ? 'w-[11.5rem]' : 'w-96'
    }`}
  ></input>
);

export default Input;
