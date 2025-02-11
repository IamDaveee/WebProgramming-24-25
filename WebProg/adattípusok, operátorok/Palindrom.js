let text=prompt("Írj be egy szöveget, és megnézem, hogy Palindrom-e")
let textLower=text.toLocaleLowerCase()
document.querySelector("#h2").innerHTML += text;
let newtext=""
for (let index = 0; index < textLower.length; index++) {
    if (textLower[index]==" ") {
        continue
    }
    else{
        newtext+=textLower[index]
    }
}

let reverse=newtext.split("").reverse().join("")
console.log(newtext==reverse?"A szöveg Palindrom":"A szöveg nem Palindrom")

document.querySelector("#masodikh2").innerHTML = `${newtext==reverse?"A szöveg Palindrom":"A szöveg nem Palindrom"}`;