const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondsDegree = ((seconds / 60) * 360) + 90
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`

    const minutes = now.getMinutes()
    const minutesDegree = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`

    const hours = now.getHours()
    const hoursDegree = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(setDate, 1000);

setDate();
