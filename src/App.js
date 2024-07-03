import React, { useState } from 'react';
import Comp1 from './Components/Comp1';

const App = () => {
    const name = 'Hector';
    const age = 22;
    const email = 'kYq5a@example.com';
    const [mode, setMode] = useState('light');

    return (
        <div>
            <h1 className='text-2xl text-center my-9 font-bold'>Props Tutorial</h1>
            <Comp1 name={name} age={age} email={email} mode={mode} setMode={setMode} />
        </div>
    );
};

export default App;
