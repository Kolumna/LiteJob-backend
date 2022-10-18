const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"oferta": ["truskawki", "magazyn", "sklep"]})
})

app.get("", (req, res) => {
    res.send('<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;"><h1>LiteJob serwer działaaa :)</h1></div>')
})

app.listen(process.env.PORT || 5000, () => {console.log('ŁOOOOOO SERWER SIE URUCHAMIA!!!')})