import Nav from './components/Nav';
import Card from './components/Card';
function App() {
  return (
    <div>
    <Nav/>
    <div class="container mt-5">
      <div class="row">
    <Card name = 'haya'/>
    <Card name = 'farah'/>
    <Card name = 'enas'/>
    <Card name = 'sara'/>
    </div>
    </div>
      </div>
 );
}

export default App;
