import './App.css';
import Home from './components/HomePage';
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUppage';
import Main from './components/MainPage';
import LoginMain from './components/Loginmain';
import MSME from './components/MSMEPage';
import MSMEProfile from './components/MSMEProfile';
import ConnectWallet from './components/ConnectWallet';
import Auditor from './components/AuditorPage';

function App() {
  return (
    <>
    <Routes>
      <Route path = "/MSME" element = {<MSME />} />
      <Route path = "/MSME/Profile" element = {<MSMEProfile />}/>
      <Route path = "/MSME/ConnectWallet" element = {<ConnectWallet />}/>  
      <Route path = "/auditor" element = {<Auditor />}/> 
    </Routes>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
      <header className="App-header">
        <Routes>   
          <Route path="/login" element={<LoginMain />} />
          <Route path = "/Investor" element={<Home />} />
          <Route path="/SignUp" element= {<SignUp />} />
        </Routes>
      </header>
    </div>
    </>
  )
}

export default App;
