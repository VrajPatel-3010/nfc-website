import { useState } from 'react';
import { useEffect } from 'react';
import AuthService from "../services/auth.service";
import '../Portfolio6.css';
import service from "../services/service";
export default function Portfolio6({ phoneNo, withoutLogin }) {

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
    <div className="theme6">
      <div className="card6">
        <div className="header__container">
          <img src={"data:" + USERLIST.type + ";base64," + USERLIST.data} alt="illustration" className="header__img" />
        </div>
        <div className="main__container">
          <h1 className="main__heading">{fullname}</h1>
          <h3 className="main__profession">{title}</h3>
          <a
            href={url}
            className="main__link"
            target="_blank"
            rel="noreferrer"
          >
            {url}
          </a>
          <div className="main__button-wrapper">
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <button className="btn-reset btn6 btn__email">
                <img src="/static/icons/mail-icon.svg" alt="email" />
                Email
              </button>
            </a>
            <a onClick={() => downloadTxtFile(CreateVCard())} rel="noreferrer"><button class="btn-reset btn6 btn__hh"><img src="/static/icons/download.svg" width="17px"></img>Save Contact</button></a>
          </div>
          <div className="main__content">
            <h2 className="content__title">About</h2>
            <p className="content__descr">{USERLIST.title}</p>
            <p className="content__descr">{USERLIST.info}</p>

            {/* <h2 className="content__title">Interests</h2>
        <p className="content__descr">{props.interests}</p> */}
          </div>
        </div>
        <div className="footer__container">
          <ul className="list-reset footer__list">
            <li className="footer__item">
              <a aria-label="instagram">
                <img src="/static/icons/instagram-icon.svg" className="footer__img" />
              </a>
            </li>
          </ul>
        </div>
        {!withoutLogin &&
          <div className="text-center mt-5">
            <a onClick={() => AuthService.confirmTheme(USERLIST.id, phone, 5)} className="confirmation-btn">
              <div className="cta">Confirm&nbsp;Theme</div>
            </a>
          </div>
        }
      </div>
    </div>
  )
};