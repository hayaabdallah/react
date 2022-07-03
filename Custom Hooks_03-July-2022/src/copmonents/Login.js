import React , {useState} from "react";
import useInput from './useInput';
function Login()
{

const [email ,setEmail] = useState('');
const [password , setPassword] =useState('');

const [em,pass,handleChange] = useInput(email,password);

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
       </form>
    </div>
 )


}

export default Login;