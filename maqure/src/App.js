import './App.css';
import Home from './components/HomePage';
import {Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUppage';
import Main from './components/MainPage';
import LoginMain from './components/Loginmain';

function App() {
  return (
    <>
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
