// 날씨 
const API_KEY = ""; // 자신의 API KEY넣기

function onGeoOk(position){
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    console.log("You live in ","위도: ",lat, ",     경도: ",lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you~ No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

// 참고: https://openweathermap.org/api 계정 생성 →메일로 확인후 몇시간뒤 api생성됨
