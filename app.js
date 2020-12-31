const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp } °C.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }.`;
    }
    // let { lat, lng } = lugar.getLugarLatLng(argv.direccion).then();
    // console.log(lat, lng);
    // (24.02, -104.67) //40.750000, -74.000000)
    //     .then(console.log)
    //     .catch(console.log);

}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);