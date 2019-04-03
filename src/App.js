import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  onInputChange = event => {
    console.log(event.target.value);
  };

onSubmit = () => [
  console.log('OUCH!')
]

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
