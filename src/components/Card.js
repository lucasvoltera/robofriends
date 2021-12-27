import React from 'react';

            // props -> props.name, props.email, props.id
const Card = ({name, email, id}) => {
    return (
        // tipo um bootstrap da vida, mas chama tachyons
        //bg = background color, border3, padding 3, margin3, grow (animacao) 
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;