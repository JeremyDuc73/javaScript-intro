let word = "bonjour"
let test = word.split("")
console.log(test)
test.splice(4, 1)
let finalTest = test.join('')
console.log(finalTest)
console.log(word[2])




const monH1 = document.querySelector(".rouge")
setInterval(()=>{monH1.classList.toggle("bleu")}, 500);




const monP = document.querySelector(".monP")
let mots = ["Bonjour" , "Hola" , "Hello" , "こんにちは"]
for (let i = 0; i<mots.length ; i++){
    setTimeout(()=>{monP.innerHTML = mots[i]},1000*i)
}




let motInterdit = "dindon"
let unePhrase = "le doux dos dodu du dindon farci se dandinait doucement"
let unTableau = unePhrase.split(" ")
unTableau.forEach(mot=>{
    let paragraphe = document.createElement('p');
    let index = unTableau.indexOf(mot)
    if (index % 2 == 0){
        paragraphe.classList.add("cyan")
    }
    else{
        paragraphe.classList.add("rose")
    }


    if(mot == motInterdit){
        paragraphe.innerHTML = "poulet"
    }
    else {
            paragraphe.innerHTML = mot
    }
    let body = document.querySelector("body");
    body.appendChild(paragraphe);
})