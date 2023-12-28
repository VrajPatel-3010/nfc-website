import { useState } from 'react';
import { FaMapMarkerAlt, FaMobileAlt, FaMailBulk, FaWhatsapp, FaLink } from "react-icons/fa";
import { useEffect } from 'react';
import AuthService from "../services/auth.service";
import '../Portfolio.css';
import service from "../services/service";

export default function Portfolio({ phoneNo, withoutLogin }) {
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
    <div className="businesscard wf-section mt-5">
      <div className="cardcontainer w-container">
        <div className="logomobile">
        </div>
        <div className="card">
          {/* <div className="logodesktop"><img src="https://storage.googleapis.com/mobilo-org-design/orgDesign/social/3VwKiRV0WFJs/images/Mobilo_LOGO_Red_NoBG_20191028_v01.png" loading="lazy" sizes="(max-width: 479px) 100vw, 100px" srcSet="https://storage.googleapis.com/mobilo-org-design/orgDesign/social/3VwKiRV0WFJs/images/Mobilo_LOGO_Red_NoBG_20191028_v01-p-500.png 500w, https://storage.googleapis.com/mobilo-org-design/orgDesign/social/3VwKiRV0WFJs/images/Mobilo_LOGO_Red_NoBG_20191028_v01-p-800.png 800w, https://storage.googleapis.com/mobilo-org-design/orgDesign/social/3VwKiRV0WFJs/images/Mobilo_LOGO_Red_NoBG_20191028_v01-p-1080.png 1080w, https://storage.googleapis.com/mobilo-org-design/orgDesign/social/3VwKiRV0WFJs/images/Mobilo_LOGO_Red_NoBG_20191028_v01.png 1314w" alt="" className="image" /></div> */}
          <div className="profilephotoTh1">
            <img src={"data:" + USERLIST.type + ";base64," + USERLIST.data} alt="illustration" />
          </div>
          <div className="text">
            <div className="text-block">{USERLIST.firstName}&nbsp;{USERLIST.lastName}</div>
            <br></br>

            <div className="text-block-2">{USERLIST.info}</div>

            <div className="text-block-3"><FaMobileAlt /> <a href={phoneTxt} style={{ color: "black" }}>{USERLIST.phone}</a></div>
            <div className="text-block-4"><FaWhatsapp /> <a href={"https://wa.me/" + USERLIST.whatsappNo} style={{ color: "black" }}>{USERLIST.whatsappNo}</a></div>
            <div className="text-block-5"><FaLink /> <a href={USERLIST.url} style={{ color: "black" }}>{USERLIST.url}</a></div>
            <div className="text-block-5"><FaMailBulk /> <a href={mail} style={{ color: "black" }}>{USERLIST.email}</a></div>
            {!(USERLIST.address == '-' || USERLIST.address == '') ?
              <div className="text-block-5"><FaMapMarkerAlt /> {USERLIST.address}</div>
              : <></>}
          </div>
        </div>
        <div className="actionbar">
          <a onClick={() => downloadTxtFile(CreateVCard())} className="link-block-cta w-inline-block">
            <div className="cta">SAVE&nbsp;CONTACT</div>
          </a>
        </div>
      </div>
      {!withoutLogin &&
        <div className="text-center">
          <a onClick={() => AuthService.confirmTheme(USERLIST.id, phone, 1)} className="confirmation-btn">
            <div className="cta">Confirm&nbsp;Theme</div>
          </a>
        </div>
      }
    </div>
  )
};