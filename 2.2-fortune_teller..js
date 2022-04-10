


function tellFortune(jobTitle, location, partnerName, numberOfChildren ){
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`
}

let  info = tellFortune('programmer', 'Tel-Aviv', 'Sharon', 2 );
console.log(info)


let getFullDate = () =>{
    let d = new Date();
    const [day, year] = [ d.getDate(), d.getFullYear()];
    const dayName = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()]
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"][new Date().getMonth()]  ;
    
    return `today is a ${dayName} the ${day} of ${monthNames} ,${year} `;
}
let date = getFullDate();
console.log(date);

