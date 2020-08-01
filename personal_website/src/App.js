import React, {useState, useRef} from 'react';
import CardId from './components/CardId.jsx'
import CardReseau from './components/CardReseau.jsx'
import CardText from './components/CardText.jsx'
import CardSkill from './components/CardSkill.jsx'
import CardProject from './components/CardProject.jsx';
import './App.css';
import CardCareer from './components/CardCareer.jsx';
import CardMail from './components/CardMail.jsx';


function App() {
  const [toggle, setToggle] = useState(false)
  const [styleCardSkill, setStyleCardSkill] = useState({})
  const [styleLogoLanguage, setStyleLogoLanguage] = useState({})
  const [toggleMail, setToggleMail] = useState(false)

  return (
    <div className="main">
      <div className="container-profil">
        <CardId/>
        <CardReseau
        setToggleMail={setToggleMail}
        />
        <CardText/>
      </div>
      <div className="second-column">
        <CardSkill
        setToggle={setToggle}
        toggle={toggle}
        styleCardSkill={styleCardSkill}
        styleLogoLanguage={styleLogoLanguage}
        /> 
        <div className="second-row" >
          <CardProject/>
          <CardCareer
          setToggle={setToggle}
          toggle={toggle}
          setStyleCardSkill={setStyleCardSkill}
          setStyleLogoLanguage={setStyleLogoLanguage}
          />
        </div>
      </div>  
      <CardMail
      setToggleMail={setToggleMail}
      toggleMail={toggleMail}
      setToggleMail={setToggleMail}
      />
    </div>
  );
}

export default App;
