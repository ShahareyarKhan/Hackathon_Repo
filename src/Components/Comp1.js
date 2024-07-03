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
      <h1 className='text-center cursor-pointer' onClick={handleModeChange}>{props.mode}</h1>
    </div>
  );
};

export default Comp1;
