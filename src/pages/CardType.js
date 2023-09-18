import React, { useState, useEffect } from "react";
import "../Service.css";
import { TextField, Button, Select, Stack, MenuItem, InputLabel } from '@mui/material';
import AuthService from "../services/auth.service";
import service from "../services/service";
import { LoadingButton } from '@mui/lab';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

export default function CardType() {
  const navigate = useNavigate();
  const user = AuthService.getCurrentUser();
  let loginId = 0
  if (user) {
    loginId = user.id;
  }
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false)
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  const [cardType, setCardType] = useState(0)
  const [isLogoAdded, setIsLogoAdded] = useState(false)
  const [isFobAdded, setIsFobAdded] = useState(false)
  const [isSmartBtnAdded, setIsSmartBtnAdded] = useState(false)
  const [price, setPrice] = useState(0)
  const [updateFlag, setUpdateFlag] = useState(false)
  const [id, setId] = useState()

  useEffect(() => {
    service.getSpecificCardInfo(loginId).then(resp => {
      if (resp.data != undefined) {
        console.log(resp.data)
        setCardType(resp.data.cardType)
        setFName(resp.data.fName)
        setLName(resp.data.lName)
        setIsLogoAdded(resp.data.isLogoAdded)
        setId(resp.data.id)
        setUpdateFlag(true)
        setIsFobAdded(resp.data.isFobAdded)
        setIsSmartBtnAdded(resp.data.isSmartBtnAdded)

        if (resp.data.isLogoAdded) {
          $("#logoAdd").prop("checked", true);
        }
        if (resp.data.isFobAdded) {
          $("#fobAdded").prop("checked", true);
        }
        if (resp.data.isSmartBtnAdded) {
          $("#btnAdded").prop("checked", true);
        }
      }
    })
  }, []);


  function handleSubmit(event) {
    event.preventDefault();

    if (cardType == 0) {
      alert('Please select the Card !')
      return
    }
    if (isLogoAdded) {
      if (selectedFile == null || selectedFile.length == 0) {
        alert('Invalid Form, Attachment can not be empty')
        return
      }
    }
    //Total Price Calculation
    let amount = 0
    if (cardType > 0) {
      amount = amount + 69
    }
    if (isLogoAdded) {
      amount = amount + 30
    }
    if (isFobAdded) {
      amount = amount + 10
    }
    if (isSmartBtnAdded) {
      amount = amount + 10
    }

    setPrice(amount)
    const formData = new FormData();
    if (isLogoAdded) {
      formData.append('files', selectedFile);
    }
    formData.append("fName", fName)
    formData.append("lName", lName)
    formData.append("companyName", companyName)
    formData.append("cardType", cardType)
    formData.append("isLogoAdded", isLogoAdded)
    formData.append("loginId", loginId)
    formData.append("price", amount)
    formData.append("isFobAdded", isFobAdded)
    formData.append("isSmartBtnAdded", isSmartBtnAdded)

    const confirmBox = window.confirm("Are you sure you confirm selected cards ?")
    if (confirmBox === true) {
      if (updateFlag) {
        formData.append("id", id)
      }
      service.confirmCard(formData).then(
        (response) => {
          setMessage("Card Updated Successfully ! Please procees for Checkout !");
          setSuccessful(true);
          navigate('/dashboard/paymentPage');
          $(window).scrollTop(0);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage("Error while updating Card details !");
        }
      );
    }
  }

  return (
    <div id="cardTypeDiv">
      <div className="container">
        <div className="tab-pane fade active show" id="nav-classic-matBlack">
          <div className="dgcard" onClick={() => { setCardType(1); }}>
            <div id="" className="front card-container" style={{ background: 'url("/static/illustrations/matblack.png")' }}>
              {cardType == 1 ? <span className="css-1asb75j"><h5>  &nbsp;✓</h5></span> : ""}
              <div className="digiTechHub-logo-specific digiTechHub-logo-bg  front" style={{ display: 'none' }} />
              <div className="gradient-text gold" style={{ color: 'linear-gradient(to right bottom, rgb(247, 213, 126) 0%, rgb(231, 200, 83) 100%)', WebkitBackgroundClip: 'text' }} data-gradient-text-deg="200deg" data-gradient-text-range="f7d57e,  e7c853">
                {companyName ? <><span className="card-label-fname name-label" id="card-label-fname_2745">{fName} {lName}</span>
                  <span className="card-label-cname name-label" id="card-label-lname_2745">{companyName}</span>
                </> : <><span className="card-label-fname name-label" id="card-label-fname_2745">{fName}</span>
                  <span className="card-label-lname name-label" id="card-label-lname_2745">{lName}</span>
                  <span className="card-label-cname name-label" id="card-label-cname_2745" />
                </>}
              </div>
            </div>
          </div>
          <div className="row text-center card-title-price">
            <div className="col-sm-12">
              <span className="card-product-title">Gold Foil on Matte Black</span>
            </div>
            <div className="col-sm-12">
              <span className="card-product-price font-weight-bold">$79</span>
            </div>
          </div>
        </div>
        <div className="tab-pane fade active show" id="nav-classic-ceramicWhite">
          <div className="dgcard" onClick={() => { setCardType(2); }}>
            <div id="" className="front card-container" style={{ background: 'url("/static/illustrations/white.png")' }}>
              {cardType == 2 ? <span className="css-1asb75j"><h5>  &nbsp;✓</h5></span> : ""}
              <div className="digiTechHub-logo-specific digiTechHub-logo-bg  front" style={{ display: 'none' }} />
              <div className="gradient-text gold" style={{ color: 'linear-gradient(to right bottom, rgb(247, 213, 126) 0%, rgb(231, 200, 83) 100%)', WebkitBackgroundClip: 'text' }} data-gradient-text-deg="200deg" data-gradient-text-range="f7d57e,  e7c853">
                {companyName ? <><span className="card-label-fname name-label" id="card-label-fname_2745">{fName} {lName}</span>
                  <span className="card-label-cname name-label" id="card-label-lname_2745">{companyName}</span>
                </> : <><span className="card-label-fname name-label" id="card-label-fname_2745">{fName}</span>
                  <span className="card-label-lname name-label" id="card-label-lname_2745">{lName}</span>
                  <span className="card-label-cname name-label" id="card-label-cname_2745" />
                </>}

              </div>
            </div>
          </div>
          <div className="row text-center card-title-price">
            <div className="col-sm-12">
              <span className="card-product-title">Gold Foil on Ceramic White</span>
            </div>
            <div className="col-sm-12">
              <span className="card-product-price font-weight-bold">$79</span>
            </div>
          </div>
        </div>
        <div className="tab-pane fade active show" id="nav-classic-matBlack">
          <div className="dgcard" onClick={() => { setCardType(3); }}>
            <div id="" className="front card-container" style={{ background: 'url("/static/illustrations/matblack.png")' }}>
              {cardType == 3 ? <span className="css-1asb75j"><h5>  &nbsp;✓</h5></span> : ""}
              <div className="digiTechHub-logo-specific digiTechHub-logo-bg  front" style={{ display: 'none' }} />
              <div className="gradient-text silver" style={{ color: 'linear-gradient(to right bottom, rgb(247, 213, 126) 0%, rgb(231, 200, 83) 100%)', WebkitBackgroundClip: 'text' }} data-gradient-text-deg="200deg" data-gradient-text-range="f7d57e,  e7c853">
                {companyName ? <><span className="card-label-fname name-label" id="card-label-fname_2745">{fName} {lName}</span>
                  <span className="card-label-cname name-label" id="card-label-lname_2745">{companyName}</span>
                </> : <><span className="card-label-fname name-label" id="card-label-fname_2745">{fName}</span>
                  <span className="card-label-lname name-label" id="card-label-lname_2745">{lName}</span>
                  <span className="card-label-cname name-label" id="card-label-cname_2745" />
                </>}
              </div>
            </div>
          </div>
          <div className="row text-center card-title-price">
            <div className="col-sm-12">
              <span className="card-product-title">Silver Foil on Matte Black</span>
            </div>
            <div className="col-sm-12">
              <span className="card-product-price font-weight-bold">$79</span>
            </div>
          </div>
        </div>
        <div className='p-3' id="contactUs">
          <div className='text-center'>
            {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Contact Us
        </Typography> */}
          </div>
          <form onSubmit={handleSubmit} className="mt-5" id="creatBotForm">
            <Stack spacing={3} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="First Name"
                onChange={e => setFName(e.target.value)}
                value={fName}
                fullWidth
              />
              <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="Last Name"
                onChange={e => setLName(e.target.value)}
                value={lName}
                fullWidth
              />
              <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="Company Name"
                onChange={e => setCompanyName(e.target.value)}
                value={companyName}
                fullWidth
              />

            </Stack>
            <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
              <div className="row">
                <div className="col-8">
                  <div className="cb-container" style={{ marginBottom: '0px' }}>
                    <div className="custom-design-checkbox__image image">
                      <img src="/static/illustrations/yourLogo.png" alt="service" />
                    </div>
                    <div className="custom-design-checkbox__copy copy">
                      <div className="custom-design-checkbox__h custom-design-header">Add Logo</div>
                    </div>
                    <div className="form-group checkbox p-1">
                      <input type="checkbox" id="logoAdd" onClick={(event) => { if (event.target.checked) { setIsLogoAdded(true); } else { setIsLogoAdded(false); } }} />
                      <div className="custom-design-checkbox__price price">+$30</div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="fu-container" id="digiTechHub_custom_design_fileuploadcontainer_9811" style={{ display: 'block' }}>
                    <div className="custom-design spare-card file-upload">
                      <label class="custom-file-upload">
                        <input
                          type="file"
                          id="attachment"
                          name="attachment"
                          onChange={(e) => setSelectedFile(e.target.files[0])} />
                        Select File
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Stack>
            <Stack spacing={1} direction="row" sx={{ marginBottom: 4 }}>
              <div className="row">
                <div className="col-6">
                  <div className="cb-container" style={{ marginBottom: '0px' }}>
                    <div className="custom-design-checkbox__image image">
                      <img src="/static/illustrations/yourLogo.png" alt="service" />
                    </div>
                    <div className="custom-design-checkbox__copy copy">
                      <div className="custom-design-checkbox__h custom-design-header">NFC Key fob</div>
                    </div>
                    <div className="form-group checkbox p-1">
                      <input type="checkbox" id="fobAdded" onClick={(event) => { if (event.target.checked) { setIsFobAdded(true); } else { setIsFobAdded(false); } }} />
                      <div className="custom-design-checkbox__price price">+$10</div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cb-container" style={{ marginBottom: '0px' }}>
                    <div className="custom-design-checkbox__image image">
                      <img src="/static/illustrations/yourLogo.png" alt="service" />
                    </div>
                    <div className="custom-design-checkbox__copy copy">
                      <div className="custom-design-checkbox__h custom-design-header">NFC smart button</div>
                    </div>
                    <div className="form-group checkbox p-1">
                      <input type="checkbox" id="btnAdded" onClick={(event) => { if (event.target.checked) { setIsSmartBtnAdded(true); } else { setIsSmartBtnAdded(false); } }} />
                      <div className="custom-design-checkbox__price price">+$10</div>
                    </div>
                  </div>
                </div>
              </div>
            </Stack>
            <div className='text-center'>
              <LoadingButton size="large" type="submit" variant="contained" >
                Confirm Card
              </LoadingButton>
            </div>
            <br></br> <br></br>
            {message && (
              <div>
                <div
                  className={successful ? "alert alert-success" : "alert alert-danger"}
                  role="alert">
                  {message}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
