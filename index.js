import express from 'express'

const app = express(); 
const port = process.env.PORT || 3001 
app.use(express.json())

let cars = {
   1: {
    name: "Car 1", 
    color: "Red", 
    brand: "Nissan", 
    year: "2000"
   },
   2: {
    name: "Car 2", 
    color: "Blue", 
    brand: "Audi", 
    year: "1995"
   },
   3: {
    name: "Car 3", 
    color: "Green",
    brand: "Toyota", 
    year: "2005"
   },
   4: {
    name: "Car 4",
    color: "Green", 
    brand: "Hyundai",
    year: "2010"
   }
}

app.get('/', (req, res) => {
    let matchingCars = {}; 
    Object.keys(cars).forEach((key,value) => {
        if(req.query.color == cars[key].color){
            if(Object.keys(matchingCars).length === 0){
                matchingCars[0] = cars[key]
            }else {
                matchingCars[Object.keys(matchingCars).length] = cars[key]
            }
        }
    })
    res.send(matchingCars)
})

app.get('/car/:car/', (req,res) => {
    let car;
    Object.keys(cars).forEach((key,value) => {
        if(req.params.car.substring(1) == key){
            car = cars[key]
            console.log(car)
            }
    })
    res.send(car)
})

app.listen(port, () => {
    console.log(`App listening on ${port}`)
})