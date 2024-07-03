import React from 'react';

const Comp1 = (props) => {
  const handleModeChange = () => {
    props.setMode(props.mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='my-9'>
      <h1 className='text-center'>{props.name}</h1>
      <h1 className='text-center'>{props.age}</h1>
      <h1 className='text-center'>{props.email}</h1>
      <div className='my-3 p-3 text-center cursor-pointer bg-[#234] w-[90px] mx-auto rounded-xl text-white' onClick={handleModeChange}>{props.mode}</div>
    </div>
  );
};

export default Comp1;
