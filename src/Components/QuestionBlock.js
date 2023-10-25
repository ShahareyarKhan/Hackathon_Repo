import React, { useState, useEffect } from "react";

import {  useNavigate } from "react-router-dom";

function QuestionBlock() {
  let navigate = useNavigate();
    const handleClick=()=>{
        if(localStorage.getItem('token')){
            navigate('/questions');
        }
        else{
            alert('Please Login first.');
        }

    }
    return (
        <div className="App d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center text-2xl lg:text-3xl font-semibold my-5">Mental health Assessment Question</h1>
           
         
            <button className="block mx-auto px-9 p-2 rounded mentbtn font-bold bg-gray-200 hover:scale-105  my-5" onClick={handleClick}>
                Start
            </button>
            
        </div>
    );
}

export default QuestionBlock;
