const express = require("express");
const router = express.Router();
const Oferta = require("../models/oferta");

//wszyscy
router.get("/", async (req, res) => {
  try {
    const oferty = await Oferta.find();
    res.json(oferty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//pojedynczy
router.get("/:id", getOferta, (req, res) => {
  res.json(res.oferta);
});

//tworzenie
router.post("/", async (req, res) => {
  const oferta = new Oferta({
    title: req.body.title,
    content: req.body.content,
    price: req.body.price,
    location: req.body.location,
    category: req.body.category,
    owner_id: req.body.owner_id,
  });
  try {
    const newOferta = await oferta.save();
    res.status(201).json(newOferta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//aktualizacja
router.patch("/:id", getOferta, async (req, res) => {
  if(req.body.title != null) {
    res.oferta.title = req.body.title
  }
  if(req.body.content != null) {
    res.oferta.content = req.body.content
  }
  if(req.body.price != null) {
    res.oferta.price = req.body.price
  }
  if(req.body.location != null) {
    res.oferta.location = req.body.location
  }
  if(req.body.category != null) {
    res.oferta.category = req.body.category
  }
  if(req.body.owner_id != null) {
    res.oferta.owner_id = req.body.owner_id
  }
  try {
    const updatedOferta = await res.oferta.save()
    res.json(updatedOferta)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
});

//usuwanie
router.delete("/:id", getOferta, async (req, res) => {
  try {
    await res.oferta.remove();
    res.json({ message: "Oferta usunieta" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getOferta(req, res, next) {
  let oferta;
  try {
    oferta = await Oferta.findById(req.params.id);
    if (oferta == null) {
      return res.status(404).json({ message: "Nie ma takiej oferty" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.oferta = oferta;
  next();
}

module.exports = router;
