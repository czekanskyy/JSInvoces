type propTypes = {
  children: React.ReactNode;
};

const Td = (props: propTypes) => {
  return <td className='px-3 py-1 whitespace-nowrap'>{props.children}</td>;
};

export default Td;
