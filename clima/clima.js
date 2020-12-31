const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=715bbe48d6f92f2863f6ad3f07b55806&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}