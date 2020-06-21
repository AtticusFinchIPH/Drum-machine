import React from 'react';
import DrumPad from './DrumPad';
import {DrumSound_1, DrumSound_2} from './DrumSound';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isBank: false,
            isOn: true,
            display: ''
        };
        this.buildDrumPad = this.buildDrumPad.bind(this);
        this.turnPower = this.turnPower.bind(this);
        this.turnBank = this.turnBank.bind(this);
        this.playSound = this.playSound.bind(this);
    }
    buildDrumPad(){
        let drumSound = DrumSound_1;
        if(this.state.isBank) drumSound = DrumSound_2;
        return drumSound.map(sound => {
            return(
                <DrumPad id={sound.id} key={sound.keyTrigger} keyTrigger={sound.keyTrigger} url={sound.url} keyCode={sound.keyCode}
                onClick={this.playSound}/>
            )
        })
    }
    turnPower(e){
        e.stopPropagation();
        console.log(`isOn: ${!this.state.isOn}`);
        this.setState({
            isOn: !this.state.isOn
        })
    }
    turnBank(e){
        e.stopPropagation();
        console.log(`isBank: ${!this.state.isBank}`);
        this.setState({
            isBank: !this.state.isBank
        })
    }
    playSound(e){
        let idAudio = e.target.getAttribute("keyTrigger");
        let display = e.target.id;
        if(idAudio && this.state.isOn){
            const sound = document.getElementById(idAudio);
            sound.currentTime = 0;
            sound.play();
        }
        this.setState({
            display:display
        })
    }
    render(){
        return(
            <div id="drum-machine">
                <div id='drum-tab'>
                    {this.buildDrumPad()}
                </div>
                <div id='actions'>
                    <div className="button-section">
                        <label>Power</label>
                        <label className="switch" >
                            <input type="checkbox" checked/>
                            <span className="slider" onClick={this.turnPower}></span>
                        </label>
                    </div>
                    <div id="display">
                        <p>{this.state.display}</p>
                    </div>
                    <div className="button-section">
                        <label>Bank</label>
                        <label className="switch" >
                            <input type="checkbox"/>
                            <span className="slider" onClick={this.turnBank}></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumMachine;