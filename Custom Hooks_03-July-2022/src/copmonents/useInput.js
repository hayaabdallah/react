import React ,{useState} from "react";



function useInput(email,password)
{
    const [em,setEmail] = useState('haya@gmail.com');
    const [pass,setPass] =useState('123456');

    const handleChange= () =>
    {

        if(email==em)
        {
            return  window.alert('Login is valid');
        }
        else
        {
            window.alert('Login is invalid');
        }
    }
    return(
        [ em ,pass , handleChange]
        )
}

export default useInput;