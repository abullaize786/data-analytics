const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

// Expose static files from current directory
app.use(express.static('./'));

// 1. Get all districts (or specific)
app.get('/api/districts', (req, res) => {
  res.json(data.districtData);
});

// 2. Get district analytics data
app.get('/api/analytics', (req, res) => {
  res.json(data.daData);
});

// 3. Get temple crowd data
app.get('/api/temples', (req, res) => {
  res.json(data.templeData);
});

// 4. AI Predict calculation endpoint
app.post('/api/predict', (req, res) => {
  const { rainVar, industrialVar, afforestationVar } = req.body;
  
  // Computations
  let groundwaterPct = Math.round(75 + (0.5 * rainVar) - (0.8 * industrialVar) + (1.2 * afforestationVar));
  groundwaterPct = Math.max(5, Math.min(100, groundwaterPct));

  let cropPct = Math.round(70 + (0.6 * rainVar) - (0.2 * industrialVar) + (0.5 * afforestationVar));
  cropPct = Math.max(5, Math.min(100, cropPct));

  let aqiVal = Math.round(60 + (0.2 * rainVar) + (6 * industrialVar) - (2.5 * afforestationVar));
  aqiVal = Math.max(20, Math.min(500, aqiVal));

  res.json({
    groundwaterPct,
    cropPct,
    aqiVal
  });
});

// 5. Auth Login endpoint (Mock)
app.post('/api/auth/login', (req, res) => {
  const { mobile, password } = req.body;
  // Mock login: Accept any 10-digit mobile and >= 4 chars password
  if (mobile && mobile.length === 10 && password && password.length >= 4) {
    res.json({ success: true, user: mobile });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
