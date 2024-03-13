// Variabless
const cityName = document.querySelector('#weatherInput');
const searchBtn = document.querySelector('#searchBtn');
const form = document.getElementById('weatherForm');
const myCity = document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather = document.getElementById('weatherMain');
const temp = document.querySelector('.temp');
const dates = document.querySelector('.todayDates');
const times = document.getElementById('todayTime');
let date = new Date();

// Function work when user input the city name
form.addEventListener('submit', function (e) {

    // preventDefault() to stop page reload
    e.preventDefault();

    // Updating the city name
    let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    const apiID = `931f131dde3f4ae2fcbc3289fc646471`;
    // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

    // fetching data from the weather api
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {

        const tempValue = Math.round(data['main']['temp']);
        const weatherMain = data['weather'][0]['main'];
        weather.innerHTML = weatherMain;

        // Updating the DOM
        myCity.innerHTML = city;
        temp.innerHTML = `${tempValue}`
        weather.innerHTML = `${weatherMain}`
        temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span.`;

        // Updating the Images according to the weather
        if (weatherMain == 'Clear') {
            image.src = `./Images/sunny.png`
            myWeatherContainer.style.backgroundColor = '#ec6e4c'
        }
        if (weatherMain == 'Clouds') {
            image.src = `./Images/clouds.png`
            myWeatherContainer.style.backgroundColor = '#86d3d3'
        }
        if (weatherMain == 'Rain') {
            image.src = `./Images/Rain.png`
            myWeatherContainer.style.backgroundColor = '#494bcf'
        }
        if (weatherMain == 'Drizzle') {
            image.src = `./Images/Drizzle.png`
            myWeatherContainer.style.backgroundColor = '#8ecfcf'
        }
        if (weatherMain == 'Haze') {
            image.src = `./Images/Drizzle.png`
            myWeatherContainer.style.backgroundColor = '#d8ced2'
        }

        // Updating dates
        const currentMonth = date.getMonth();
        switch (currentMonth) {
            case 0:
                dates.innerHTML = `${date.getDate()}, Jan`
                break;
            case 1:
                dates.innerHTML = `${date.getDate()}, Feb`
                break;
            case 2:
                dates.innerHTML = `${date.getDate()}, Mar`
                break;
            case 3:
                dates.innerHTML = `${date.getDate()}, Apr`
                break;
            case 4:
                dates.innerHTML = `${date.getDate()}, May`
                break;
            case 5:
                dates.innerHTML = `${date.getDate()}, Jun`
                break;
            case 6:
                dates.innerHTML = `${date.getDate()}, Jul`
                break;
            case 7:
                dates.innerHTML = `${date.getDate()}, Aug`
                break;
            case 8:
                dates.innerHTML = `${date.getDate()}, Sept.`
                break;
            case 9:
                dates.innerHTML = `${date.getDate()}, Oct.`
                break;
            case 10:
                dates.innerHTML = `${date.getDate()}, Nov`
                break;
            case 11:
                dates.innerHTML = `${date.getDate()}, Dec`
                break;
        }

        // Updating times       
        function leftInterval() {
            const left = document.getElementById('todayTime')
            let leftDate = new Date();
            let hours = leftDate.getHours();
            let minutes = leftDate.getMinutes();
            let seconds = leftDate.getSeconds();

            if (hours == 0) {
                hours = 12;
            }

            if (hours > 12) {
                hours = hours - 12;
            }
            left.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`
        }
        setInterval(leftInterval, 1000);
        
        // Function to set background image based on weather
function setBackground(weatherMain) {
    const body = document.querySelector('body');
    switch (weatherMain) {
        case 'Clear':
            body.style.backgroundImage = "url('sunny.jpg')";
            break;
        case 'Clouds':
            body.style.backgroundImage = "url('clouds.jpg')";
            break;
        case 'Rain':
            body.style.backgroundImage = "url('rain.jpg')";
            break;
        case 'Drizzle':
            body.style.backgroundImage = "url('drizzle.jpeg')";
            break;
        case 'Haze':
            body.style.backgroundImage = "url('haze.jpg')";
            break;
        default:
            body.style.backgroundImage = "url('default.jpg')";
            break;
    }
}

// Inside the fetch callback after updating other DOM elements
setBackground(weatherMain);    

// Function to set background color and input text color
function setColors(weatherMain) {
    const body = document.querySelector('body');
    const weatherInput = document.getElementById('weatherInput');
    
    switch (weatherMain) {
        case 'Clear':
            body.style.backgroundColor = '#ec6e4c'; // Change background color
            weatherInput.style.color = 'black'; // Change input text color
            break;
        case 'Clouds':
            body.style.backgroundColor = '#86d3d3';
            weatherInput.style.color = 'black';
            break;
        case 'Rain':
            body.style.backgroundColor = '#494bcf';
            weatherInput.style.color = 'white';
            break;
        case 'Drizzle':
            body.style.backgroundColor = '#8ecfcf';
            weatherInput.style.color = 'black';
            break;
        case 'Haze':
            body.style.backgroundColor = '#d8ced2';
            weatherInput.style.color = 'black';
            break;
        default:
            body.style.backgroundColor = 'white'; // Default background color
            weatherInput.style.color = 'black'; // Default input text color
            break;
    }
}

// Inside the fetch callback after updating other DOM elements
setColors(weatherMain);

    })
})