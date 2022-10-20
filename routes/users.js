const express = require("express");
const router = express.Router();
const User = require("../models/user");

//wszyscy
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//pojedynczy
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

//tworzenie
router.post("/", async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    second_name: req.body.second_name,
    email: req.body.email,
    login: req.body.login,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//aktualizacja
router.patch("/:id", getUser, async (req, res) => {
  if(req.body.first_name != null) {
    res.user.first_name = req.body.first_name
  }
  if(req.body.second_name != null) {
    res.user.second_name = req.body.second_name
  }
  if(req.body.email != null) {
    res.user.email = req.body.email
  }
  if(req.body.login != null) {
    res.user.login = req.body.login
  }
  if(req.body.password != null) {
    res.user.password = req.body.password
  }
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
});

//usuwanie
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Uzytkownik usuniety" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Nie ma takiego uzytkownika" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
