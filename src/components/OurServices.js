import React from "react";
import "../Service.css";

function OurServices() {
  return (
    <div>
      <section className="serviceCard">
        <div className="card-texts">
          <div className="text-center" style={{display : "inline-block"}}>
            <img src="/static/mock-images/homepage/card.svg" alt="service" className="card__icon" />
          </div>
          <h2 className="card__title">Digital Card</h2>
          <p className="card__paragraph">Still using old boring visiting cards? Now its time to change. Use our Online Visiting Card service and GO DIGITAL.</p>
        </div>
      </section>

      <section className="serviceCard">
        <div className="card-texts">
        <div className="text-center" style={{display : "inline-block"}}>
            <img src="/static/mock-images/homepage/website.svg" alt="service" className="card__icon" />
          </div>
          <h2 className="card__title">Website Design/Development</h2>
          <p className="card__paragraph">Design your own Business/Professional website.</p>
        </div>
      </section>

      <section className="serviceCard">
        <div className="card-texts">
        <div className="text-center" style={{display : "inline-block"}}>
            <img src="/static/mock-images/homepage/portfolio.svg" alt="service" className="card__icon" />
          </div>
          <h2 className="card__title">Portfolio</h2>
          <p className="card__paragraph">Your identity is what sets you apart. Use Digital Card to showcase a fuller and more impressive picture of who you are—beyond your job title—for a more meaningful interaction.</p>
        </div>
      </section>
    </div>
  );
  }

export default OurServices;
