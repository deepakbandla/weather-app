import "./styles.css";

fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=jgeLK7u6TzMYsNp5HiGTgR9AJJpWllRi')
    .then(response =>{
        return response.json()
    })
    .then(response =>{
        console.log(response)
    })
