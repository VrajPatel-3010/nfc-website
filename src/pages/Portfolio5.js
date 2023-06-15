import { useState } from 'react';
import ProfileCard from "../components/ProfileCard";

import { useEffect } from 'react';
import AuthService from "../services/auth.service";
import '../Portfolio5.css';
import service from "../services/service";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { FaMapMarkerAlt, FaMobileAlt, FaMailBulk, FaWhatsapp } from "react-icons/fa";

export default function Portfolio5() {

  // Get the contact information from the website 
  const downloadTxtFile = vcfText => {
    const element = document.createElement("a");
    const file = new Blob([vcfText], { type: "text/vcard" });
    element.href = URL.createObjectURL(file);
    element.download = "vCard.vcf";
    document.body.appendChild(element);
    element.click();
  };
  const user = AuthService.getCurrentUser();
  let loginId = 0
  if (user) {
    loginId = user.id;
  }

  const [USERLIST, setUSERLIST] = useState({});
  useEffect(() => {
    service.getIdList(loginId)
      .then(resp => {
        console.log(resp.data[0]);
        if (resp.data.length > 0) {
          setUSERLIST(resp.data[0])
          console.log(USERLIST);
        }
      })
  }, []);

  let mail = "mailto:" + USERLIST.email;
  let phoneTxt = "tel:" + USERLIST.phone;

  let firstName = USERLIST.firstName;
  let lastName = USERLIST.lastName;
  let email = USERLIST.email;
  let data = USERLIST.data;
  let type = USERLIST.type;
  let phone = USERLIST.phone;
  let address = USERLIST.address;
  let title = USERLIST.title;
  let org = USERLIST.org;
  let url = USERLIST.url;
  let fullname = firstName + " " + lastName
  const CreateVCard = () => {
    let vCard = 'BEGIN:VCARD\n' +
      'VERSION:4.0\n' +
      'FN:' + firstName + lastName + '\n' +
      'N:' + lastName + ';' + firstName + ';\n' +
      // 'GENDER:M\n'+
      // 'UID:69531f4a-c34d-4a1e-8922-bd38a9476a53\n'+
      // 'BDAY:19850101\n'+
      // 'EMAIL;type=HOME:info@abchomeautomation.com\n'+
      'EMAIL;type=WORK:' + email + '\n' +
      'PHOTO;ENCODING=b;MEDIATYPE=image/' + type + ':' + data + '\n' +
      'TEL;TYPE=WORK,VOICE:+1 ' +phone+'\n' +
      // 'TEL;VALUE=uri;TYPE="voice,home":tel:+1 (877) 879-3222\n' +
      // 'TEL;VALUE=uri;TYPE="voice,work":tel:+1 (877) 879-3222\n' +
      'ADR;TYPE=WORK;LABEL="Work Address":;;' + address + '\n' +
      'TITLE:' + title + '\n' +
      // 'ROLE:Director\n' +
      'ORG:' + org + '\n' +
      'URL:' + url + '\n' +
      // 'URL;type=WORK:https://acme-corporation/enesser\n' +
      // 'NOTE:Notes on Satwinder\n' +
      // 'X-SOCIALPROFILE;TYPE=facebook:https://...\n' +
      // 'X-SOCIALPROFILE;TYPE=linkedIn:https://...\n' +
      // 'X-SOCIALPROFILE;TYPE=twitter:https://...\n' +
      // 'X-SOCIALPROFILE;TYPE=flickr:https://...\n' +
      // 'X-SOCIALPROFILE;TYPE=custom:https://...\n' +
      // 'REV:2023-05-22T19:11:12.802Z\n' +
      'END:VCARD';
    return vCard;
  };

  return (
    <div className="theme5">
      <div class="page shadow">
        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img src={"data:" + USERLIST.type + ";base64," + USERLIST.data} alt="illustration"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                  <br />
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2 style={{ color: "#4581be" }}>{fullname}</h2>
                  <p>{USERLIST.title}</p>
                  <p>{USERLIST.info}</p>
                </div>

                <hr />
                  <MDBBtn onClick={() => downloadTxtFile(CreateVCard())} style={{ backgroundColor: "#4581be" }}>
                    <div>SAVE&nbsp;CONTACT</div>
                  </MDBBtn>

                <MDBContainer>
                  <MDBRow>
                    {/* <MDBCol sm={2} lg={2} md={2}>
<MDBBtn onClick={() => downloadTxtFile(CreateVCard())} style={{ backgroundColor: "#4581be" }}>
                    <div>SAVE&nbsp;CONTACT</div>
                  </MDBBtn>                    </MDBCol> */}
                    <>
                      <p class="bio">
                        <div><FaMobileAlt /> &nbsp;<a href={phoneTxt} style={{ color: "grey" }}>{USERLIST.phone}</a></div>
                        <div><FaWhatsapp /> &nbsp;{USERLIST.whatsappNo}</div>
                        <div> <FaMailBulk /> &nbsp;<a href={mail} style={{ color: "grey" }}>{USERLIST.email}</a></div>
                        <div><FaMapMarkerAlt /> &nbsp;{USERLIST.address}</div>
                      </p>
                    </>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  )
};