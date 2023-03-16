import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bank: 'Bank 1'
    }

    this.toggleBank = this.toggleBank.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyHandle);
    document.querySelectorAll('.drum-pad').forEach(elem => {
      elem.addEventListener('click',this.clickHandle)
    })
  }

  componentDidUpdate() {
    document.querySelectorAll('.drum-pad').forEach(elem => {
      elem.addEventListener('click',this.clickHandle)
    })
  }

  toggleBank() {
    this.setState(state => {
      return state.bank === 'Bank 1' ? {bank: 'Bank 2'} : {bank: 'Bank 1'};
    });
  }


  keyHandle(e) {
    let display = document.getElementById('display');
    const key = document.getElementById(e.key);
    key.play()
    key.parentElement.style.backgroundColor = 'rgba(255, 216, 117, 1)';
    display.innerText = key.parentElement.id;
    setTimeout(() => key.parentElement.style.backgroundColor = 'rgb(152, 201, 200)',100);
  }

  clickHandle(e) {
    let display = document.getElementById('display');
    const elem = e.target;
    elem.children[0].play();
    elem.style.backgroundColor = 'rgb(255, 216, 117)';
    display.innerText = elem.id;
    setTimeout(() => elem.style.backgroundColor = 'rgb(152, 201, 200)', 100);
  }


  render() {
    return (
      <div class='container' id='drum-machine'>
        <div id='control'>
          <h1 id='tag-title'>Drum Kit</h1>
          <input type="checkbox" id='bank-toggle' onClick={this.toggleBank}/>
          <label for="bank-toggle">Toggle Bank</label>
          <div id='bank-display'>
            {this.state.bank}
          </div>
          <div id='display'>
          </div>
        </div>

        {this.state.bank === 'Bank 1' ? <Bank1 /> : <Bank2 />}

      </div>
    )

  }

}



const Bank1 = (props) => {
  return (
    <div id='pads'>
      <div class='drum-pad' id='ClosedHat'>Q
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" class='clip' id='Q'></audio>
      </div>
      <div class='drum-pad' id='OpenHat'>W<audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' class='clip' id='W'></audio></div>
      <div class='drum-pad' id='Clap'>E<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' class='clip' id='E'></audio></div>
      <div class='drum-pad' id='Heater2'>A<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' class='clip' id='A'></audio></div>
      <div class='drum-pad' id='Heater3'>S<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' class='clip' id='S'></audio></div>
      <div class='drum-pad' id='Heater4'>D<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' class='clip' id='D'></audio></div>
      <div class='drum-pad' id='Kick'>Z<audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' class='clip' id='Z'></audio></div>
      <div class='drum-pad' id='KickHat'>X<audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' class='clip' id='X'></audio></div>
      <div class='drum-pad' id='Heater1'>C<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' class='clip' id='C'></audio></div>
    </div>
  )
}


const Bank2 = () => {
  return (
    <div id='pads'>
      <div class='drum-pad' id=''>Q<audio src='./audio/ClosedHat.mp3' class='clip' id='Q'></audio></div>
      <div class='drum-pad' id=''>W<audio src=' ' class='clip' id='W'></audio></div>
      <div class='drum-pad' id=''>E<audio src='' class='clip' id='E'></audio></div>
      <div class='drum-pad' id=''>A<audio src='' class='clip' id='A'></audio></div>
      <div class='drum-pad' id=''>S<audio src='' class='clip' id='S'></audio></div>
      <div class='drum-pad' id=''>D<audio src='' class='clip' id='D'></audio></div>
      <div class='drum-pad' id=''>Z<audio src='' class='clip' id='Z'></audio></div>
      <div class='drum-pad' id=''>X<audio src='' class='clip' id='X'></audio></div>
      <div class='drum-pad' id=''>C<audio src='' class='clip' id='C'></audio></div>
    </div>
  )
}
