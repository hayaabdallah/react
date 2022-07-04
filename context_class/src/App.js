import React from 'react';
import Home from './components/Home';
import Theme from './components/Theme';
import { ThemeContext } from './components/ThemeContext';

class App extends React.Component {

 state={color:'blue'}


 changeColorHandler = (changeColor) =>{

    this.setState({color:changeColor})

 }


  render() {

    return (

      <ThemeContext.Provider value={{state :this.state , changeColorHandler: this.changeColorHandler}}>
           <Home />

      </ThemeContext.Provider>

    );

  }

}

export default App;

















