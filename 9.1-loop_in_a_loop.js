const listOfNeighbours = [
["Canada", "Mexico"],
["Spain"],
["Norway", "Sweden", "Russia"],

];

let total=0;
for ( let i=0 ; i< listOfNeighbours.length ; i++) {
                        
    let row = listOfNeighbours[i];
    for ( let j=0 ; j<listOfNeighbours[i].length ; j++ ){
    console.log("Neighbours :", listOfNeighbours[i][j]);
    total += row
}
}