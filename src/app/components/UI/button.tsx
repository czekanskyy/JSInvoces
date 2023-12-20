type PropTypes = {
  color: 'btn-red' | 'btn-green' | 'btn-blue';
};

const Button = (props: PropTypes) => {
  return (
    <button className={`px-4 py-2 h-min self-end text-sm text-white rounded-md transition-all  outline-none ${props.color}`} type='button'>
      Add
    </button>
  );
};

export default Button;
