import React, { Component } from 'react';

import About from './Components/About';
import Header from './Components/Header';
import Overview from './Components/Overview';
import Project from './Components/Project';
import Footer from './Components/Footer';
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
          <h2 id="contact" class="section-title">Contact me!</h2>
          <Footer />
        </div>
      </div>
  );
  }
    }

  


export default App;
