const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl);
    //api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
    // http://api.openweathermap.org/data/2.5/weather?q=Durango,MX-DUR,484&appid=715bbe48d6f92f2863f6ad3f07b55806
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=715bbe48d6f92f2863f6ad3f07b55806`
    });

    const resp = await instance.get();
    if (resp.data.cod !== 200) {
        throw new Error(`No hay resultados para ${ dir }`);
    }
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
        getLugarLatLng
    }
    // const instance = axios.create({
    //     baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    //     params: { location: 'Madrid' },
    //     headers: {
    //         'x-rapidapi-key': '11e3bd7631msh131170755222a44p1d2c21jsn2a134a1f0435',
    //         'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
    //     }
    // });
    // const instance = axios.create({
    //     baseURL: 'http://api.weatherstack.com/',
    //     access_key: '74e1422376541f27ebcead8d38a64632',
    //     query: 'New York'
    // });
    // const instance = axios.create({
    //     baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather',
    //     query: {
    //         "q": "London,uk",
    //         "lat": "0",
    //         "lon": "0",
    //         "callback": "test",
    //         "id": "2172797",
    //         "lang": "null",
    //         "units": "\"metric\" or \"imperial\"",
    //         "mode": "xml, html"
    //     },
    //     headers: {
    //         "x-rapidapi-key": "11e3bd7631msh131170755222a44p1d2c21jsn2a134a1f0435",
    //         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    //         "useQueryString": true
    //     }


// });