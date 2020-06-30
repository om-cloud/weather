const request = require('postman-request')
const weather = (latitude, longitude, callback) => {
  //  const weather = ({latitude, longitude}, callback) => { //another syntax but not so readable
const url = 'http://api.weatherstack.com/current?access_key=5b3ab1ef41d7f1d7e921c41298503eeb&query='+ latitude + ','+ longitude +'&units=m'
request({url:url,json:true},(error,response)=>{
    if(error){
        callback('Can not connect to the server', undefined)
    } else if(response.body.error){
        callback('Unable to find the location', undefined)
    } else{
        
        callback(undefined,  response.body.current.weather_descriptions[0] + ', the temperature it is currently ' + 
        response.body.current.temperature + ' celsius, and It feels like ' + 
        response.body.current.feelslike +'.' + ' Humidity is '+ response.body.current.humidity + ' %.')
    }
})
}


const weatherIcon = (latitude, longitude, callback) => {
  //  const weather = ({latitude, longitude}, callback) => { //another syntax but not so readable
const url = 'http://api.weatherstack.com/current?access_key=5b3ab1ef41d7f1d7e921c41298503eeb&query='+ latitude + ','+ longitude +'&units=m'
request({url:url,json:true},(error,response)=>{
    if(error){
       return // callback('Can not connect to the server', undefined)
    } else if(response.body.error){
       return // callback('Unable to find the location', undefined)
    } else{
        
        callback(undefined,  response.body.current.weather_icons[0])
    }
})
}

module.exports=weather;