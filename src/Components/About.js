import React from 'react';

const About = ({ statements}) => {

    return (
        <div className="about-me">
          <div className="terminal">
            <div className="terminal-header">
              <div className="red-btn"></div>
              <div className="yellow-btn"></div>
              <div className="green-btn"></div>
            </div>
            <div id="terminal-window" className="terminal-window">
                {statements.map(e => (
                <div key={e.input} className="statement" >
                  <div className="input-statement" >{e.input}</div>
                 <div className="return-statement" >{e.output}</div>
                </div>
                
                ))}
            </div>
          </div>
        </div>
    )
}

export default About;