// /api/data.js

const data = [
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
];

export default function handler(req, res) {
  res.status(200).json(data);
}
