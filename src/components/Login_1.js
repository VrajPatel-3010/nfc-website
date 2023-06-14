import React, { useState } from "react";

const Contact = ({ data }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container mt-3">
      <section id="contact">
        <div className="row section-head text-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <p className="legin">Sign Up</p>
          </div>
        </div>
        <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
        </div>
          <div className="col-xl-6 col-lg-4 col-md-4 col-sm-12">
              <form>
                <fieldset>
                  <div>
                    <label htmlFor="contactSubject">Email<span className="required">*</span></label>
                    <input
                      type="text"
                      defaultValue=""
                      value={email}
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Password</label>
                    <input
                      type="text"
                      defaultValue=""
                      value={password}
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Something Went Wrong !</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
        </div>
         </div>
         
        <div className="row">
          <div className="text-center">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
