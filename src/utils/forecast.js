const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=9ab8b7ca7eeade788fea52e48d3cf2ed&query=' + latitude +',' + longitude + '&units=f'

    request( { url, json: true }, (error, {body}) => {
    if (error) {
        callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    }
    else {
        callback(undefined, 'temperature: ' + body.current.temperature)
    }
  })
}

module.exports = forecast