import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ece74759-47c2-4a9b-ace6-41b939cd9779");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <>
      <div className="hedt text-center py-5" id="contact">
        <h1 className="display-4 text-light font-weight-bold">CONTACT ME</h1>
      </div>

      <div className="container-fluid contact my-5">
        <div className="row">
          {/* Left Form Section */}
          <div className="col-12 col-md-6 mb-4 ">
            <form className='form' onSubmit={onSubmit} data-aos="fade-up-right" data-aos-duration="1000">
              <div className="input-box mb-3">
                <label htmlFor="fname" className="font-weight-bold">Full Name</label>
                <input type="text" className="form-control shadow-sm text-light" placeholder="Enter your name" name="name" required />
              </div>
              <div className="input-box mb-3">
                <label htmlFor="email" className="font-weight-bold">Email Address</label>
                <input type="email" className="form-control shadow-sm text-light" placeholder="Enter your email" name="email" required />
              </div>
              <div className="input-box mb-3">
                <label htmlFor="message" className="font-weight-bold">Message</label>
                <textarea name="message" className="form-control shadow-sm text-light" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn  btn-light ">Send Message</button>
            </form>
          </div>

          {/* Right Google Map Section */}
          <div className="col-12 col-md-6 ">
            <div className="embed-responsive embed-responsive-16by9" data-aos="fade-up-left" data-aos-duration="1000">
              <iframe 
                title="Google Map"
                className="embed-responsive-item rounded shadow-sm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30235.19643191656!2d73.06497811545317!3d31.511842184213034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921e4891b5552a3%3A0x3bde9421bdb83c1!2s%20%2C%20Faisalabad%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1634295592000!5m2!1sen!2sus"
                width="100%"
                height="415"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
