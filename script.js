let kor
do {
    kor = prompt ("Hány éves vagy? (18-100)")
} while (isNaN(kor)||kor<18||100<kor);

kor=Number(kor)
let maxpulzus = 200-kor/2
alert("Számított max pilzusa"+Math.round(maxpulzus))

document.getElementById("z0").innerHTML =("<b>")+Math.round(maxpulzus*0.5)+" , "+Math.round(maxpulzus*0.6)+" bpm </b>"
document.getElementById("z1").innerHTML =("<b>")+Math.round(maxpulzus*0.6)+" , "+Math.round(maxpulzus*0.7)+" bpm </b> "
document.getElementById("z2").innerHTML =("<b>")+Math.round(maxpulzus*0.7)+" , "+Math.round(maxpulzus*0.8)+" bpm </b>"
document.getElementById("z3").innerHTML =("<b>")+Math.round(maxpulzus*0.8)+" , "+Math.round(maxpulzus*0.9)+" bpm </b>"
document.getElementById("z4").innerHTML =("<b>")+Math.round(maxpulzus*0.9)+" , "+Math.round(maxpulzus*1.0)+" bpm </b>"




/*let p = new Array
for (let i = 0; i < 5; i++) {
    p [i] = Math.round[maxpulzus * ([i]*0.1+0.5)];
}
for (let i = 0; i < 5; i++) {
    document.getElementById("z"+ i).innerText = p[i]+" "+p[i+1]+" bpm";
    
}
console.log(document.getElementsByClassName("sman"))
for (let i = 0; i < 5; i++) {
    document.getElementById("z"+ i).innerText = p[i]+" "+p[i+1]+" bpm";
    
}
*/