import React from 'react';

const Quote = ({ phrase }) => {

    const { quote, author } = phrase;
    return (
        <div className="frase">
            <h1>{ quote } </h1>
            <p>{ author }</p>
        </div>
    );
};

export default Quote;