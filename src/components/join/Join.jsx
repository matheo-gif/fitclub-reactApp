import React from 'react'
import{useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_ghlts7h', 'template_87js7v6', form.current,'eNocUFqsMwrNtEKnT',)
        .then((result)=>{
            console.log(result.text);  
        }, (error)=>{
            console.log(error.text)
        });


};
  return (
    <div className="Join">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form action="" className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email' />
                <button className='btn btn-j'>join now</button>
            </form>
        </div>
    </div>
    
  )
}

export default Join