const express = require('express');
const router = express.Router();
const bmiService = require('./bmi.service');

// routes
router.get('/calculate', calculate);

module.exports = router;


function calculate(req, res, next) {
    bmiService.calculate()
        .then(persons => {
            
            res.json(persons)
        })
        .catch(err => next(err));
}

