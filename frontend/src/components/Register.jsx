import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className="min-h-screen flex items-center justify-center bg-gray-100 p-12">

      <MDBCard className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg">
        <div className="flex flex-col items-center p-8 lg:w-1/2">
          <p className="text-center h1 font-bold mb-5">Sign up</p>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="user me-3" size="lg" />
            <MDBInput label="Your Name" id="form1" type="text" className="w-full" />
          </div>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="envelope me-3" size="lg" />
            <MDBInput label="Your Email" id="form2" type="email" className="w-full" />
          </div>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="lock me-3" size="lg" />
            <MDBInput label="Password" id="form3" type="password" className="w-full" />
          </div>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="key me-3" size="lg" />
            <MDBInput label="Repeat your password" id="form4" type="password" className="w-full" />
          </div>

          <div className="mb-4 w-full">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="  Subscribe to our newsletter" />
          </div>

          <MDBBtn className="mb-4" size="lg">Register</MDBBtn>
        </div>

        <div className="flex items-center justify-center bg-gray-200 p-8 lg:w-1/2 rounded-r-2xl">
          <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid className="w-full h-full object-cover" />
        </div>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;
