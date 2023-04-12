import React from 'react';
import Heading2 from './Heading2';
import Pinkbtn from './Pinkbtn';
import emailjs from '@emailjs/browser';
import { useRef,useState} from 'react';

function Get_In_Touch(props){
  const [toSend, setToSend] = useState({
     user_name: '',
     user_email: '',
     user_option: '1',
     user_subs:"false"
   });

   const handleChange = (e) => {
      if(document.querySelector('#accept').checked){
        document.querySelector('#accept').value="User has opted subsciption"
      }else{
        document.querySelector('#accept').value=""
      }
      setToSend({ ...toSend, [e.target.name]: e.target.value });

    };

  const form = useRef();
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5m20x89', 'contact_form', form.current, 'QiS4rsjZ-FYcuCYJM')
      .then((result) => {
          console.log(result.text);
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };
  return(
    <div className="Get_In_Touch bg-yellow">
      <div className="container">
        <div className="row ps-4 pe-4 pt-5 pb-5">
          <div className="col-md-12">
          <Heading2 content="Get in touch with us"  className="heading02 daysOne"/>
          <form className="mt-5" ref={form} onSubmit={sendEmail} autoComplete="off">
              <label className="label_css mb-2">Hey, My name is </label>
              <input type="text" className="label_css unique_input_text ms-2 mb-2 me-2 ps-2 pe-2" placeholder='Type Here' required name="user_name" onChange={handleChange} value={toSend.user_name}/>
              <label className="label_css mb-2">and I am looking for </label>
              <select className="label_css unique_input_select mb-2" required name="user_option" onChange={handleChange} value={toSend.user_option}>
                <option value="Web Development">Web Development</option>
                <option value="Content Writing">Content Writing</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Graphics Design">Graphics Design</option>
              </select>
              <br />
              <label className="label_css mt-2">Get in touch with me at </label>
              <input type="email" className="label_css unique_input_text mb-3 me-2 ms-2 ps-2 pe-2" placeholder='Your Email ID here' name="user_email" onChange={handleChange}/>
              <span className='label_css'>!</span>
              <br />
                <input className="form-check-input chk me-1" type="checkbox" value="" required/>
                <span className=" body03"> I hereby accept all the Terms and Conditions. </span>
              <br />
                <input className="form-check-input chk me-1" type="checkbox" name="user_subs" id="accept" onChange={handleChange} value={toSend.user_subs}/>
                <span className=" body03"> Subscribe to our newsletter and never miss our latest news and promotions.</span>
              <br />
              <Pinkbtn content="Get Quotation" className="btn mt-4 hover_btn btn1 submitbtn"
              type="submit" style={{backgroundColor:"#181818", color:"white"}} value="Send"/>

          </form>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Get_In_Touch;
