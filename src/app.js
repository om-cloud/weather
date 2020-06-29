const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const request = require('postman-request')
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');
const chalk = require('chalk');

console.log(__dirname)
console.log(__filename)

const pathPublicDir = path.join(__dirname, '../public');
console.log(pathPublicDir);

//views inialize
const viewsPath = path.join(__dirname, '../templates/views');   //this specify where this folder should, leave 
app.set('views', viewsPath );   //this set it as a folder for the template files this is also allow to receive any name, not just 'views'

//partials inialize
const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);

 //letting the express know which module it should use and set up handle bars
app.set('view engine', 'hbs');

app.use(express.static(pathPublicDir));

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Ohad Matalon'
    })
})

app.get('/weather',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Ohad Matalon'
    })
})

// app.get('/weather', (req,res)=>{
//     if(!req.query.address){
//         return res.send({
//             error:'Please Provide an address'
//         })
//     }
//     geocode(req.query.address, (error, data)=>{
//         if(error){
//             return res.send({error:error})
//         }
//         weather(data.latitude, data.longitude,(error, forecastData)=>{
//       if(error){
//           return res.send({error})
//       }
    
//       res.send({
//           forecast:forecastData,
//           location:data.location,
//           address:req.query.address
//       })
//         })
//     })
// })


//my version of chapter 55 excersie that sends the info straight to the app

// app.get('',(req, res)=>{
//     if(!req.query.location){
//         return   res.render('index',
//                {
//                error:'Please provide a valid location',
//                name:'Ohad Matalon'
//             })
//        }
//        geocode(req.query.location +'', (error,{latitude, longitude, location}={})=>{
//         if (error){
//             res.render('index',
//             {
//             error:'Error, '+ error ,
//             name:'Ohad Matalon'
//          })
//             return console.log(chalk.red('Error', error));
//         }
//                 weather(latitude, longitude, (error, forecast)=>{
//             if (error){
//                 res.render('index',
//                 {
//                 error:'Error, '+ error,
//                 name:'Ohad Matalon'
//              })
//            return console.log('Error', error);

//             }
//             res.render('index',{
//                 title:'Your Forecast:',
//                 forcast:forecast,
//                 location:'Weather At ' + location,
//                 name:'Ohad Matalon'
//             })
//             console.log(chalk.green.bold('The Weather At ' + location +':'))
//             console.log(chalk.yellow(forecast))
//         })
//     })
    // res.render('index',{
    //     title:'Forecast:',
    //     forcast:'Cloudy',
    //     location:req.query.location.toUpperCase(),
    //     name:'Ohad Matalon'
    // })
//})

app.get('/about', (req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Ohad Matalon'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'This Time:',
        help:'Get Help !',
        name:'Ohad Matalon'
    })
})

app.get('/products', (req, res)=>{
    
    if(!req.query.search){
     return   res.send(
            {error:'You must provide a search term'})
    }
        console.log(req.query.search)
    
    res.send({
  products:[]
    })
})
app.get('/help/*', (req,res)=>{   // order of the wild cards is very important
    res.render('404-help',{
        title:'404',
        errorMessage:'Help Content Does Not Found',
        name:'Ohad Matalon'
    })
})

app.get('*', (req,res)=>{
    res.render('404',{
        title:'404',
        errorMessage:'Page Does Not Found',
        name:'Ohad Matalon'
    })
})



// app.get ('', (req,res)=>{
//     res.send('<h1 style="color:grey">Hello user<h1>')
// })

// app.get('/help', (req,res)=>{
//     res.send([
//         {
//         name:'ohad'
//     },
//     {
//         age:47
//     }
// ])
// })
// app.get('/about',(req,res)=>{
//     res.send('About Page')
// })

// app.get('/weather', (req,res)=>{
//     res.send([
//         {
//         location:'Boston'
//     },
//     {
//         forecast:'Cloudy, Temrature is 21 celsius'
//     }
// ])
// })
app.listen(3000, ()=>{
    console.log('server is up and running at port 3000');
})
