  function countryToLiveIn(language,isIsland,population,country) {

    if ( language == Englsih && !isIsland && population <=50 ) {
        console.log(`you need to live in ${country}`);
    }
 else {
    console.log(`${country} does not meet your critiea`);

}

};
console.log(countryToLiveIn('English', false, 30, 'island'));