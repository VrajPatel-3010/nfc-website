import { useState } from 'react';
import { FaMapMarkerAlt, FaMobileAlt, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { useEffect } from 'react';
import AuthService from "../services/auth.service";
import '../Portfolio3.css';
import service from "../services/service";
import { Typewriter } from 'react-simple-typewriter'
export default function Portfolio3({ phoneNo, withoutLogin }) {

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
    if (withoutLogin) {
      service.dataListByPhoneNo(phoneNo)
        .then(resp => {
          console.log(resp.data[0]);
          if (resp.data.length > 0) {
            setUSERLIST(resp.data[0])
            console.log(USERLIST);
          }
        })
    }
    else {
      service.getIdList(loginId)
        .then(resp => {
          console.log(resp.data[0]);
          if (resp.data.length > 0) {
            setUSERLIST(resp.data[0])
            console.log(USERLIST);
          }
        })
    }
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
      'TEL;TYPE=WORK,VOICE:+1 ' + phone + '\n' +
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
    <div className="theme3">
      <section className="hero-section" id="home">
        <div className="container-xl ml-2">
          <div className="profilephoto">
            <img src={"data:" + USERLIST.type + ";base64," + USERLIST.data} alt="illustration" />
          </div>
          <div className="row">
            <div className="col hero-text">
              <span>Hi, I'm</span>
              <br></br>                            <br></br>

              <div className='nameEffect'>
                <Typewriter
                  words={[fullname]}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={140}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </div>
              {/* <h1>Mohammed Salih</h1> */}
              <br></br>
              <h3>{USERLIST.title}</h3>
              <p> {USERLIST.info}</p>
              <div className="hero-btn-container" style={{ display: "initial" }}>
                <div className="text-center">
                  <a onClick={() => downloadTxtFile(CreateVCard())} className="btn primary-btn">
                    <div>SAVE&nbsp;CONTACT</div>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <div style={{ lineHeight: "2rem" }}>
              <div><FaMobileAlt /> <a href={phoneTxt} style={{ color: "black" }}>{USERLIST.phone}</a></div>
              <div><FaWhatsapp /> {USERLIST.whatsappNo}</div>
              <div><FaMailBulk /> <a href={mail} style={{ color: "black" }}>{USERLIST.email}</a></div>
              <div><FaMapMarkerAlt /> {USERLIST.address}</div>
            </div>
          </div>
        </div>
      </section>
      {!withoutLogin &&
        <div className="text-center mt-5">
          <a onClick={() => AuthService.confirmTheme(USERLIST.id, phone, 3)} className="confirmation-btn">
            <div className="cta">Confirm&nbsp;Theme</div>
          </a>
        </div>
      }
    </div>
  )
};