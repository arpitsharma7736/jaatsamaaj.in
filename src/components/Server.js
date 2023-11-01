// Import required modules and set up the server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
// Connect to your MongoDB database
mongoose.connect("mongodb://localhost:27017/JaatSamaj_db", { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Mongoose model for your data
const FormData = mongoose.model("FormData", {
  name: String,
  caste: String,
  age: Number,
  qualification: String,
  image: String, // Store the path or URL of the uploaded image
  pdf: String
});

app.use(bodyParser.json());

// Define a route to handle form data
app.post("http://localhost:3001/api/submit", (req, res) => {
  const { name, caste, age, qualification, image, pdf} = req.body;
  // Log the received data to the console
  console.log("Received data:");
  console.log("Name: ", name);
  console.log("Caste: ", caste);
  console.log("Age: ", age);
  console.log("Qualification: ", qualification);

  // Create a new FormData document and save it to the database
  const formData = new FormData({ name, caste, age, qualification,image, pdf});

  formData.save((err, savedData) => {
    if (err) {
      console.error("Error saving data to the database:", err);
      return res.status(500).json({ error: "Error saving data" });
    }

    // Respond with a success message or saved data
    res.json(savedData);
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
