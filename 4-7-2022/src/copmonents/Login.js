import React , {useState} from "react";
import Home from "./Home";
import useInput from './useInput';
function Login()
{

const [email ,setEmail] = useState('');
const [password , setPassword] =useState('');

const [em,pass,flag,handleChange] = useInput(email,password);
console.log(flag);
if(flag=='true')
{
    return (<Home />)
}
else{
 return(

    <div>
       <form>
           <div>
               <label>Email:</label>
               <input type='email' name='email' onChange={e=>setEmail(e.target.value)}/>
           </div>

           <div>
               <label>Password:</label>
               <input type='password' name='password' onChange={e=>setPassword(e.target.value)} />
           </div>
           <button onClick={handleChange}>Log in</button>
           {/* {flag && <h1>Success</h1>}
    {!flag && <h1>Faild</h1>} */}
       </form>
    </div>
 )
}

}

export default Login;