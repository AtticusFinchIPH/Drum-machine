import React from 'react';

function DrumPad(){
    return (
        <div className='drum-pad'>
            <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
            {this.props.keyboard}
        </div>
    )
}

export default DrumPad;