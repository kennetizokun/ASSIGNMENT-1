import React from "react";
import "./ContactCard.css";

function ContactCard(props) {
  return (
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
}

export default ContactCard;