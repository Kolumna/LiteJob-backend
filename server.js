const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"Ulubione gry": ["ROCKET LEAGUE", "IT TAKES TWO", "PHASMOPHOBIA"]})
})

app.listen(process.env.PORT || 5000, () => {console.log('ŁOOOOOO SERWER SIE URUCHAMIA!!!')})