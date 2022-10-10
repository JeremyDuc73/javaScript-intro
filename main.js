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
setInterval(
    changeText, 5000
)
function changeText(){
    for (let x in mots) {
        console.log(mots[x])
        monP.innerHTML = mots[x]
    }
}
