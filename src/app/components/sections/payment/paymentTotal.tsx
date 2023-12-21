'use client';
import Input from '../../UI/input';

type PropTypes = {
  sum?: number;
};

const Total = (props: PropTypes) => {
  return <Input label='Total' span='col-span-2' defaultValue='0' disabled />;
};

export default Total;
