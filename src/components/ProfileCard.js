import React from "react";
import '../Portfolio4.css';
import { FaMapMarkerAlt, FaMobileAlt, FaMailBulk, FaWhatsapp } from "react-icons/fa";

function ProfileCard(props) {
	let type = props.type
	let data = props.data
	let img = "data:" + type + ";base64," + data
	let mail = "mailto:" + props.email;
	let phone = "tel:" + props.phone;

	return (
		<div className="card-container">
			<header>
            <img src={img} alt="ABC" />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">{props.title}</span>
			</h1>
			<h2 className="normal-text">{props.info}</h2>
			<div className="social-container">
			<div><FaMobileAlt /> &nbsp;<a href={phone} style={{color:"black"}}>{props.phone}</a></div>
            <div><FaWhatsapp /> &nbsp;{props.whatsappNo}</div>
			<div> <FaMailBulk /> &nbsp;<a href={mail} style={{color:"black"}}>{props.email}</a></div>
            <div><FaMapMarkerAlt /> &nbsp;{props.address}</div>
			</div>
		</div>
	);
}

export default ProfileCard;
