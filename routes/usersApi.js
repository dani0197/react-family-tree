const router = require('express').Router();
const Person = require('../models/Personmodel');

router.post("/users", (req,res)=>{
    Person.create(req.body, (err, data)=> {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

router.get("/users/:userName", (req,res)=> {
    Person.findOne({userName: req.params.userName}).exec((err, data)=> {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

module.exports = router;