let getZip = prompt("Enter Zip Code")


let zip = new XMLHttpRequest();

zip.open("GET", `http://api.zippopotam.us/us/${getZip}`, true);
zip.onload = function (){
    return getZip;
}
zip.onreadystatechange = function (){
    if (zip.readyState === 4 && zip.status === 200){
   
        let displayZipCode = JSON.parse(zip.response)
        console.log(displayZipCode)
        document.getElementById("displayZipCode").src = displayZipCode.responseText

        let state = displayZipCode.places[0]["state"]
        let city = displayZipCode.places[0]["place name"]
        document.getElementById("zip").innerHTML = `${city}, ${state}`;

        let lon = displayZipCode.places[0].longitude
        let lat = displayZipCode.places[0].latitude
       
let weatherApp = new XMLHttpRequest();

weatherApp.open("GET", `http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civillight&output=json`, true);

weatherApp.onreadystatechange = function (){


    if (weatherApp.readyState === 4 && weatherApp.status === 200){
   
        let displayWeather = JSON.parse(weatherApp.response)
        

        let today = new Date()
        let year = today.getFullYear()
        let todaysDate = today.getDate()
            function weekday (){
                let day = today.getDay()
                let date = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    for(let i = 0; i <= date.length; i ++){
                        if(i === day){
                            return date[i];
                        };
                    };
            };
            function month () {
                let month = today.getMonth()
                let thisMonth = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
                    for(let i = 0; i <= thisMonth.length; i ++){
                        if(i === month){
                            return thisMonth[i];
                        };
                    };
            };
            
            
        let coverage = displayWeather.dataseries[0].weather
        let maxTemp = displayWeather.dataseries[0].temp2m.max
        let minTemp = displayWeather.dataseries[0].temp2m.min

        document.getElementById("displayWeather").src = displayWeather.response
        document.getElementById("maxTemp").innerHTML = ("Max" + " " + maxTemp * (9/5 + 32) + "\xB0").replace('-', '');
        document.getElementById("minTemp").innerHTML = ("Min" + " " + minTemp * (9/5 + 32) + "\xB0").replace('-', '');
        document.getElementById("date").innerHTML = `Today is ${weekday()}, ${month()} ${todaysDate}, ${year}`
        document.getElementById("coverage").innerHTML = coverage
 console.log(month)

        
        }
    }

weatherApp.send();
    
        }
    }

zip.send();

