import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';

function App() {


return (
  <>
<Router>
  <Nav/>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
          </Routes>
          </Router>   
  </>
);
}

export default App;
