const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa388717d7mshf77978306986c64p1848a3jsn201ef4ab775f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
function delhiWeather(){
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
	.then(response => response.json())
	.then(response => {
	
		delhi_cloud.innerHTML =response.cloud_pct
		delhi_feels_like.innerHTML=response.feels_like
		delhi_humidity.innerHTML =response.humidity
		delhi_max_temp.innerHTML=response.max_temp
		delhi_min_temp.innerHTML=response.min_temp
		// delhi_sunrise.innerHTML=response.sunrise
		console.log(response.sunrise)
		delhi_sunrise.innerHTML=new Date(response.sunrise *1000).toLocaleTimeString("en-US")
		delhi_sunset.innerHTML=new Date(response.sunset *1000).toLocaleTimeString("en-US")
		delhi_temp.innerHTML=response.temp
		delhi_wind_speed.innerHTML=response.wind_speed
		delhi_wind_degrees.innerHTML=response.wind_degrees
	})
}
delhiWeather();

function mumbaiWeather(){
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
	.then(response => response.json())
	.then(response => {
	
		mumbai_cloud.innerHTML =response.cloud_pct
		mumbai_feels_like.innerHTML=response.feels_like
		mumbai_humidity.innerHTML =response.humidity
		mumbai_max_temp.innerHTML=response.max_temp
		mumbai_min_temp.innerHTML=response.min_temp
		mumbai_sunrise.innerHTML=new Date(response.sunrise *1000).toLocaleTimeString("en-US")
		mumbai_sunset.innerHTML=new Date(response.sunset *1000).toLocaleTimeString("en-US")
		mumbai_temp.innerHTML=response.temp
		mumbai_wind_speed.innerHTML=response.wind_speed
		mumbai_wind_degrees.innerHTML=response.wind_degrees
	})
}
mumbaiWeather();

function kolkataWeather(){
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then(response => {
	
		kolkata_cloud.innerHTML =response.cloud_pct
		kolkata_feels_like.innerHTML=response.feels_like
		kolkata_humidity.innerHTML =response.humidity
		kolkata_max_temp.innerHTML=response.max_temp
		kolkata_min_temp.innerHTML=response.min_temp
		kolkata_sunrise.innerHTML=new Date(response.sunrise *1000).toLocaleTimeString("en-US")
		kolkata_sunset.innerHTML=new Date(response.sunset *1000).toLocaleTimeString("en-US")
		kolkata_temp.innerHTML=response.temp
		kolkata_wind_speed.innerHTML=response.wind_speed
		kolkata_wind_degrees.innerHTML=response.wind_degrees
	})
}
kolkataWeather();

function chennaiWeather(){
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
	.then(response => response.json())
	.then(response => {
	
		chennai_cloud.innerHTML =response.cloud_pct
		chennai_feels_like.innerHTML=response.feels_like
		chennai_humidity.innerHTML =response.humidity
		chennai_max_temp.innerHTML=response.max_temp
		chennai_min_temp.innerHTML=response.min_temp
		chennai_sunrise.innerHTML=new Date(response.sunrise *1000).toLocaleTimeString("en-US")
		chennai_sunset.innerHTML=new Date(response.sunset *1000).toLocaleTimeString("en-US")
		chennai_temp.innerHTML=response.temp
		chennai_wind_speed.innerHTML=response.wind_speed
		chennai_wind_degrees.innerHTML=response.wind_degrees
	})
}
chennaiWeather();


const getWeather=(city)=>{
	cityName.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		
	 //  cloud_pct.innerHtml =response.cloud_pct
	 feels_like.innerHTML=response.feels_like
	 humidity.innerHTML =response.humidity
	 humidity2.innerHTML =response.humidity
	 max_temp.innerHTML=response.max_temp
	 min_temp.innerHTML=response.min_temp
	 sunrise.innerHTML=new Date(response.sunrise *1000).toLocaleTimeString("en-US")
	 sunset.innerHTML=new Date(response.sunset *1000).toLocaleTimeString("en-US")
	 temp.innerHTML=response.temp
	 temp2.innerHTML=response.temp
	 wind_speed.innerHTML=response.wind_speed
	 wind_speed2.innerHTML=response.wind_speed
	 wind_degrees.innerHTML=response.wind_degrees
	})
	.catch(err => console.error(err));

	}
	submit.addEventListener("click",(e)=>{
	e.preventDefault() //It`s cancel the event if it is cancelabel , that means leave current event and go other event
	getWeather(city.value)
})
Delhi.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(Delhi.innerHTML)
})
Mumbai.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(Mumbai.innerHTML)
})

	getWeather("Delhi");