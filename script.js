
let dashedWord = "";
let ans = '';
let guessedWords = []
const totChances = 6;
let wrng = 0;
let comp = 0;

data = [
  'Monkey D. Luffy',  'Roronoa Zoro',           'Nami',
  'Usopp',            'Vinsmoke Sanji',         'Tony Tony Chopper',
  'Nico Robin',       'Franky',                 'Brook',
  'Jinbe',            'Trafalgar D. Water Law', 'Eustass Kid',
  'Jewelry Bonney',   'Killer',                 'Capone Bege',
  'Basil Hawkins',    'X Drake',                'Scratchmen Apoo',
  'Urouge',           'Shanks',                 'Marshall D. Teach',
  'Kaido',            'Charlotte Linlin',       'Edward Newgate',
  'Buggy the Clown',  'Monkey D. Garp',         'Sengoku',
  'Sakazuki',         'Kuzan',                  'Borsalino',
  'Issho',            'Aramaki',                'Smoker',
  'Tashigi',          'Koby',                   'Dracule Mihawk',
  'Boa Hancock',      'Donquixote Doflamingo',  'Bartholomew Kuma',
  'Crocodile',        'Gecko Moria',            'Monkey D. Dragon',
  'Sabo',             'Emporio Ivankov',        'Gol D. Roger',
  'Silvers Rayleigh', 'Portgaz D. Ace',         'Kozuki Oden',
  'Yamato',           'Nefertari Vivi'
]
const dashInsert = document.getElementById("dashes");
const tries = document.querySelector("#tries span");
const guessValue = document.getElementById("gword");
const rgtleg = document.getElementById("rgtleg");
const lftleg = document.getElementById("lftleg");
const body = document.getElementById("body");
const lftarm = document.getElementById("lftarm");
const rgtarm = document.getElementById("rgtarm")
const head = document.getElementById("head");
const allparts = document.querySelectorAll(".ob");
const guessbar = document.querySelector(".guess-box");
tries.textContent = totChances;

refresh();

allparts.forEach(part =>{
    part.addEventListener("animationend",()=>{
    comp++;

        if(comp == 6)
            setTimeout(()=>{
                let res = confirm(`Sorry..., You Have Lost\n The word was : ${ans}\n Do you want to play Again..?`);
                if(res) refresh();
            },1000);
    });
});
function refresh() {

    let ind = Math.floor(Math.random() * data.length);
    ans = data[ind].toUpperCase();

    dashedWord = ans.split("").map(r => (r==" ")?" ":"_").join("")
    console.log(ans);
    dashInsert.textContent = dashedWord ;
    tries.textContent = totChances;
    wrng = 0;
    comp = 0;
    guessbar.innerHTML = "";
    guessValue.value = "";
    head.style.removeProperty("animation");
    head.offsetHeight;
    body.style.removeProperty("animation");
    body.offsetHeight;
    lftarm.style.removeProperty("animation");
    lftarm.offsetHeight;
    rgtarm.style.removeProperty("animation");
    rgtarm.offsetHeight;
    lftleg.style.removeProperty("animation");
    lftleg.offsetHeight;
    rgtleg.style.removeProperty("animation");
    rgtleg.offsetHeight;

    guessedWords = [];
}
const checkword = (value,dashedWord) =>{
    let arr = dashedWord.split("");


    if(value.length > 1){
        let k = ans.indexOf(value);
        for(let i =0 ; i+k < ans.length ;i++){
            arr[k+i] = value[i];
        }
    }else{
        for(let i=0;i<arr.length;i++){
            if(ans[i] == value){
                arr[i] = value;
            }
        }
    }
    return arr;

}
const guess = (event) =>{

    event.preventDefault();
    let value = guessValue.value.toUpperCase();
    if(guessedWords.includes(value)){
        setTimeout(()=>{
            alert(`${value} is already guessed and it is wrong`);
        },50);
        return;
    }
    if(value == ans){
        setTimeout(()=>{
            let res = confirm(`Congratulations , YOU GUESSED CORRECTLY\n The word was : ${ans} \n Do you want to play Again..?`); 
            if(res) refresh();
        },1000);
    }else{
        guessedWords.push(value);
        const div = document.createElement("div");
        div.textContent = value;
        if(!ans.includes(value)){
            wrng++;
            fallapart(wrng);
            div.className = "guess-item-wrong"
            tries.textContent = totChances - wrng;
        }else{
            dashedWord = checkword(value,dashedWord).join("");
            div.className = "guess-item-right"
            if(dashedWord == ans){
                setTimeout( ()=> {
                    let res = confirm(`Congratulations , YOU GUESSED CORRECTLY\n The word was : ${ans} \n Do you want to play Again..?`); 
                    if(res) refresh();
                }, 1000);
            }
        }
        guessbar.appendChild(div);
    }
 
    
    dashInsert.textContent = dashedWord;
}

const fallapart = (wrng) => {
   
    switch(wrng){
        case 1:
            head.style.animation = 'fall-head 1.25s ease-out forwards';
            break;
        case 2:
            body.style.animation = 'fall-body 1.25s ease-out forwards';
            break;
        case 3:
            lftarm.style.animation = 'fall-larm 1.25s ease-out forwards';
            break;
        case 4:
            rgtarm.style.animation = 'fall-rarm 1.25s ease-out forwards';
            break;
        case 5:
            lftleg.style.animation = 'fall-left 1.25s ease-out forwards';
            break;
        case 6:
            rgtleg.style.animation = 'fall-leg 1.25s ease-out forwards';
            break;
    }
    
}


