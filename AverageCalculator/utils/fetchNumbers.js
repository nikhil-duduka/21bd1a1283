const { default: axios } = require('axios');

require('dotenv').config()
 const fetchNumbers = async (type) => {
    try {
        console.log(process.env.BEARER_TOKEN);
        const response = await axios.get(`http://20.244.56.144/test/${type}`, {
            headers: { Authorization: `Bearer ${process.env.BEARER_TOKEN}` },
            timeout: 500
        });
        return response.data.numbers;
    } catch (error) {
        console.error(`Error fetching numbers: ${error.message}`);
        return 'error fetching numbers';
    }
};

module.exports = {fetchNumbers}