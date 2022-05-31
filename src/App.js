import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      displayText: "Let's go!"
    }
    this.animation = this.animation.bind(this)
  }

  componentDidMount(){
    const sounds = document.querySelectorAll('audio')
    document.addEventListener('keypress', event => {
      switch(event.key.toUpperCase()){
        case 'Q':
          sounds[0].play()
          this.setState({displayText:'Hater-1'})
          break
        case 'W':
          sounds[1].play()
          this.setState({displayText:'Hater-2'})
          break
        case 'E':
          sounds[2].play()
          this.setState({displayText:'Hater-3'})
          break
        case 'A':
          sounds[3].play()
          this.setState({displayText:'Hater-4'})
          break
        case 'S':
          sounds[4].play()
          this.setState({displayText:'Alkış'})
          break
        case 'D':
          sounds[5].play()
          this.setState({displayText:'Open-HH'})
          break
        case 'Z':
          sounds[6].play()
          this.setState({displayText:"Kick n' Hat"})
          break
        case 'X':
          sounds[7].play()
          this.setState({displayText:'Kick'})
          break
        case 'C':
          sounds[8].play()
          this.setState({displayText:'Closed-HH'})
          break
      }
      this.animation('key', event.key)
    })

    document.addEventListener('click', event => {
      switch(event.target.getAttribute('id')){
        case 'Q':
          sounds[0].play()
          this.setState({displayText:'Hater-1'})
          break
        case 'W':
          sounds[1].play()
          this.setState({displayText:'Hater-2'})
          break
        case 'E':
          sounds[2].play()
          this.setState({displayText:'Hater-3'})
          break
        case 'A':
          sounds[3].play()
          this.setState({displayText:'Hater-4'})
          break
        case 'S':
          sounds[4].play()
          this.setState({displayText:'Alkış'})
          break
        case 'D':
          sounds[5].play()
          this.setState({displayText:'Open-HH'})
          break
        case 'Z':
          sounds[6].play()
          this.setState({displayText:"Kick n' Hat"})
          break
        case 'X':
          sounds[7].play()
          this.setState({displayText:'Kick'})
          break
        case 'C':
          sounds[8].play()
          this.setState({displayText:'Closed-HH'})
          break
      }
      if(['Q','W','E','A','S','D','Z','X','C'].includes(event.target.id)){
        this.animation('click', event.target.id)
      }
    })
  }

  animation(type, key){
    if(type == 'key'){
      const elem = document.querySelector(`#${key.toUpperCase()}`)
      elem.style.background = '#A85CF9'
      setTimeout(() => {
        elem.style.background = '#5534A5'
      }, 100);
    } else if(type == 'click'){
      const elem = document.querySelector(`#${key.toUpperCase()}`)
      elem.style.background = '#A85CF9'
      setTimeout(() => {
        elem.style.background = '#5534A5'
      }, 100);
    }
  }

  render(){
    const style = {
      width:'100vw',
      height:'100vh',
      background:'#5534A5',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }
    return (
      <div className='container' style={style}>
        <Drum text={this.state.displayText} />
      </div>
    )
  }
}

const Drum = props => {
  const style = {
    width:'800px',
    height:'400px',
    background:'#4B7BE5',
    border:'5px solid #A85CF9',
    boxShadow:'0px 0px 20px gray',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
  }
  const padStyle = {
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap:'wrap',
    color:'#6FDFDF',
    fontSize:'30px'
  }
  const displayStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div id='drum-machine' style={style}>
      <div className='drum' style={padStyle}>
        <div className='drum-pad' id='Q'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className='clip' id='Q'></audio> Q</div>
        <div className='drum-pad' id='W'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' className='clip' id='W'></audio> W</div>
        <div className='drum-pad' id='E'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className='clip' id='E'></audio> E</div>
        <div className='drum-pad' id='A'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' className='clip' id='A'></audio> A</div>
        <div className='drum-pad' id='S'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className='clip' id='S'></audio> S</div>
        <div className='drum-pad' id='D'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' className='clip' id='D'></audio> D</div>
        <div className='drum-pad' id='Z'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' className='clip' id='Z'></audio> Z</div>
        <div className='drum-pad' id='X'><audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className='clip' id='X'></audio> X</div>
        <div className='drum-pad' id='C'><audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className='clip' id='C'></audio> C</div>
      </div>
      <div className='drum' style={displayStyle}>
        <div className='text' id='display'>{props.text}</div>
      </div>
    </div>
  )
}

export default App;
