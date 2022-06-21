import React from 'react';

class Card extends React.Component {


  render() {
    return (
          <div class="col-sm-3">
        <img src="logo192.png"/>
        <h3>{this.props.name} </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <a href="#" class="btn btn-primary">see profile</a>
    
      </div>
  

       );

  }
}
export default Card;