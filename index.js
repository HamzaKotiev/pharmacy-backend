const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json());
app.use(require('./routes'))

mongoose.connect('mongodb+srv://HamzatKot:19082002@cluster0.0qerfhd.mongodb.net/Pharmacy?retryWrites=true&w=majority',
    () => {
        console.log('MongoDB установил связь');
        app.listen(4000, () => {
            console.log('сервер запущен http://localhost:4000');
        })
    }
)