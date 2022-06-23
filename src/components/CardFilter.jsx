import React, { useState } from 'react';

const CardFilter = ({ setFiltered, filtered }) => {

    const [category, setCategory] = useState([
        {name: 'Show all'},
        {name: 'Design'},
        {name: 'Branding'},
        {name: 'Illustration'},
        {name: 'Motion'}, 
    ])

    const buttons = category.map(({ name }) => {
        const active = filtered === name;
        const clazz = active ? 'cardfilter-btn-active' : 'cardfilter-btn';
        return (
            <button type='button'
                className={`${clazz}`}
                key={name}
                onClick={() => setFiltered(name)}
            >
                {name}  
            </button>
        )
    })

    const options = category.map(({name}) => {
        return (
            <option key={name} value={name}>
                {name}
            </option>
        )
    })

    return (
        <div>
            <div className='cardfilter'>
                {buttons}
            </div>
            <select value={filtered} onChange={(e) => setFiltered(e.target.value)} className='cardfilter-select'>
                {options}
            </select>
        </div>
    );
};

export default CardFilter;