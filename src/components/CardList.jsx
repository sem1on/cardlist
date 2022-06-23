import React from 'react';

import CardFilter from './CardFilter';
import CardItem from './CardItem';

const CardList = ({ setFiltered, cards, allCards, onRemove, filtered, setLimit, limit }) => {

    return (
        <div className='cardlist'>
            <div className='cardlist-container'>
                <CardFilter 
                    setFiltered={setFiltered}
                    filtered={filtered}
                />
                {cards.length
                    ? 
                    <div className='cardlist-items'>
                        {cards.map((card)=>
                            <CardItem 
                                key={card.id}
                                card={card}
                                onRemove={onRemove}
                                setFiltered={setFiltered}
                            />
                        )}
                    </div>
                    :
                    <h2 className='no-found'> Сards not found</h2>
                }
                {cards.length < allCards.length
                    ?
                    <button className='cardlist-btn' onClick={()=>setLimit(limit + 9)}>Load More</button>
                    :
                    <div className='no-cards'>No more cards</div>
                }
            </div>
        </div>
    );
};

export default CardList;