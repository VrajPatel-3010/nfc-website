import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../CarouselC.css";

function CarouselC() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        draggable={true}
        autoPlay={true}
      >
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-1">
              <img src="/static/mock-images/homepage/unlimited.svg" alt="service" />
            </span>
            <h4>Share Unlimited</h4>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-2">
            <img src="/static/mock-images/homepage/link.svg" alt="service" />
            </span>
            <h4>Website & Social Links</h4>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-3">
            <img src="/static/mock-images/homepage/update.svg" alt="service" />
            </span>
            <h4>Easy To Update</h4>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-4">
            <img src="/static/mock-images/homepage/payment.svg" alt="service" />
            </span>
            <h4>Payment Section</h4>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-5">
            <img src="/static/mock-images/homepage/contact.svg" alt="service" />
            </span>
            <h4>Add to Contacts</h4>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-6">
            <img src="/static/mock-images/homepage/gps.svg" alt="service" />
            </span>
            <h4>One CLick Navigate</h4>
          </div>
        </div>


      </Carousel>
    </div>
  );
}

export default CarouselC;
