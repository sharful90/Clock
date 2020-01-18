


let second = document.querySelector(".sec1");
let minute = document.querySelector(".min1");
let hour = document.querySelector(".hou1");

setInterval(function(){

     let Data=new Date();
     let sec=Data.getSeconds()/60;
     let min=Data.getMinutes()/60;
     let hou=Data.getHours()/12;

     second.setAttribute("style",`transform:rotate(${sec*360}deg)`);
     minute.setAttribute("style",`transform:rotate(${min*360}deg)`);
     hour.setAttribute("style",`transform:rotate(${hou*360}deg)`);

},1000);




