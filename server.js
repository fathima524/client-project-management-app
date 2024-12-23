const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
  const { to, subject, body } = req.body;

  // Simulate sending email
  console.log(`Email sent to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);

  res.status(200).json({ success: true, message: 'Email sent successfully!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
