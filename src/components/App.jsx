import React from 'react';
import Autocomplete from './Autocomplete';

const App = () => {
    return (
        <div>
            <Autocomplete options={['apple', 'banana', 'carrot', 'cookie', 'diamond', 'eggs', 'flowers', 'grapes', 'hippos', 'helps', 'hopes', 'cakes', 'bakes', 'fakes', 'steaks', 'church', 'tax', 'tree', 'turkey', 'snakes', 'salad', 'soup', 'rain', 'rinse', 'pet', 'pasta', 'pizza', 'money', 'milk', 'bread', 'napkin', 'peanut', 'nine']}/>
        </div>
    );
};

export default App;
