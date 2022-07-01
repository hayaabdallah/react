import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Movie from './component/Movie';
function App() {
  return (
    <>

      <BrowserRouter>

        <Nav />
        <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/single" element={<Movie />}></Route>

        </Routes>



      </BrowserRouter>

    </>)
}

export default App;
