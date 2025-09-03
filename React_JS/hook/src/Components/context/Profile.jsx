import React, { useContext } from 'react';
import Contact from '../Contact';
import { AppContext } from './AppContext';

function Profile() {
  const context = useContext(AppContext);
  console.log('Context:', context);

  const { phone, name } = context;

  return (
    <div>
      <h1>UseContext Hook</h1>
      <Contact />
      <h3>Phone: {phone}</h3>
      <h3>Name: {name}</h3>
    </div>
  );
}

export default Profile;
