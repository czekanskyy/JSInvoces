type propTypes = {
  class?: string;
  children: React.ReactNode;
};

const Th = (props: propTypes) => {
  return <th className={`p-1 font-semibold ${props.class} border border-black`}>{props.children}</th>;
};

export default Th;
