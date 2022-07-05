import React ,{useState} from "react";



function useInput(email,password)
{
    const [em,setEmail] = useState('haya@gmail.com');
    const [pass,setPass] =useState('123456');
    const [flag,setflag] =useState('false');

    const handleChange=()=>
    {

        if(email==em && password==pass)
        {
            setflag('true');
            return  window.alert('Login is valid');
        }
        else
        {
            window.alert('Login is invalid');
        }
    }
    return(
        [ em ,pass ,flag,handleChange]
        )
}

export default useInput;