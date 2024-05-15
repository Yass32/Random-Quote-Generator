import React from 'react';
function Quote({color, quote}) { 
    let { text, author } = quote;
    // Split the author string by comma and get the first part
    author = author.split(',')[0];

    return (
    <div style={{ color }}>
        <h2 className='h2'><span >&#10077; </span>
            {text}
        </h2>
        <h4 className='h4'>-{author}</h4>
    </div>
    );

}
export default Quote;