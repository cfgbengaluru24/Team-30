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
          <p className="text-center h1 font-bold mb-5">BUY NOW</p>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="user me-3" size="lg" />
            <MDBInput label="Your Name" id="form1" type="text" className="w-full" />
          </div>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="envelope me-3" size="lg" />
            <MDBInput label="Your Email" id="form2" type="email" className="w-full" />
          </div>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="phone me-3" size="lg" />
            <MDBInput label="Phone Number" id="formPhone" type="tel" className="w-full" />
          </div>

        <div className="w-full mb-4">
            <label htmlFor="chairType" className="font-semibold mb-2 block">Pellet Plant: </label>
            <div className="flex items-center">
              <MDBIcon fas icon="chair me-3" size="lg" />
              <select id="chairType" className="form-select w-full">
                <option value="0" disabled selected>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
          </div>

          
        

        <div className="w-full mb-4">
            <label htmlFor="chairType" className="font-semibold mb-2 block">Chair:</label>
            <div className="flex items-center">
              <MDBIcon fas icon="chair me-3" size="lg" />
              <select id="chairType" className="form-select w-full">
                <option value="0" disabled selected>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
          </div>

          
          <div className="w-full mb-4">
            <label htmlFor="chairType" className="font-semibold mb-2 block">Elephants: </label>
            <div className="flex items-center">
              <MDBIcon fas icon="chair me-3" size="lg" />
              <select id="chairType" className="form-select w-full">
                <option value="0" disabled selected>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
          </div>

          <div className="w-full mb-4">
            <label htmlFor="chairType" className="font-semibold mb-2 block">Tables: </label>
            <div className="flex items-center">
              <MDBIcon fas icon="chair me-3" size="lg" />
              <select id="chairType" className="form-select w-full">
                <option value="0" disabled selected>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
          </div>
          <div className="w-full mb-4">
            <label htmlFor="chairType" className="font-semibold mb-2 block">Basket: </label>
            <div className="flex items-center">
              <MDBIcon fas icon="chair me-3" size="lg" />
              <select id="chairType" className="form-select w-full">
                <option value="0" disabled selected>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
          </div>
          <div className="w-full mb-4">
            <label htmlFor="chairType" className="font-semibold mb-2 block">Sofa Sets:</label>
            <div className="flex items-center">
              <MDBIcon fas icon="chair me-3" size="lg" />
              <select id="chairType" className="form-select w-full">
                <option value="0" disabled selected>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
          </div>
          
          
          
          

          <MDBBtn className="mb-4" size="lg">Submit Order</MDBBtn>
        </div>

        <div className="flex items-center justify-center bg-gray-200 p-8 lg:w-1/2 rounded-r-2xl">
          <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid className="w-full h-full object-cover" />
        </div>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;