const api ={
    key: "28fd15358cdecbc1a1dfef367e71acef",
    base: "https://api.openweathermap.org/data/2.5/"

}

const search = document.querySelector(".search")
const btn = document.querySelector(".btn")

btn.addEventListener("click",getInput);

function getInput(event){
    event.preventDefault();
    if (event.type== "click"){
        getData(search.value);
        console.log(search.value);

    }
}
function getData(){
    fetch(`${api.base} weather? q= ${search.value} &units= metric&appid = ${api.key}`) .thern(response =>{
        return response.json();
    }).then(displayData);
}
function displayData(response){
    // console.log(response)
    if (response.cod == "404"){
        const textContent = "Please enter a valid city name";
        search.value ="";
    }
    else{
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.syn.country}`;
        const today = new Date();
        const date = document.querySelector(".date");
        DataTransfer.innerText = dateFunction(today);

  const temp = document.querySelector(".temp");
  temp.innerHTML = `Temp: ${Math.round(response.main.temp)}°C`

  const weatherIcon = document.querySelector(".weather-icon");
  const iconURL = "";
  
    }
}
function dateFunction(date){
    let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    let days = ["sunday","monday","tuesday","wednesday","thursday", "friday","saturday"];

    let day = days[date.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getYear();
    return `${day} ${date} ${month} ${year}`;
}