type propTypes = {
  class?: string;
  children: React.ReactNode;
};

const Th = (props: propTypes) => {
  return <th className={`px-3 py-1 font-semibold tracking-wide whitespace-nowrap ${props.class}`}>{props.children}</th>;
};

export default Th;
