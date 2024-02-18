import React from "react";
import Card from './Card.js';

const CardList = ({ robots }) => {

    const robotComponent = robots.map(robot => 
        <Card key={robot.id} id={robot.id} name={robot.name} email={robots.email}/>
    )

    return (
        <div>
            {robotComponent}
        </div>
    );
}

export default CardList;