
const button = document.querySelector('.btn')
const city = document.querySelector('.city-name')
const temp = document.querySelector('.temp')
const input = document.querySelector('.zip-input')

// An API call using .then()
//const getWeather = () => {
    //const userzip = input.value 
//console.log (userzip)

//fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userzip},US&appid=d6d8e7356594ac9a61d1a22b5f0ab016&units=imperial`)
//.then(response => response.json())
//.then(data => {
    //const cityName = data.name
    //city.innerText = cityName
    //const currentTemp = data.main.temp
    //temp.innerText = currentTemp
//})
//}
    


    const getWeather = async () =>{
        const userzip = input.value 
        const rawData = await fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${userzip},US&appid=d6d8e7356594ac9a61d1a22b5f0ab016&units=imperial`)
        const data = await rawData.json()

    
        const cityName = data.name
        city.innerText = cityName
        const currentTemp = data.main.temp
        temp.innerText = currentTemp
    }
    button.addEventListener('click', getWeather)