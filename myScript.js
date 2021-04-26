function translateToPigLatin(){
    console.log("This is triggering");

    let stringToConvert = document.getElementById("myInput").value

    if (stringToConvert.length > 0){
        let words = stringToConvert.split(" ");
        for(let i = 0; i < words.length; i++){
            let word = words[i];
            let myRegex = /(\w+?)([aeiou]\w+)/i;
            let matches = word.match(myRegex);
            if (matches){
                words[i] = matches[2] + matches[1] + "ay";
            }
        }
        console.log(words);
        document.getElementById("myOutput").innerHTML = words.join(" ");
    }
}