import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '4856bb19a4054b42830a09e249307f5b'
});

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

  onButtonSubmit = () => {
    console.log('OUCH!');
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        'https://samples.clarifai.com/face-det.jpg'
      )
      .then(
        function(response) {
          console.log(response);
        },
        function(err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
