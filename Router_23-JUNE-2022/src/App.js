import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';

function App() {

//     <Router>
// <div className="App">
//   <Nav/>
//   <div className="content">
//      <Routes>
//       <Route path="/home" element={<Home/>}>
//       </Route>
//       <Route path="/about" element={<About/>}>
//       </Route>
//      </Routes>
//   </div>
// </div>
// </Router>
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
