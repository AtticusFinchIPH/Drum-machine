import React from 'react';
import DrumPad from './DrumPad';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.setState = {

        };
    }
    render(){
        return(
            <div id='drum-machine'>
                <div id='display'></div>
            </div>
        )
    }
}

export default DrumMachine;