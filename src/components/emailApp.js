// importing react in
import React from "react";
// importing react router from react router dom library
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
// importing sidebar component
import Sidebar from "./sidebar";
// importing singleEmail component
import SingleEmail from "./single-email";
// importing emailList component
import EmailList from "./email-list";
import "./emailApp.css";

// ROOT COMPONENT

export default function EmailApp() {
  return (
    <Router>
      <div className="email">
        <Sidebar />
        <main>
          <Switch>
            <Redirect exact from="/" to="/inbox" />
            <Route exact path="/:folderId" component={EmailList} />
            <Route exact path="/:folderId/:emailId" component={SingleEmail} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
