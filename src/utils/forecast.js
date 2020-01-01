const request = require('request')
const chalk = require('chalk')


const forecast = (latitude, longitude, callback) =>{

    const url = 'https://api.darksky.net/forecast/ed1451d639a720517e2c368dd2bd5bc4/'+ latitude +','+ longitude + '?units=si'
     request({ url , json: true }, ( error, { body} ) =>{
         if(error){
             calback('Unable to connetct to weather service', undefined)
         } else if(body.error){
            callback('Unable to find location', undefined)
         } else{
             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.There is a ' + body.currently.precipProbability + ' % chance of rain')
         }
     })
}


module.exports = forecast