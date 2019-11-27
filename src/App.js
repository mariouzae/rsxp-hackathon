import React from 'react';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';

import { addSchool, findAll, findByEmail } from './database/schools';
import { getAll, findByName } from './database/companies';
import { addBooking, findBookingBySchool, findBookingByCompany } from './database/bookings';

// Firebase initialization
firebase.initializeApp(firebaseConfig);

function App() {  

  getAll()
  .then((company) => {
    console.log("Companies: ", company);
  })
  

  return (
    <div className="App">
      <h1>RSXP</h1>
    </div>
  );
}

export default App;
