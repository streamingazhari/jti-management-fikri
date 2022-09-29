const express = require('express');
const router = express.Router();
const mongo = require('mongojs');
const db = mongo('mongodb+srv://fikriazhari2000:admin@cluster0.ktde0kl.mongodb.net/tech-camp', ['todo']);

router.get('/', function(req, res, next){
    db.todo.find({}, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;