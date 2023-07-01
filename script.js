let weather = {
  apiKey: "ada0b6ef1f3091fa3b20f5580a832b5f",
  fetchWeather: function(city){
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID="+this.apiKey
  ).then((response) => response.json())
  .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data)
  {
    const {name}= data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const{speed}=data.wind;
   //console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".temp").innerText = temp +"°C";
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText="Humidity : "+humidity+"%";
    document.querySelector(".wind").innerText="Wind Speed : "+speed+"km/h";
    document.querySelector(".weather").classList.remove("loading");
    //document.body.style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.QH3EWMLBzK35saYj_ERzeAHaEE&pid=Api&P=0&h=180')"
    

  },
  search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener(
  "click",function(){
    weather.search();
  }
);
document.querySelector(".search-bar").addEventListener("keyup",function(event){
  if(event.key=="Enter")
  {
    weather.search();
    weather.change();
  }
});
weather.fetchWeather("Dhanbad");
function updateClock()
{
  var now = new Date();
  var dname = now.getDay(),
    mon = now.getMonth(),
    dnum = now.getDate(),
    year = now.getFullYear(),
    hour = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds();
    period = "AM";
    if(hour==0)
      hour = 12;
    else if(hour == 12)
        period ="PM";
    else if(hour>12)
    {
      period ="PM";
      hour = hour - 12;
    }
    if(min<10)
      min = '0' + min;
    if(sec<10)
      sec = '0' + sec;
    if(hour<10 && hour!=0)
      hour ='0'+hour;
    if(dnum<10)
    dnum='0'+dnum;
    var months =["January","Febuary","March","April",
    "May","June","July","August","Semptember","October",
    "November","December" ];
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var ids = ["Day","Month","daynum","Year","Hours","Mins","Secs","AMPM"];
    var values = [week[dname],months[mon],dnum,year,hour,min,sec,period];
    for(var i=0;i<ids.length;i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
} 
function initClock(){
  updateClock();
  window.setInterval("updateClock()",1)
}

