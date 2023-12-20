import React from "react";
import '../Portfolio4.css';
import { FaMapMarkerAlt, FaMobileAlt, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import AuthService from "../services/auth.service";
import '../Portfolio5.css';
import service from "../services/service";
function ProfileCard(props) {


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
		<>
			<div className="card-container">
				<header>
					<img src={"data:" + props.type + ";base64," + props.data} alt="ABC" />
				</header>
				<h1 className="bold-text">
					{props.name} <span className="normal-text">{props.title}</span>
				</h1>
				<h2 className="normal-text">{props.info}</h2>
				<div className="actionbar">
					<div className="text-center">
						<a onClick={() => downloadTxtFile(CreateVCard())} className="link-block-cta w-inline-block">
							<div className="cta">SAVE&nbsp;CONTACT</div>
						</a>
					</div>
				</div>
				<div className="social-container">
					<div><FaMobileAlt /> &nbsp;<a href={phoneTxt} style={{ color: "black" }}>{props.phone}</a></div>
					<div><FaWhatsapp /> <a href={"https://wa.me/"+props.whatsappNo} style={{ color: "black" }}>&nbsp;{props.whatsappNo}</a></div>
					<div><FaMailBulk /> &nbsp;<a href={mail} style={{ color: "black" }}>{props.email}</a></div>
					<div><FaMapMarkerAlt /> &nbsp;{props.address}</div>
				</div>
			</div>
			{!props.withoutLogin &&
				<div className="text-center mt-5">
					<a onClick={() => AuthService.confirmTheme(USERLIST.id, props.phone, 4)} className="confirmation-btn">
						<div className="cta">Confirm&nbsp;Theme</div>
					</a>
				</div>
			}
		</>
	);
}

export default ProfileCard;
