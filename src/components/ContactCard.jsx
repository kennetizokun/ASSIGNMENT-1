import React, { lazy } from "react";
import "../assets/ContactCard.css";

const ContactCard = (props) => (
  
    <li className="contact-card">
      <h2>{props.name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{props.job}</dd>
        <dt>Email</dt>
        <dd>{props.email}</dd>
      </dl>
    </li>
  );


export default ContactCard;
