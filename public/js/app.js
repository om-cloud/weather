

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

const getWeather = (location)=>{ 
    fetch('/weather?address='+ location).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            message1.textContent=data.error;
            message2.textContent='';
           return console.log(data.error);  
        }else{
            //console.log(data.location);
            //console.log(data.forecast);
            message1.textContent=data.location;
            message2.textContent=data.forecast;
        }

    })
})
}



weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault();  // prevent refreshing of the page
    const location = search.value;
    if(!location){
        message1.textContent='Please Enter a Location';
        message2.textContent='';
        return console.log('Please Enter a Location');
    }
    message1.textContent='Loading...';
    message2.textContent='';
    getWeather(location);

    //console.log(location);
})






















// console.log('puzzle')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
// response.json().then((data)=>{
//     console.log(data);
// })
// })

//const url = 'http://api.weatherstack.com/current?access_key=5b3ab1ef41d7f1d7e921c41298503eeb&query='+ latitude + ','+ longitude +'&units=m'


    //       if(data.features.length === 0){
    //        return console.log('Error, Can Not Find This Location')
    //      }
    //      console.log(data)
    // console.log(data.features[0].place_name);
    //  const latitude = data.features[0].center[1]
    // const longitude = data.features[0].center[0]
    // console.log(latitude)
    // console.log(longitude)

//     fetch('http://api.weatherstack.com/current?access_key=5b3ab1ef41d7f1d7e921c41298503eeb&query='+ latitude + ','+ longitude +'&units=m').then((response)=>{

//         response.json().then((forecast)=>{
//             if(data.error){
//                 return console.log(data.error)
//              }
//         forecast = {
//             temperatue:forecast.current.temperature,
//             description:forecast.current.weather_descriptions
//         }
//         console.log('The Temperature is ' + forecast.temperatue + ' and it is ' + forecast.description)



    

//     // weather((latitude,longitude)=>{


//     //     console.log('The Temperature is ' + forecast.temperatue + ' and it is ' + forecast.description)
//     // })

    
//     })
// })

//  const weather = (latitude, longitude) => {fetch('http://api.weatherstack.com/current?access_key=5b3ab1ef41d7f1d7e921c41298503eeb&query='+ latitude + ','+ longitude +'&units=m').then((response)=>{
//     response.json().then((forecast)=>{
        
//     return forecast = {
//         temperatue:forecast.current.temperature,
//         description:forecast.current.weather_descriptions
//     }
//      })
//  })
//  }