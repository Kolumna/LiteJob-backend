require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const usersDB = require("./routes/users");
app.use("/users", usersDB);

app.get("/api", (req, res) => {
  res.json({ oferta: ["truskawki", "magazyn", "sklep"] });
});

app.get("", (req, res) => {
  res.send(
    '<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;"><h1>LiteJob serwer działaaa :)</h1></div>'
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log("ŁOOOOOO SERWER SIE URUCHAMIA!!!");
});
