import React from 'react';

function Options({ options, selectedOption, setSelectedOption, onOptionChange }) {
  const handleClick = (option, index) => {
    setSelectedOption(option);
    if (onOptionChange) {
      onOptionChange(option);
    }
  };

  return (
    <div className='options grid grid-cols-1 md:grid-cols-2 gap-3 my-4 w-full text-white'>
      {options.map((option, index) => (
        <div
          key={index}
          className={`font-semibold p-4 mt-2 rounded-md cursor-pointer hover:scale-105 mentbtn ${
            selectedOption === option ? 'bg-green-500 ' : 'bg-gray-900'
          }`}
          onClick={() => handleClick(option, index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

export default Options;
