import React , {useState, Component} from 'react';
import './login.css';
import {Link, useNavigate} from 'react-router-dom'


function OTP() {
  window.scrollTo(0, 0);
    const navigate=useNavigate();
      const [otp,setOtp]=useState('')
      
      const changeOTP =async(e)=>{
            setOtp(e.target.value);
            e.preventDefault();
            
   
            console.log(otp);
            
        };
        //RESEND OTP KO KAM
        const resendotp = async (e) => {
          e.preventDefault();
          const _id = localStorage.getItem('_id');
          const email = localStorage.getItem('email');
          const values = {_id, email}
          console.log(values)
          const result = await fetch('http://localhost:5000/sendotp', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type':'application/json',
                }
          });
          const data = await result.json();
          console.log(data);
          
        navigate('/otp');
          
          
        };


      const handleOTP = async (e) =>{
        e.preventDefault();
        const _id = localStorage.getItem('_id');
        const values = {_id, otp}
        const result = await fetch('http://localhost:5000/verifyOTP', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type':'application/json',
            }
      });
      const data = await result.json();
      console.log(data);
      navigate('/login');
      }
  return (
    <div>
    <>

    <div className="text-center m-5-auto">
        <h2 className="signin_tit">Confirm Registration</h2>
        <form className="login_f" onSubmit={handleOTP}>
            <p>
                <label>Enter OTP Code</label><br/>
                <input type="text"  name="otp" required  onChange={changeOTP}/>
            </p>


            <button id="sub_btn_otp" type="button" className="btn_login" onClick={resendotp} >Resend Email</button>
            
      <button id="sub_btn_otp" type="submit" className="btn_login"  >Submit</button> 

        </form>

    </div>

    </>
    </div>
  )
}

export default OTP