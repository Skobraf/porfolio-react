import React, { Component } from 'react';

import About from './Components/About';
import Header from './Components/Header';
import Overview from './Components/Overview';
import Project from './Components/Project';
import {data} from './data';

import './App.css';

class App extends Component {
    state = {
      data: []
    }
    componentDidMount() {
      this.setState({
        data
      })
    }
  
  render() {
        const { data } = this.state;
    return (
      <div id="container">
        <Header />
        <div id="app">
          <Overview />
          <About />
          <h2 id="projects" class="section-title">Projects</h2>
          {data.map(e => (
            <Project key={e} data={e}/>
          )) }
        </div>
      </div>
  );
  }
    }

  


export default App;
