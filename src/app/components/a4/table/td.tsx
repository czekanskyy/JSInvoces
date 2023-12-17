type propTypes = {
  children: React.ReactNode;
};

const Td = (props: propTypes) => {
  return <td className='p-1 whitespace-nowrap border border-black'>{props.children}</td>;
};

export default Td;
