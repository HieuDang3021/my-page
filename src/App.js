import './App.css';
import Navbar from './components/Navbar';
import Main_page from './pages/Main_page';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main role='main'>
          <div className='main-content-container'>
            <Routes>
              <Route path='/my-page' element={<Main_page/>} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
