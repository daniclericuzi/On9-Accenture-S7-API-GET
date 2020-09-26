const express = require('express');
const app = express();
const porta = 5000;
const mulherestecnologia = require('./mulherestecnologia.json');

// GET para visualizar todas as mulheres da lista
app.get('/mulherestecnologia', (req, res) => {
    res.json(mulherestecnologia);
})

// GET para visualizar a partir do ID
app.get('/mulherestecnologia/:id', (req, res) => {
    const {id} = req.params;
    const idSelecionado = mulherestecnologia.find(idSelecionado => idSelecionado.id == id);

    res.json(idSelecionado);
})

app.use(express.json());

app.listen(porta, function() {
    console.log('Servidor rodando')
})