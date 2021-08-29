
const chai = require("chai");
const expect = chai.expect;
//var assert = require('assert');
const bmiRepository = require("../bmi/bmi.service");


// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe("length exist", function() {
    it("should have array length", async function() {
        const bmi = bmiRepository.calculate();
        expect((await bmi).persons.length).to.be.greaterThan(0)

    })

    it("should be weight in number", async function() {
        const bmi = bmiRepository.calculate();
        (await bmi).persons.forEach(e=>expect(e.WeightKg).to.not.NaN)

    })
    it("should be height in number", async function() {
        const bmi = bmiRepository.calculate();
        (await bmi).persons.forEach(e=>expect(e.HeightCm).to.not.NaN)

    })
    it("should be gender in string", async function() {
        const bmi = bmiRepository.calculate();
        (await bmi).persons.forEach(e=>expect(e.Gender).to.be.string)

    })
    it("should exist bmi field", async function() {
        const bmi = bmiRepository.calculate();
        (await bmi).persons.forEach(e=>expect(e.bmi).to.be.exist)

    })
    it("should  exist category field", async function() {
        const bmi = bmiRepository.calculate();
        (await bmi).persons.forEach(e=>expect(e.category).to.be.exist)
    })

    it("should  exist risk field", async function() {
        const bmi = bmiRepository.calculate();
        (await bmi).persons.forEach(e=>expect(e.risk).to.be.exist)
       
    })
    
})