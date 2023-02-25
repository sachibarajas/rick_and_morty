const express = require('express');
const getById = express.Router();

//get by ID
getById.get('/rickandmorty/character/:id', (req, res)=> {
    let {id}= req.params;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            let character = {
                id: data.id,
                name: data.name,
                species: data.species,
                gender: data.gender,
                image: data.image
            }
            res.status(200).json(character);
        })
        .catch(err => (res.status(404).send(err)));
})

module.exports = getById;