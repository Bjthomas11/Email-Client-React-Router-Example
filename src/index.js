// importing react in
import React from "react";
// importing React dom (virtual dom) in
import ReactDOM from "react-dom";
// importing createstore (holds state)
import { createStore } from "redux";
// importing provider component making the store (holds state) open to all components
import { Provider } from "react-redux";
// import root component
import EmailApp from "./components/emailApp";
import "./index.css";

const initalState = {
  inbox: {
    id: "inbox",
    name: "Inbox",
    emails: {
      0: {
        id: 0,
        from: "email@test.com",
        to: "email@gmail.com",
        title: "GET THE GRIND ON!!!",
        content:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ab modi, architecto, ipsa voluptas sunt est voluptatum iusto illum veritatis eius deleniti aperiam recusandae molestiae nobis rerum excepturi? Sequi, ex!"
      },
      1: {
        id: 1,
        from: "email@test.com",
        to: "email@gmail.com",
        title: "YOU WILL BECOME A SOFTWARE DEVELOPER",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae adipisci libero eligendi at quis, culpa vitae tempora non. Natus accusamus libero accusantium totam expedita, dolorum ex porro beatae neque?"
      }
    }
  },
  spam: {
    id: "spam",
    name: "Spam",
    emails: {
      0: {
        id: 0,
        from: "email@test.com",
        to: "email@gmail.com",
        title: "YOU WILL DO THIS BRIAN",
        content: "LETS GO!!!"
      },
      1: {
        id: 1,
        from: "email@test.com",
        to: "email@gmail.com",
        title: "PUT IN THE WORK/TIME",
        content: "STOP COMPLAINING AND WORK WORK WORK WORK"
      }
    }
  }
};

const store = createStore(state => state, initalState);

ReactDOM.render(
  <Provider store={store}>
    <EmailApp />
  </Provider>,
  document.querySelector("#root")
);
