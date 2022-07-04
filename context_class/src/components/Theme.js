import React from "react";
import { ThemeContex, ThemeContext } from "./ThemeContext";

class Theme extends React.Component{
state = {inputColor : ''}


 render()
 {
    return(
        <ThemeContext.Consumer>

              {
                     ({state ,changeColorHandler}) => (
                            <div style={{backgroundColor:state.color}}>
                               <input value={this.state.inputColor} onChange={(e)=>{
                                this.setState({inputColor : e.target.value})
                               }} />
                                    
                             <input type='button' value={'change'} onClick={()=>changeColorHandler(this.state.inputColor)} />


                            </div>
                           


                     )
                    
              }

        </ThemeContext.Consumer>

    );
 }


}

export default Theme;