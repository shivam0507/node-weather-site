const request = require('postman-request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY29kZXN0cmVhayIsImEiOiJjbDBwZTR3aDUxdjRxM2Jwd3E4ZDJrYjI3In0._DMCf1a8RwbR1DHoItDx8Q&limit=1'

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to geocoding service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location, try different search!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode