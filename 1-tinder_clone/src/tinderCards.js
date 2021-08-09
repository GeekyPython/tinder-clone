import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './tinderCards.css';
import instance from './axios';

let TinderCards =  () => {

    const [people, setPeople] = useState([]);

    useEffect(() =>{
        async function fetchData()
        {
            const req = await instance.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();

    },[])

    const swiped = (direction, nameToDelete) => {
        console.log(`removing ${nameToDelete}`);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(`${name} left the screen`);

    }


    return (

        <div class="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => {
                    return <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={['up','down']}
                            onSwipe={(dir) => swiped(dir,person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}>
                                <div style={{backgroundImage:`url(${person.img})`}} className="card">
                                    <h3>{person.name}</h3>
                                </div>
                            </TinderCard>
                })}
            </div>
        </div>
    );
}

export default TinderCards;