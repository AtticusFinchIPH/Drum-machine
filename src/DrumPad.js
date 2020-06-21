import React from 'react';

class DrumPad extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
        this.props.onClick(e);
        }
    }   
    render(){
        return (
            <button className='drum-pad' id={this.props.id} keyTrigger={this.props.keyTrigger} onClick={this.props.onClick}>
                <audio className='clip' id={this.props.keyTrigger} src={this.props.url} type="audio/mpeg"></audio>
                <label>{this.props.keyTrigger}</label>
            </button>
        )
    }
}

export default DrumPad;