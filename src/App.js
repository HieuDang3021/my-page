import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main role='main'>
          <div className='main-content-container'>
            <Routes>
              <Route path='/about' element={<About/>} />
              <Route path='/my-page' element={<About/>} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
