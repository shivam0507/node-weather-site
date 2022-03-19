const request = require('postman-request')

const forecast = (latitude, longitude, tempUnit, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f8ef0a8c210668cd18da99de4874899b&query='+ latitude + ',' + longitude +'&units=' + tempUnit

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently '+ body.current.temperature + ' degress out. It feels like '+ body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast