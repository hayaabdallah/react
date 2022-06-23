import {Outlet,Link,NavLink} from "react-router-dom";

function Nav()
{
    return(
/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
       <NavLink to='/home'>Home</NavLink>
      </li>
      <li class="nav-item active">
       <NavLink to='/about'>About</NavLink>
      </li>
    </ul>
  </div>
</nav> */
             <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({color: isActive ? 'red' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({color: isActive ? 'red' : 'white' })}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({color: isActive ? 'red' : 'white' })}>
                            Contact
                        </NavLink>
                    </div>
                </div>
    );
}

export default Nav;