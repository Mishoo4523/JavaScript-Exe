
let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ['january', 'february', 'march', 'april', 'may', 'june', ' july', 'august', 'september', 'october', 'november', 'december'];
console.log(`today is ${days[now.getDay()]} the ${now.getDate()} of ${months[now.getMonth()]}, ${now.getFullYear()}`);