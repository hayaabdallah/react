import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  withdraw, deposit } from "./store/Action";
import  { useState } from "react";





 function Ui() {



  
  const [number, setnumber] = useState({});
  const dispatch = useDispatch();
  const res = useSelector((state) => state.res);
  return (
      <div>        
          <input type="number" onChange={(e) => setnumber(e.target.value)} />

          <button   onClick={() => dispatch(deposit(+number))}>Deposit</button>

          <button onClick={() => dispatch(withdraw(-number))}>Withdraw</button>
          <h3> {result}</h3>
      </div>




  );



}

export default Ui;