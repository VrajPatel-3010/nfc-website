import React from "react";
import "../Service.css";
import CarouselC from '../components/CarouselC'
import OurServices from '../components/OurServices'

function Services() {
  return (
    <>
      <div className="mt-4 text-center">
        <h2 className="homepageLabel">One Card,Endless Possibilities</h2>
        <CarouselC />
      </div>

      <div className="mt-4 text-center">
        {/* <h2 className="homepageLabel">Our Services</h2> */}
        <OurServices />
      </div>
      
      <div>
      {/* <section>
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
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#8BC34A" width={40} height={50} /> Free Domain Name</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#8BC34A" width={40} height={50} /> Free Hosting</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#8BC34A" width={40} height={50} /> Customised Home Page</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#8BC34A" width={40} height={50} /> Secured Payment Gateway</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBTypography tag="h6"><Iconify icon="icons8:right-round" color="#8BC34A" width={40} height={50} /> IT Support 24*7</MDBTypography>
                      <hr className="mt-0 mb-4" />
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section> */}
    </div>
    
    </>
  );
}

export default Services;