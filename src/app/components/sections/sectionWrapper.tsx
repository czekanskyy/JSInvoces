type PropTypes = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const SectionWrapper = (props: PropTypes) => {
  return (
    <section className='grid grid-cols-3 gap-6'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-lg font-medium'>{props.title}</h2>
        <h3 className='text-sm text-gray-600'>{props.description}</h3>
      </div>
      <div className='col-span-2 grid grid-cols-6 gap-6'>{props.children}</div>
    </section>
  );
};

export default SectionWrapper;
