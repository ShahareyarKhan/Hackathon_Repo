import React from 'react';
import Options from './Options';

function Question({ question, selectedOption, setSelectedOption, onSubmit }) {
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mt-3">
      <h5 className="mt-2 text-xl font-bold px-3 py-4 bg-[#d5b86abf] ques" style={{ border: "0.2px solid black" }}>
        {question.id}. {question.question} ?
      </h5>
      <form onSubmit={onSubmit} className="mt-2 mb-2">
        <Options
          options={question.options}
          selectedOption={selectedOption}
          setSelectedOption={handleOptionChange}
        />
        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-[#d0cdcd57] w-32 md:w-48 p-2 rounded-sm font-semibold my-4 block mx-auto hover:bg-[#c6c1c1]"
            style={{ border: "1px solid black" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Question;
