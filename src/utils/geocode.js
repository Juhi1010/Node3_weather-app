const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoianVoaS0tciIsImEiOiJja2k2MG11OWQwNjR0MnJsaHM0cG1oZHAyIn0.inVhjFZ1Ghocy8bqw1logg&limit=1'

    request( {url: url, json:true }, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to the location services', undefined)
        } else if (body.features.length == 0) {
            callback('Unable to find the location. Try another search', undefined)
        } else {
            callback(undefined, {
                latidute: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode