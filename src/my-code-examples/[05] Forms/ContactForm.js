import React from "react";
import "./ContactForm.module.css";
//import validator from "./validation";
//import { VALID, INVALID, UNDETERMINED } from "./validationStatuses";

function App() {
  function fakeSendingToServer(name, email, message) {
    console.log("Send to server:", [name, email, message]);
  }

  return <ContactForm sendToServer={fakeSendingToServer} />;
}

function ContactForm({ sendToServer }) {
  return (
    <>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email address</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea type="text" name="message" />
        </div>
        <div>
          <button type="submit">OK</button>
        </div>
      </form>
    </>
  );
}

export default App;

// =========== UNCONTROLLED ======================

//let nameInput = createRef();

//const [nameValid, setNameValid] = useState(UNDETERMINED);

// var name = nameInput.current.value;
// const newNameValid = validator.validateName(name) ? VALID : INVALID;
// setNameValid(newNameValid);

// if (newNameValid === VALID && newEmailValid === VALID && newMessageValid === VALID) {
//   sendToServer(name, email, message);
//   nameInput.current.value = "";
//   emailInput.current.value = "";
//   messageInput.current.value = "";
// }

// =========== CONTROLLED ======================

// const submitAllowed = nameValid === VALID && emailValid === VALID && messageValid === VALID;
// console.log(nameValid, emailValid, messageValid, submitAllowed);

// function handleChange(event) {
//   switch (event.target.name) {
//     case "name":
//       setNameValid(UNDETERMINED);
//       setName(event.target.value);
//       break;
//     case "email":
//       setEmailValid(UNDETERMINED);
//       setEmail(event.target.value);
//       break;
//     case "message":
//       setMessageValid(UNDETERMINED);
//       setMessage(event.target.value);
//       break;
//     default:
//       break;
//   }
// }

// function handleBlur(event) {
//   switch (event.target.name) {
//     case "name":
//       setNameValid(validator.validateName(name) ? VALID : INVALID);
//       break;
//     case "email":
//       setEmailValid(validator.validateEmail(email) ? VALID : INVALID);
//       break;
//     case "message":
//       setMessageValid(validator.validateMessage(message) ? VALID : INVALID);
//       break;
//     default:
//       break;
//   }
// }