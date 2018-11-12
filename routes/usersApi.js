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

module.exports = router;