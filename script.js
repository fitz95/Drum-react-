const drumSounds = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];
class ClickPad extends React.Component {
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount(){
        document.removeEventListener('keydown',this.handleKeyDown)
    }
    handleKeyDown = (e) => {
        if(e.keyCode == this.props.letter.charCodeAt()){
            this.audio.play()
            this.audio.currentTime=0
            this.props.handleDisplay(this.props.id)
        }
    }

    handleClick=()=>{
        this.audio.play()
        this.audio.currentTime=0
        this.props.handleDisplay(this.props.id)
    } 
    render() {
        
        return (
            <div
             className='drum-pad' 
             id={this.props.id}
             onClick={this.handleClick}>
                <h4>{this.props.letter}</h4>
                <audio 
                // this line below is important to represent the audio it is an arrow function that takes ref and equates to ref
                // this is so you could use the audio in the function above
                ref ={ref=> this.audio = ref}
                 onClick={this.handleClick} 
                 id={this.props.letter}
                 src={this.props.src}
                  className=' .col-6 .col-md-4 clip'
                  ></audio>

            </div>
        )
            
    }
};
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            display:''
        }
    }
    handleDisplay = display => this.setState({
        display
    })
    render() {
        return (
            <div id="drum-machine" className='container py-6'>
                <div id='display' >{this.state.display}</div>
                <div id='drum-pads' className='row'>
                    
                {drumSounds.map(o =>(<ClickPad
                 id={o.id}
                 handleDisplay={this.handleDisplay}
                 letter={o.keyTrigger} 
                 
                 src={o.url}/>))}
                 
                    </div>
                                 
            </div>
        );
    }
};





ReactDOM.render(<App />, document.getElementById('root'))
