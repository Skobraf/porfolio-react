import React, { useState, useEffect, useRef } from 'react';


const Overview = () => {
 const [name, setName] = useState('');
 const [index, setIndex] = useState(0);
    useEffect(() => {
      split();
      
    }, [])
  const nom = [
    "A",
    "y",
    "o",
    "u",
    "b",
    " ",
    "A",
    "b",
    "e",
    "d"
    ];
    let nameRef = useRef(name);
    let indexRef = useRef(index);
    indexRef.current = index;
    nameRef.current = name;
    const split =  () => {
      if(nameRef.current.length < nom.length) {
      setName(nameRef.current + nom[indexRef.current]); 
      setIndex(indexRef.current + 1); 
      setTimeout(split, 400);
    }
    return;
    }

    return (
        <div className="overview">
          <div className="title">
            <h1 id="typing" className="yes"></h1>
            <h1 className="not">{name}<span>&nbsp;</span></h1>
          </div>
          <div className="description">
            <p>I am a Front-End Developper based in Morocco. The goal for all my projects is to produce simple & beautiful user experiences. In my prior life, I worked as a Graphic designer with a background in Computer Science . Follow my progress by exploring my simple projects below.</p>
          </div>
        </div>
    )
}

export default Overview;