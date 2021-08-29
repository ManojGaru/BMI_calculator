//const config = require('config.json');
var fs = require('fs');

module.exports = {
    calculate,

};



async function calculate() {
    let count = 0;
    var persons =   fs.readFileSync('input.json','utf8', function readFileCallback(err, data){
        if (err) {
            console.log(err);
        }
    }).toString()

    persons = JSON.parse(persons);
    persons.forEach(element => {
        element['id'] = Math.floor(1000 + Math.random() * 9000);
        let bmi = element['bmi'] = element.WeightKg / (element.HeightCm / 100);
        if (bmi <= 18.4) {
            element['category'] = 'Underweight';
            element['risk'] = 'Malnutrition risk';
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            element['category'] = 'Normal weight';
            element['risk'] = 'Low risk';
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            element['category'] = 'Overweight';
            element['risk'] = 'Enhanced risk';
            count += 1;
        }
        else if (bmi >= 30 && bmi <= 44.9) {
            element['category'] = 'Moderately obese';
            element['risk'] = 'Medium risk';
        }
        else if (bmi >= 35 && bmi <= 39.9) {
            element['category'] = 'Severely obese';
            element['risk'] = 'High risk';
        } else {
            element['category'] = 'Very severely obese';
            element['risk'] = 'Very High risk';
        }

    });



    var json = JSON.stringify({ person: persons, over_weight: count });
    fs.writeFile("output.json", json, function (err) {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log('complete');

    });

    return await { type: 'succes', data: 'check output json file ', persons: persons };
}


