import React from 'react';
import DrumPad from './DrumPad';
import {DrumSound_1, DrumSound_2} from './DrumSound';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.setState = {
            isBank: false
        };
        this.buildDrumPad = this.buildDrumPad.bind();
    }
    buildDrumPad(isBank){
        let drumSound = DrumSound_1;
        if(isBank) drumSound = DrumSound_2;
        return drumSound.map(sound => {
            return(
                <DrumPad keyTrigger={sound.keyTrigger} url={sound.url}/>
            )
        })
    }
    render(){
        return(
            <div id="drum-machine">
                <div id='drum-tab'>
                    {this.buildDrumPad(true)}
                </div>
                <div id='actions'>
                    <div className="button-section">
                        <label>Power</label>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div id="display">
                        <p>Hello</p>
                    </div>
                    <div className="button-section">
                        <label>Bank</label>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumMachine;