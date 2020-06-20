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
            <div className="drum-machine">
                <div id='drum-pad'>
                    <button className="drum-button">Q</button>
                    <button className="drum-button">Q</button>
                    <button className="drum-button">Q</button>
                    <button className="drum-button">Q</button>
                    <button className="drum-button">Q</button>
                    <button className="drum-button">Q</button>
                    <button className="drum-button">Q</button>
                    <button className="drum-button">Q</button>
                    <button className="drum-button">Q</button>
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