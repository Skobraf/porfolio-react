import React, { Component } from 'react';

import About from './Components/About';
import Header from './Components/Header';
import Overview from './Components/Overview';
import Project from './Components/Project';
import {data, statements} from './data';

import './App.css';

class App extends Component {
    state = {
      data: [],
      statements: []
    }
    componentDidMount() {
      this.setState({
        data,
        statements
      })
    }
  
  render() {
        const { data, statements } = this.state;
    return (
      <div id="container">
        <Header />
        <div id="app">
          <Overview/>
          <About statements={statements} />
          <h2 id="projects" className="section-title">Projects</h2>
          {data.map(e => (
            <Project key={e} data={e}/>
          )) }
        </div>
      </div>
  );
  }
    }

  


export default App;
