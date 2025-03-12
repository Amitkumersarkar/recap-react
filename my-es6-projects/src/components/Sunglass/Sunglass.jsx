import React from 'react';
import './Sunglass.css';
import Watch from '../Watch/Watch';
import add from '../../Utils/calculate';
const Sunglass = () => {
    const first = 55;
    const second = 20;
    const sum = add(first, second);
    return (
        <div>
            <Watch>

            </Watch>
        </div>
    );
};

export default Sunglass;