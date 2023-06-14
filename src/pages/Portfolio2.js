import { useState } from 'react';
import { FaMapMarkerAlt, FaMobileAlt, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { useEffect } from 'react';
import AuthService from "../services/auth.service";
import '../Portfolio2.css';
import service from "../services/service";

export default function Portfolio() {

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

  const CreateVCard = () => {
    let vCard = 'BEGIN:VCARD\n' +
      'VERSION:4.0\n' +
      'FN:' +  firstName + lastName  + '\n' +
      'N:' +  lastName +';'+ firstName+ ';\n' +
      // 'GENDER:M\n'+
      // 'UID:69531f4a-c34d-4a1e-8922-bd38a9476a53\n'+
      // 'BDAY:19850101\n'+
      // 'EMAIL;type=HOME:info@abchomeautomation.com\n'+
      'EMAIL;type=WORK:' +  email  + '\n' +
      'PHOTO;ENCODING=b;MEDIATYPE=image/'+type+':'+data +'\n' +
      'TEL;VALUE=uri;TYPE="voice,cell":tel:+1' +phone+'\n' +
      // 'TEL;VALUE=uri;TYPE="voice,home":tel:+1 (877) 879-3222\n' +
      // 'TEL;VALUE=uri;TYPE="voice,work":tel:+1 (877) 879-3222\n' +
      'ADR;TYPE=WORK;LABEL="Work Address":;;'+address+'\n' +
      'TITLE:'+title+'\n' +
      // 'ROLE:Director\n' +
      'ORG:'+org+'\n' +
      'URL:'+url+'\n' +
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
    <div className="theme2">
    <div className="Info">
      <img src={"data:" + USERLIST.type + ";base64," + USERLIST.data} alt="illustration" className="--info-image"/>
      <h1>{USERLIST.firstName}&nbsp;{USERLIST.lastName}</h1>
      <h2>{USERLIST.title}</h2>
      <p>
        <a
          rel="noreferrer"
          className="--info-portfolio">
            {USERLIST.info}
        </a>
      </p>
      <div className="--info-buttons">
        <button className="--info-email">
        <a href={mail} style={{ color: "black" }}><i class="fa-solid fa-envelope"></i> EMAIL
          </a>
        </button>
        <button className="--info-linkedin">
          <a onClick={() => downloadTxtFile(CreateVCard())}>
            <div>SAVE&nbsp;CONTACT</div>
          </a>
        </button>
      </div>
    </div>
    <div className="About">
      <h2></h2>
            <div><FaMobileAlt /> <a href={phoneTxt} style={{color:"white"}}>{USERLIST.phone}</a></div>
            <div><FaWhatsapp /> {USERLIST.whatsappNo}</div>
            <div><FaMailBulk /> <a href={mail} style={{ color: "white" }}>{USERLIST.email}</a></div>
            <div><FaMapMarkerAlt /> {USERLIST.address}</div>
    </div>
    <div className="Footer">
      <ul>
        <li className="twitter">
          <a
            href="https://twitter.com/sexy_gravy"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
};