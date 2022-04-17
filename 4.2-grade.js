

const  myScore =(score1) => {

  if (score1 >=90 && score1 <=100 ){
  return "A"
}
else if (score1 >=80 && score1 <=89 ){
return "B"
}
else if (score1 >=70 && score1 <=79 ){
  return "C"
} else if (score1 >=65 && score1 <=69 ){
return "D"
}
else {
  return "F"
}
}
console.log(myScore(40));