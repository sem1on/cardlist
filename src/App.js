
import React, { useState, useMemo } from 'react';
import './App.css';
import CardList from './components/CardList';
import Navbar from './components/Navbar';

import { v4 } from 'uuid';

import Abstract from './image/Abstract.png';
import Architect from './image/Architect.png';
import Calc from './image/Calc.png';
import DDDone from './image/DDDone.png';
import HandP from './image/HandP.png';
import KeyB from './image/KeyB.png';
import Sofa from './image/Sofa.png';
import Sport from './image/Sport.png';
import Work from './image/Work.png';

function App() {

    const [cards, setCards] = useState([
        {id: v4(), name: 'Sofa', image: Sofa, category: 'Design'},
        {id: v4(), name: 'KeyB', image: KeyB, category: 'Branding'},
        {id: v4(), name: 'Work', image: Work, category: 'Illustration'},
        {id: v4(), name: 'DDDone', image: DDDone, category: 'Motion'},
        {id: v4(), name: 'Abstract', image: Abstract, category: 'Design'},
        {id: v4(), name: 'HandP', image: HandP, category: 'Branding'},
        {id: v4(), name: 'Architect', image: Architect, category: 'Motion '},
        {id: v4(), name: 'Calc', image: Calc, category: 'Design '},
        {id: v4(), name: 'Sport', image: Sport, category: 'Branding'},  
        
        {id: v4(), name: 'Sofa2', image: Sofa, category: 'Design'},
        {id: v4(), name: 'KeyB2', image: KeyB, category: 'Branding'},
        {id: v4(), name: 'Work2', image: Work, category: 'Illustration'},
        {id: v4(), name: 'DDDone2', image: DDDone, category: 'Motion'},
        {id: v4(), name: 'Abstract2', image: Abstract, category: 'Design'},
        {id: v4(), name: 'HandP2', image: HandP, category: 'Branding'},
        {id: v4(), name: 'Architect2', image: Architect, category: 'Motion '},
        {id: v4(), name: 'Calc2', image: Calc, category: 'Design '},
        {id: v4(), name: 'Sport2', image: Sport, category: 'Branding'},


        {id: v4(), name: 'Sofa3', image: Sofa, category: 'Design'},
        {id: v4(), name: 'KeyB3', image: KeyB, category: 'Branding'},
        {id: v4(), name: 'Work3', image: Work, category: 'Illustration'},
        {id: v4(), name: 'DDDone3', image: DDDone, category: 'Motion'},
        {id: v4(), name: 'Abstract3', image: Abstract, category: 'Design'},
        {id: v4(), name: 'HandP3', image: HandP, category: 'Branding'},
        {id: v4(), name: 'Architect3', image: Architect, category: 'Motion '},
        {id: v4(), name: 'Calc3', image: Calc, category: 'Design '},
        {id: v4(), name: 'Sport3', image: Sport, category: 'Branding'},
    ]);
    const [filtered, setFiltered] = useState('Show all');
    const [limit, setLimit] = useState(9);

    const filterCard = useMemo(() => {
        if(filtered === 'Show all') {
            return cards.slice(0, limit);
        } else {
            return [...cards].slice(0, limit).filter(card => card.category === filtered);
        } 
    }, [cards, filtered, limit]);

    const onRemove = (card) => {
        setCards(cards.filter(c => c.id !== card.id))
    };


    return (
        <div>
            <Navbar/>
            <CardList 
                setLimit={setLimit} 
                limit={limit} 
                setFiltered={setFiltered} 
                cards={filterCard}
                allCards={cards} 
                setCards={setCards} 
                onRemove={onRemove} 
                filtered={filtered}/>
        </div>
    );
}

export default App;
