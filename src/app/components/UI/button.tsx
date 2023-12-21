'use client';

type PropTypes = {
  color: 'btn-red' | 'btn-green' | 'btn-blue' | 'btn-black';
  text: string;
  class?: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: PropTypes) => {
  return (
    <button
      className={`px-4 py-2 h-min self-end text-sm text-white rounded-md transition-all outline-none ${props.color} ${props.class}`}
      type='button'
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  );
};

export default Button;
