// function getDate() {
//     let date;
//     let dateTime;

//     date = new Date;
//     dateTime = date.toISOString().split("T")[0];

    
//     document.querySelector(".date").textContent = dateTime;
// }

// getDate();

// var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
// var prnDt = new Date().toLocaleTimeString('en-us', options);

// document.querySelector(".date").textContent = prnDt;

var nowdate = new Date();
var month = nowdate.toLocaleString('default', { month: 'long'});
var week = nowdate.toLocaleString('default', { weekday: 'long'});
var day = nowdate.toLocaleString('default', { day: 'numeric'});
prnDt = String(week + ', ' + month + ' ' + day);
document.querySelector(".date").textContent = prnDt;


$(document).ready(function() {
    setTimeout(() => {
        $(".pushBox:nth-child(1)").slideDown(400);
    }, 1000);
    setTimeout(() => {
        $(".pushBox:nth-child(2)").slideDown(400);
    }, 2000);
    setTimeout(() => {
        $(".pushBox:nth-child(3)").slideDown(400);
    }, 3000);
});
