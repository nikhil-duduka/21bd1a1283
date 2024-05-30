const { calculateAverage } = require("../utils/average");
const { fetchNumbers } = require("../utils/fetchNumbers")
let windowSize = 50;
let window = []
const randController = async(req, res) => {
    try{

        const numbers = await fetchNumbers('r');
        const unqNums = [...new Set(numbers)]
        uniqueNumbers.forEach((number) => {
            if (!window.includes(number)) {
                if (window.length >= windowSize) {
                    window.shift();
                }
                window.push(number);
            }
        });
        const avg = calculateAverage(window)
        let numsRes = { 
        "numbers": numbers, 
        "windowPrevState":[...window], 
        "windowCurrState": window,
        "avg": avg,
        }
        res.send(numsRes);
    }
    catch(err){
        res.status(500).send(err);
    }
        
}


        

module.exports = {randController}