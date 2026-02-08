import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const STATE_FILE = "./state.json";

/* ------------------ Helpers ------------------ */
function loadState() {
  if (!fs.existsSync(STATE_FILE)) {
    fs.writeFileSync(STATE_FILE, JSON.stringify({}, null, 2));
  }
  return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
}

function saveState(data) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(data, null, 2));
}

/* ------------------ API ------------------ */
app.get("/api/state", (req, res) => {
  const state = loadState();
  res.json(state);
});

app.post("/api/state", (req, res) => {
  const incoming = req.body;
  if (!incoming || typeof incoming !== "object") {
    return res.status(400).json({ error: "Invalid state" });
  }
  saveState(incoming);
  res.json({ ok: true });
});

/* ------------------ Start ------------------ */
app.listen(PORT, () => {
  console.log("Server läuft auf Port", PORT);
});
