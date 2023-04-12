import React from 'react';
import Navbar from '../components/Navbar'
import Contact from "../components/Contact"

function Privacy(){
  

  return(
    <div className="privacy">
    <Navbar />
      
      <div className="container" style={{marginTop:"150px"}}>
        <div className="row p-4">
          <div className="col-12 text-center">
              <h5 className='daysOne heading01' >Privacy Policy</h5>
              <p className='privacyPolicy p-5 m-2 my-4'>
                At Webalar.in, we are committed to protecting the privacy and security of our clients and visitors. This Privacy Policy outlines the types of personal information that we collect, how we use it, and the steps we take to protect it.
                <br/>
                <span>Collection of Personal Information</span>
                When you visit our website, we may collect certain information about you, including your name, email address, phone number, and other contact details. We may also collect information about your use of our website, such as your IP address, browser type, and pages visited.
                <br/>
                <span> Use of Personal Information</span>
                We may use your personal information to communicate with you about our services, to process your requests, and to improve our website and services. We may also use your personal information to send you newsletters, marketing materials, and other information that may be of interest to you.
                <br/>
                <span>Sharing of Personal Information</span>
                We do not share your personal information with third parties, except as required by law or as necessary to provide our services to you. We may share your personal information with our partners and service providers who help us deliver our services and improve our website.
                <br/>
                <span>Security of Personal Information</span>
                We take the security of your personal information seriously and have implemented industry-standard measures to protect it. However, no data transmission over the Internet or storage system can be guaranteed to be 100% secure. Therefore, we cannot guarantee the security of your personal information.
                <br/>
                <span>Cookies and Other Technologies</span>
                We use cookies and other technologies to collect information about your use of our website. Cookies are small text files that are stored on your device when you visit our website. We may use cookies to remember your preferences, to personalize your experience, and to improve our website and services.
                <br/>
                <span>Your Choices</span>
                You have the right to opt-out of receiving marketing communications from us. You can also request that we delete your personal information from our records. However, we may retain certain information as required by law or for legitimate business purposes.
                <br/>
                <span>Changes to this Privacy Policy</span>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes to this Privacy Policy by posting a notice on our website or by sending you an email.
                <br/>
                <span>Contact Us</span>
                If you have any questions or concerns about this Privacy Policy or our practices, please contact us at admin@webalar.in
                
              </p>
          </div>
        </div>
      </div>

      <Contact/>
    </div>

  );
}

export default Privacy;
