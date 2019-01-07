// importing react
import React from "react";
// importing redux in
import { connect } from "react-redux";
import "./single-email.css";

export function SingleEmail(props) {
  return (
    <div className="single-email">
      <div className="single-email-headers">
        <h2 className="single-email-title">{props.title}</h2>
        <div className="single-email-from">From: {props.from}</div>
        <div className="single-email-to">To: {props.to}</div>
      </div>
      <div className="single-email-content">{props.content}</div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const folderId = props.match.params.folderId;
  const emailId = props.match.params.emailId;
  const email = state[folderId].emails[emailId];
  return Object.assign({}, email, {
    folderId,
    emailId
  });
};

export default connect(mapStateToProps)(SingleEmail);
