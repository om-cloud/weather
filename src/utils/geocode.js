const request = require('postman-request')

const geocode = (address, callback)=>{
    const url3 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoib20yIiwiYSI6ImNrYnE1bDFhYTJpeTYyc3F2cmx2Zzd6NWIifQ.TErTvhVp7CBTd7ExsOjRRg&limit=1';
    request({url:url3,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service !', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find the location', undefined)
        } else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode;