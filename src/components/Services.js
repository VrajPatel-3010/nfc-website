import React from "react";
import Card from "./Card";
import "../Service.css";
import CarouselC from '../components/CarouselC'
import OurServices from '../components/OurServices'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Iconify from '../components/Iconify';

function Services() {
  return (
    <>
      <div className="mt-4 text-center">
        <h2 className="homepageLabel">One Card,Endless Possibilities</h2>
        <CarouselC />
      </div>

      <div className="mt-4 text-center">
        <h2 className="homepageLabel">Our Services</h2>
        <OurServices />
      </div>
      
      <div>
      <section>
        <MDBContainer className="py-5 h-100 w-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="12" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem', alignItems: 'inherit' }}>
                <MDBRow className="g-0" >
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBTypography className="mt-5"></MDBTypography>
                  <hr className="mt-0 mb-4" />

                  <MDBTypography tag="h4" style={{color:"black"}} className="mt-5">What we provide ?</MDBTypography>
                  </MDBCol>
                  
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#DF3E30" width={40} height={50} />  Free Domain Name</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#DF3E30" width={40} height={50} /> Free Hosting</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#DF3E30" width={40} height={50} /> Customised Home Page</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#DF3E30" width={40} height={50} /> Secured Payment Gateway</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#DF3E30" width={40} height={50} /> IT Support 24*7</MDBTypography>
                      <hr className="mt-0 mb-4" />
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
    
      <div className="container">
        <div className="row row-collapse align-center row-divided hide-for-medium" style={{ maxWidth: '100%' }} id="row-1706145131">
          <div id="col-834185278" className="col medium-5 small-5 large-3">
            <div className="col-inner text-center">
              <div className="ux-logo has-hover align-middle ux_logo inline-block" style={{ maxWidth: '100%!important', width: '115px!important' }}><div className="ux-logo-link block image-" title href style={{ padding: '15px' }}>
                <img style={{ display: "inline", height: "85px" }} src="/static/icons/never_run_out2-web.webp" title alt="" className="ux-logo-image block" /></div></div>
              <h3><span style={{ fontSize: '100%', color: '#333333' }}><strong>Unlimited Sharing</strong></span></h3>
              <p><span style={{ fontSize: '100%', color: '#333333' }}>Never run out of business cards again</span></p>
            </div>
          </div>
          <div id="col-124884142" className="col medium-5 small-5 large-3">
            <div className="col-inner text-center">
              <div className="ux-logo has-hover align-middle ux_logo inline-block" style={{ maxWidth: '100%!important', width: '115px!important' }}><div className="ux-logo-link block image-" title href style={{ padding: '15px' }}>
                <img style={{ display: "inline", height: "85px" }} src="/static/icons/no_app2-web.webp" title alt="" className="ux-logo-image block" /></div></div>
              <h3><span style={{ fontSize: '100%', color: '#333333' }}><strong>No App!</strong></span></h3>
              <p><span style={{ fontSize: '100%', color: '#333333' }}>Don’t need an app to work</span></p>
            </div>
          </div>
          <div id="col-1202033347" className="col medium-5 small-5 large-3">
            <div className="col-inner text-center">
              <div className="ux-logo has-hover align-middle ux_logo inline-block" style={{ maxWidth: '100%!important', width: '115px!important' }}><div className="ux-logo-link block image-" title href style={{ padding: '15px' }}>
                <img style={{ display: "inline", height: "85px" }} src="/static/icons/digital_hub-black-web.webp" title alt="" className="ux-logo-image block" /></div></div>
              <h3><span style={{ fontSize: '100%', color: '#333333' }}><strong>My Card</strong></span></h3>
              <p><span style={{ fontSize: '100%', color: '#333333' }}>Your own custom link <em>mycard.me/yourname</em></span></p>
            </div>
          </div>
          <div id="col-306763940" className="col medium-5 small-5 large-3">
            <div className="col-inner text-center">
              <div className="ux-logo has-hover align-middle ux_logo inline-block" style={{ maxWidth: '100%!important', width: '115px!important' }}><div className="ux-logo-link block image-" title href style={{ padding: '15px' }}>
                <img style={{ display: "inline", height: '85px' }} src="/static/icons/update_onthego2-web.webp" title alt="" className="ux-logo-image block" /></div></div>
              <h3><span style={{ fontSize: '100%', color: '#333333' }}><strong>Update Your Info.</strong></span></h3>
              <p><span style={{ fontSize: '100%', color: '#333333' }}>Edit your information anytime</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;