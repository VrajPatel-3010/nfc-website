import { useState } from 'react';
import { useEffect } from 'react';
import AuthService from "../services/auth.service";
import '../Portfolio7.css';
import service from "../services/service";
import React from "react"
// import sun from "../images/sun.png"
import fb from "../images/facebook.png"
import gh from "../images/github.png"
import ig from "../images/instagram.png"
import tw from "../images/twitter.png"
import emailicon from "../images/mail.png"
import linkedinicon from "../images/linkedin.png"
import moon from "../images/moon.png"
export default function Portfolio7({ phoneNo, withoutLogin }) {

  const [theme, setTheme] = React.useState("light");

  function Toggle() {
    setTheme(prevTheme => {
      if (prevTheme === "light") {
        return "dark"
      } else {
        return "light"
      }
    })
    console.log("tog")
  }

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
  let imgSrc = "data:" + USERLIST.type + ";base64," + USERLIST.data;
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
    <main className={theme}>
      <div className="container7">
        {/* <img className="sun-moon" src={(theme === "light") ? sun : moon} onClick={Toggle} /> */}
        <div className="profile-pic7"><img src={imgSrc}></img></div>
        <div className="details7">
          <h2>{USERLIST.firstName + " " + USERLIST.lastName}</h2>
          <h4>{title}</h4>
          <p><a>{USERLIST.org}</a></p>
          <div className="contact-btns">
            <a href={`mailto:${email}`} target="blank">
              <button className="email">
                <img src={emailicon}></img><span>Email</span>
              </button>
            </a>
              <a onClick={() => downloadTxtFile(CreateVCard())}>
                <button className="linkedin">
                <img src="/static/icons/digital_hub-black-web.webp" width="30px"></img><span>SAVE</span>
              </button>
              </a>
          </div>
          <div className="details-blurbs">
            <h3>About</h3>
            <p>{USERLIST.info}</p>
          </div>
        </div>
        <div className="footer7">
          <a href={USERLIST.instagram} target="__blank"><img src={ig} /></a>
          <a href={USERLIST.facebook} target="__blank"><img src={fb} /></a>
          <a href={USERLIST.twitter} target="__blank"><img src={tw} /></a>
          <a href={USERLIST.linkedin} target="__blank"><img src={linkedinicon} /></a>

        </div>    </div>
    </main>
  )
};