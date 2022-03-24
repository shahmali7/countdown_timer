const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const mins1 = document.getElementById("minutes");
const seconds1 = document.getElementById("seconds");
const newYears = "1 Jan 2023";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate-currentDate) / 1000;

    const hours = Math.floor(totalseconds / 3600) % 24;
    const days =Math.floor(totalseconds / 3600/24);
    const min = Math.floor(totalseconds/60) %60;
    const seconds = Math.floor(totalseconds)% 60;

    days1.innerHTML = days;
    hours1.innerHTML = hours;
    mins1.innerHTML = min;
    seconds1.innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000)