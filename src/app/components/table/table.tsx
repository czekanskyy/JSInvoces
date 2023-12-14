type propsType = {
  cols: number;
  children?: React.ReactNode;
};

const Table = (props: propsType) => {
  return <div className='grid grid-cols-10 auto-cols-auto text-sm border'>{props.children}</div>;
};

export default Table;
