import React from 'react';
import Stripes from './components/Stripes'
import Title from './components/Title';
import WorkBox from './components/WorkBox';
import AboutBox from './components/AboutBox';
import ContactBox from './components/ContactBox'

import './App.css';
import Waves from './components/Waves';
import Badge from './components/Badge';


function App() {
  console.log(React.version)
  return (
    <div className="App">
      <Stripes />
      <Title />
      <div style={{ paddingTop: '10%', zIndex: '2'}}>
        <AboutBox />
        <ContactBox />
        <Badge />
      </div>
      <WorkBox />
      <Waves />
    </div>
  );
}

export default App;
