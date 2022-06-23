import React, { useState } from 'react';


const CardItem = ({ card, onRemove, setFiltered }) => {

    const [isActive, setIsActive] = useState(false);

    const activeCard = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            {isActive 
                ? 
                <div className='carditem card-active' >
                    <img src={card.image} alt={card.name} onClick={activeCard}/>
                    <div className='card-desc' onClick={()=> setFiltered(card.category)}>{card.category}</div>
                    <div className='card-name'>{card.name}</div>
                    <div className='card-delet' onClick={() => onRemove(card)}>Del</div>
                </div>
                : 
                <div className='carditem' >
                    <img src={card.image} alt={card.name} onClick={activeCard}/>
                    <div className='card-desc' onClick={()=> setFiltered(card.category)}>{card.category}</div>
                    <div className='card-name'>{card.name}</div>
                </div> 
            }
            
        </div>
        

    );
};

export default CardItem;