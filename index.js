const express = require('express')
const helmet = require('helmet')
const db = require('./data/db-config')

const server = express();

server.use(helmet())
server.use(express.json())

server.get("/", (req, res) => {
    
    db.select("*")
        .from("car_info")
        .then(cars => {
            res.status(200).json({ data: cars });
        })
        .catch(error => {
            console.log(error);
        });

    
});

server.post("/", (req, res) => {
    const postData = req.body;

    // validate the data

    db("car_info")
        .insert(postData, "id")
        .then(ids => {
            db("car_info")
                .where({ id: ids[0] })
                .first()
                .then(car => {
                    res.status(200).json({ data: car });
                });
        })
        .catch(error => {
            console.log(error);
        });
});

server.listen(4000, ()=> console.log('api running'))