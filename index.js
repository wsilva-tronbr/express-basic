const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))




app.get('/', (req, res) => {
    res.send({ nome: 'Wiliam' })
})

app.get('/user', (req, res) => {
    res.send([{ nome: 'Wiliam'}])
})
app.get('/page', (req, res) => {
    res.render('page', { nome: 'Wiliam' })
})

app.listen(3000, err => {
    if(err){
        console.log(err)
    } else {
        console.log('Ok')
    }
})