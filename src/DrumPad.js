import React from 'react';

function DrumPad(props){
    return (
        <button className='drum-pad'>
            <audio className='clip' id={props.keyTrigger} src={props.url} type="audio/mpeg"></audio>
            <label>{props.keyTrigger}</label>
        </button>
    )
}

export default DrumPad;