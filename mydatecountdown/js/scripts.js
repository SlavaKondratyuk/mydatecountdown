// let btn = document.querySelector('.stop');
//
// btn.addEventListener('click', function () {
//     clearInterval(two);
// });
//
//
// let one = setTimeout(function () {
//     alert('We`ll call u')
// }, 5000);
//
// let two =l
//
// console.log(one);
// console.log(two);
//


// localStorage.setItem('date', '14.02.18');
// localStorage.setItem('second', '10');

// let data = localStorage.getItem('date');
// console.log(data);

// localStorage.removeItem('date');


// let dog = {
//     name: 'Oak',
//     age: 30,
//     isLive: true
// };
//
// localStorage.setItem('dog', JSON.stringify(dog));
//
// let result = localStorage.getItem('dog');
// let convert = JSON.parse(result);
// console.log(result);
// console.log(convert);


// let time = setInterval(function () {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth();
//     let day = now.getDay();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let milisec = now.getMilliseconds();
//     console.log('today date', now);
//     console.log('this year', year);
//     console.log('this month', month);
//     console.log('this day', day);
//     console.log('hours', hours);
//     console.log('minutes', minutes);
//     console.log('seconds', seconds);
//     console.log('miliseconds', milisec);
// }, 1000);
//
//
// let btn = document.querySelector('.stop');
//
// btn.addEventListener('click', function() {
//     clearInterval(time);
// });


let deadline = new Date(2018, 2, 8, 10, 0, 0);
console.log(deadline);

// console.log(difference);
// console.log(seconds);
// console.log(minutes);
// console.log(hours);
// console.log(days);
// console.log('sec left', secLeft);
// console.log('min left',minutesLeft);
// console.log('hours left',hoursLeft);
// console.log('days left',daysLeft);



// setInterval(function () {
//     let now = new Date();
//     console.log(now);
//
//     let difference = deadline - now;
//     let seconds = Math.floor(difference / 1000);
//     let secLeft = seconds%60;
//     let minutes = Math.floor(seconds / 60);
//     let minutesLeft = minutes%60;
//     let hours = Math.floor(minutes / 60);
//     let hoursLeft = hours%60;
//     let days = Math.floor(hours / 24);
//     let daysLeft = days%24;
//
//     let sec = document.querySelector('.seconds');
//     sec.textContent = (secLeft < 10) ? '0' + secLeft : secLeft;
//     let min = document.querySelector('.minutes');
//     min.textContent = (minutesLeft < 10) ? '0' + minutesLeft : minutesLeft;
//     let hour = document.querySelector('.hours');
//     hour.textContent = (hoursLeft < 10) ? '0' + hoursLeft : hoursLeft;
//     let day = document.querySelector('.days');
//     day.textContent = (daysLeft < 10) ? '0' + daysLeft : daysLeft;
// }, 1000);

function timer() {
    let dateNow = new Date();
    let diff = deadline - dateNow;
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds = seconds%60;
    minutes = minutes%60;
    hours = hours%24;
    document.querySelector('.seconds').textContent = (seconds < 10) ? '0' + seconds : seconds;
    document.querySelector('.minutes').textContent = (minutes < 10) ? '0' + minutes : minutes;
    document.querySelector('.hours').textContent = (hours < 10) ? '0' + hours : hours;
    document.querySelector('.days').textContent = (days < 10) ? '0' + days : days;
}

setInterval(timer);

//promise

// const promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success!");
//     }, 2000);
// });

// const promise2 = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("test2");
//         }, 1000)
//     }
// );
//
// promise2
// .then(function (data) {
//     console.log(data);
//     return data ;
// })
// .then(function (str) {
//     return str.split('');
// })
// .then(function (arr) {
//     return arr.reverse().join('');
// })
// .then(function (result) {
//     console.log(result);
// });