const express = require("express");
const app = express();

app.use(express.json());

let candidates = [
  { id: 1, name: "Candidate A", votes: 0 },
  { id: 2, name: "Candidate B", votes: 0 },
  { id: 3, name: "Candidate C", votes: 0 }
];

// Get all candidates
app.get("/candidates", (req, res) => {
  res.json(candidates);
});

// Vote for candidate
app.post("/vote/:id", (req, res) => {
  const id = parseInt(req.params.id);

  candidates = candidates.map(c =>
    c.id === id ? { ...c, votes: c.votes + 1 } : c
  );

  res.json(candidates);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});