const express = require('express')
const router = express.Router()
const User = require('../models/user')

//wszyscy
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({  message: err.message })
    }
})

//pojedynczy
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//tworzenie
router.post('/', async (req, res) => {
    const user = new User({
      first_name: req.body.first_name,
      second_name: req.body.second_name,
      email: req.body.email,
      login: req.body.login,
      password: req.body.password,
    })
    try {
      const newUser = await user.save()
      res.status(201).json(newUser)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

//aktualizacja
router.patch('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

module.exports = router