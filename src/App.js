import Stripes from './components/Stripes'
import Title from './components/Title';
import WorkBox from './components/WorkBox';
import AboutBox from './components/AboutBox';
import ContactBox from './components/ContactBox'

import './App.css';
import Waves from './components/Waves';


function App() {
  return (
    <div className="App">
      <Stripes />
      <Title />
      <div style={{ paddingTop: '10%'}}>
        <AboutBox />
        <ContactBox />
      </div>
      <WorkBox />
      <Waves />
    </div>
  );
}

export default App;
