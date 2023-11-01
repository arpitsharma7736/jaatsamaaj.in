// AdminForm.js
import React, { useState } from 'react';
import axios from 'axios';
function AdminForm({ onSubmit }, props) {
  const [name, setName] = useState("");
  const [caste, setCaste] = useState("");
  const [age, setAge] = useState("");
  const [qualification, setQualification] = useState("");
  const [image, setImage] = useState(null); // Store the selected image file
  const [pdf, setPdf] = useState(null); // Store the selected PDF file

 // Function to handle image file input change
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  // Function to handle PDF file input change
  const handlePdfChange = (e) => {
    const selectedPdf = e.target.files[0];
    setPdf(selectedPdf);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Create a new FormData object to store form data
    const formData = new FormData();

    // Append text input values to the FormData object
    formData.append("name", name);
    formData.append("caste", caste);
    formData.append("age", age);
    formData.append("qualification", qualification);

    // Check if an image file is selected and append it to the FormData object
    // if (image) {
    //   formData.append("image", image, image.name);
    // }

    // // Check if a PDF file is selected and append it to the FormData object
    // if (pdf) {
    //   formData.append("pdf", pdf, pdf.name);
    // }

    // Send the FormData to the server using Axios
    axios
      .post("http://localhost:3001/api/submit", formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };


  return (
    <>
    <br/><br/>
    <h2 style={{textAlign:'center'}}>Fill form to be a Part of Our Journey</h2>
    <form onSubmit={handleSubmit} style={{width:'70%', margin:'auto'}}>
    <label>Name:
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <label>Caste:
      <input type="text" name="caste" value={caste} onChange={(e) => setCaste(e.target.value)} />
    </label>
    <label>Age:
      <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
    </label>
    <label>Qualification:
      <input type="text" name="qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} />
    </label>
    <label>Upload Image:
      <input type="file" accept="image/*" onChange={handleImageChange} /> 
      Upload PDF:
      <input type="file" accept=".pdf" onChange={handlePdfChange} />
    </label><br/><br/>
    
    <button type="submit" style={{marginLeft:'40%'}}>Submit</button>
  </form><br/><br/><br/><br/>
  </>
  );
}

export default AdminForm;
