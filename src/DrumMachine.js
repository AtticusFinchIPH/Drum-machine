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
        let drumSound = this.state.isBank ? DrumSound_2 : DrumSound_1;
        return drumSound.map(sound => {
            return(
                <DrumPad id={sound.id} 
                key={sound.keyTrigger} 
                keyTrigger={sound.keyTrigger} 
                url={sound.url} 
                keyCode={sound.keyCode}
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
        let idAudio, display;
        if(e.keyCode){
            let drumSound = this.state.isBank ? DrumSound_2 : DrumSound_1;
            let target = drumSound.reduce((total, current) => {
                if(current.keyCode === e.keyCode) total = current;
                return total;
            })
            idAudio = target.keyTrigger;
            display = target.id;
        } else {
            idAudio = e.target.getAttribute("keyTrigger");
            display = e.target.id;
        }
        if(idAudio && this.state.isOn){
            const sound = document.getElementById(idAudio);
            sound.currentTime = 0;
            sound.play();
        }
        this.setState({
            display:display ? display : ''
        })
    }
    componentDidMount(){
        document.getElementById("checkbox-power").checked = this.state.isOn;
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
                            <input id="checkbox-power" type="checkbox" onChange={this.turnPower}/>
                            <span className="slider" ></span>
                        </label>
                    </div>
                    <div id="display">
                        <p>{this.state.display}</p>
                    </div>
                    <div className="button-section">
                        <label>Bank</label>
                        <label className="switch" >
                            <input type="checkbox"  onChange={this.turnBank}/>
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumMachine;