import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const login = (<form action="#" onSubmit={handleSubmit}>
    <input 
    type="password"
    placeholder="Password" />
    <input
    type="submit" />
    </form>);

  const contactInfo = (
    <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
    </ul>
  ); 

  let h1Text;
  if (authorized == true) {
    h1Text = 'Contact';
  }
  else {
    h1Text = 'Enter the Password';
  }

  return (
      <div id="authorization">
        <h1>{h1Text}</h1>
        {authorized ? contactInfo : login}
      </div>
  );
}

export default Contact;
