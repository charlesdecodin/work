import React, {useState, useRef} from 'react';
import CardId from './components/CardId.jsx'
import CardReseau from './components/CardReseau.jsx'
import CardText from './components/CardText.jsx'
import CardSkill from './components/CardSkill.jsx'
import CardProject from './components/CardProject.jsx';
import './App.css';

import CardCareer from './components/CardCareer.jsx';

function App() {
  const[toggle, setToggle] = useState(false)

  return (
    <div className="main">
      <div className="container-profil">
        <CardId/>
        <CardReseau/>
        <CardText/>
      </div>
      <div className="second-column">
        <CardSkill
        setToggle={setToggle}
        toggle={toggle}
      
        /> 
        <div className="second-row" >
          <CardProject/>
          <CardCareer
          setToggle={setToggle}
          toggle={toggle}
          />
        </div>
      
      </div>
      
      </div>
  );
}

export default App;
