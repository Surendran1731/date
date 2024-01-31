var parentdiv = document.createElement("div");
parentdiv.className = "main";
let heading=document.createElement("h3");
heading.innerHTML="Date Manipulation";
var dateElement = document.createElement("input");
dateElement.setAttribute("type","date");
dateElement.id = "dob";

var button = document.createElement("button");
button.innerHTML= "Click me";
button.className = "btn btn-primary";
button.addEventListener("click",date_manipulation);

parentdiv.append(heading,dateElement,button);
document.body.append(parentdiv);
var display_date = document.createElement("div");
display_date.className = "main1"


function date_manipulation(){
var input = document.getElementById("dob").value;
var time_stamp = Date.parse(input)
if(time_stamp){
    var inputdate = new Date(time_stamp);
    var currentdate = new Date();
    console.log(inputdate);
    console.log(currentdate);
    var millisecDiff = parseInt(currentdate.getTime()-inputdate.getTime());
    console.log(millisecDiff);
    var secondsdiff = mathfloor(millisecDiff,1000);
    console.log(secondsdiff);
    var minutsdiff = mathfloor(secondsdiff,60);
    console.log(minutsdiff);
    var hoursdiff = mathfloor(minutsdiff,60);
    console.log(hoursdiff);
    var daydiff = mathfloor(hoursdiff,24);
    console.log(daydiff);
    var yeardiff = year_diff(inputdate,currentdate);
    console.log(yeardiff);
    var monthdiff = month_diff(inputdate,currentdate);
    console.log(monthdiff);
   display_date.innerHTML = `
   Given date is  ${inputdate} <br>
   year ${yeardiff} <br>
   month ${monthdiff}<br>
   day ${daydiff} <br>
   hour ${hoursdiff} <br>
   minute ${minutsdiff} <br>
   seconds ${secondsdiff} <br>
   milliseconds ${millisecDiff} <br>
   `
   document.body.append(display_date) 
    
}
}

function mathfloor(value1,value2){
return Math.floor(value1/value2);
}

function year_diff(value1,value2){
    var date1 = new Date(value1);
    var date2 = new Date(value2);
    return date2.getFullYear()-date1.getFullYear();
}

function month_diff(value1,value2){
    var year = year_diff(value1,value2);
    var month = (year*12)+(value2.getMonth()-value1.getMonth())
    return month
}