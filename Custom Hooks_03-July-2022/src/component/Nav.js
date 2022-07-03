import {Outlet,Link,NavLink} from "react-router-dom";

function Nav()
{
    return(

             <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/home" style={({ isActive }) => ({color: isActive ? 'green' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({color: isActive ? 'green' : 'white' })}>
                            About
                        </NavLink>
                    </div>
                    {/* <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({color: isActive ? 'green' : 'white' })}>
                            List
                        </NavLink>
                    </div> */}
                </div>
    );
}

export default Nav;