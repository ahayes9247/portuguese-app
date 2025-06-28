import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: 'A3GC4Spumle9V0aq2UMjXtd0',
});

const express = require('express');
const cors = require('cors'); // <-- ADD THIS
const app = express();
const port = 5000;

app.use(cors()); // <-- AND THIS

app.get('/api/data', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Portuguese for Beginners",
      description: "A beginner-friendly guide to European Portuguese.",
      android: true,
      ios: true,
      notes: "Includes pronunciation tips and cultural notes.",
      link: "https://example.com/book1",
      image: "https://example.com/book1.png",
      languages: ["Portuguese", "English"]
    },
    {
      id: 2,
      title: "Mastering Portuguese Grammar",
      description: "An advanced guide to Portuguese grammar.",
      android: false,
      ios: true,
      notes: "Focuses on sentence structure and verb conjugation.",
      link: "https://example.com/book2",
      image: "https://example.com/book2.png",
      languages: ["Portuguese"]
    }
  ]);
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
