// backend/server.js
const express = require('express');
const app = express();

const doctorDetails = {
  1: { bio: "Dr. Smith has 20 years of experience in cardiology.", availability: "Mon-Fri, 9 AM - 5 PM" },
  2: { bio: "Dr. Johnson specializes in pediatric care.", availability: "Tue-Thu, 10 AM - 4 PM" },
  // Add more doctor details as needed
};

app.get('/api/doctors/:doctorId/details', (req, res) => {
  const doctorId = req.params.doctorId;
  res.json(doctorDetails[doctorId] || { bio: "No details available", availability: "N/A" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
