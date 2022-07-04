import React from "react";
import { ThemeContext } from "../comp/ThemeContext";


class Theme extends React.Component{
 
 state={inputColor:''};   
    
   render()
   {
     
    return(
      <ThemeContext.Consumer>
       
   
                    
      </ThemeContext.Consumer>

    );

   }



}

export default Theme;