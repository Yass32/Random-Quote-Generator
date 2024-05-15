import React from 'react';
function Button({color, onClick}) {
    return (
        <div>
            <div>
            </div>
            <button className='button' style={{'backgroundColor': color}} onClick={onClick}>Next Quote</button>

        </div>
        
        
    )

}
export default Button;