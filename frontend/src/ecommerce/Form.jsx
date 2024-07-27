import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { PostOrders } from '../controllers/PostRequest';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pelletPlant: '',
    chair: '',
    elephants: '',
    tables: '',
    basket: '',
    sofaSets: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await PostOrders(formData);
      console.log('Order submitted successfully:', response.data);
      // Handle successful submission (e.g., display a success message, clear the form)
    } catch (error) {
      console.error('Error submitting order:', error);
      // Handle errors (e.g., display an error message)
    }
  };

  return (
    <MDBContainer fluid className="min-h-screen flex items-center justify-center bg-gray-100 p-12">
      <MDBCard className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg">
        <form className="flex flex-col items-center p-8 lg:w-1/2" onSubmit={handleOrderSubmit}>
          <p className="text-center h1 font-bold mb-5">BUY NOW</p>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="user me-3" size="lg" />
            <MDBInput label="Your Name" id="name" name="name" type="text" className="w-full" value={formData.name} onChange={handleInputChange} style={{ border: '1px solid black', borderRadius: '4px' }} />
          </div>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="envelope me-3" size="lg" />
            <MDBInput label="Your Email" id="email" name="email" type="email" className="w-full" value={formData.email} onChange={handleInputChange} style={{ border: '1px solid black', borderRadius: '4px' }} />
          </div>

          <div className="flex items-center mb-4 w-full">
            <MDBIcon fas icon="phone me-3" size="lg" />
            <MDBInput label="Phone Number" id="phone" name="phone" type="text" className="w-full" value={formData.phone} onChange={handleInputChange} style={{ border: '1px solid black', borderRadius: '4px' }} />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="pelletPlant" className="font-semibold mb-2 block">Pellet Plant: </label>
            <select id="pelletPlant" name="pelletPlant" className="form-select w-full" value={formData.pelletPlant} onChange={handleInputChange}>
              <option value="" disabled>Select</option>
              <option value="0">0</option>
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

          <div className="w-full mb-4">
            <label htmlFor="chair" className="font-semibold mb-2 block">Chair:</label>
            <select id="chair" name="chair" className="form-select w-full" value={formData.chair} onChange={handleInputChange}>
              <option value="" disabled>Select</option>
              <option value="0">0</option>
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

          <div className="w-full mb-4">
            <label htmlFor="elephants" className="font-semibold mb-2 block">Elephants: </label>
            <select id="elephants" name="elephants" className="form-select w-full" value={formData.elephants} onChange={handleInputChange}>
              <option value="" disabled>Select</option>
              <option value="0">0</option>
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

          <div className="w-full mb-4">
            <label htmlFor="tables" className="font-semibold mb-2 block">Tables: </label>
            <select id="tables" name="tables" className="form-select w-full" value={formData.tables} onChange={handleInputChange}>
              <option value="" disabled>Select</option>
              <option value="0">0</option>
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

          <div className="w-full mb-4">
            <label htmlFor="basket" className="font-semibold mb-2 block">Basket: </label>
            <select id="basket" name="basket" className="form-select w-full" value={formData.basket} onChange={handleInputChange}>
              <option value="" disabled>Select</option>
              <option value="0">0</option>
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

          <div className="w-full mb-4">
            <label htmlFor="sofaSets" className="font-semibold mb-2 block">Sofa Sets:</label>
            <select id="sofaSets" name="sofaSets" className="form-select w-full" value={formData.sofaSets} onChange={handleInputChange}>
              <option value="" disabled>Select</option>
              <option value="0">0</option>
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

          <MDBBtn type="submit" className="mb-4" size="lg">Submit Order</MDBBtn>
        </form>

        <div className="flex items-center justify-center bg-gray-200 p-8 lg:w-1/2 rounded-r-2xl">
          <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid className="w-full h-full object-cover" />
        </div>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
