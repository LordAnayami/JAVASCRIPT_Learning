import React, {useState} from "react"
//update state of object
function MyComponent(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model:"Focus"})
    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}))
    }

    function handleMadeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }

    return(<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMadeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        
    </div>)
}
export default MyComponent