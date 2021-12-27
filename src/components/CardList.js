import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // iterando sobre robots e retornando um array que tem as informações necessárias
    // sempre que iterar alguma coisa em react, é necessario criar a propriedade key.
    const cardArray = robots.map((user, i) => {
        return <Card key = {i} 
                     id = {robots[i].id} 
                     name = {robots[i].name} 
                     email = {robots[i].email} />
    });

    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;