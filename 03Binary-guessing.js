const error = document.querySelector('.error')
const IGuess = document.querySelector('#Iguess')
const inpNum = document.querySelector('#from1-to-100')
const out = document.querySelector('#answer')

const compGuesses = document.querySelector('#compGuesses')
const out1 = document.querySelector('.out1')
const btnGreater = document.querySelector('.numGreater')
const btnSmaller = document.querySelector('.numSmaller')
const btnIsEven = document.querySelector('.numIsEven')

const btnGameOfTwo = document.querySelector('#gameOfTwo')
const inpNumPlayer = document.querySelector('#numPlayerA')
const inpGuess = document.querySelector('#guessPlayer')
const out2 = document.querySelector('.out2')
const btnGreater1 = document.querySelector('.numGreater1')
const btnSmaller1 = document.querySelector('.numSmaller1')
const btnIsEven1 = document.querySelector('.numIsEven1')

const secListMode= document.querySelectorAll('.mode')


secListMode[0].classList.add('hidden')
secListMode[1].classList.add('hidden')
secListMode[2].classList.add('hidden')

const gameSetting= (e) => {
    secListMode[0].classList.add('hidden')
    secListMode[1].classList.add('hidden')
    secListMode[2].classList.add('hidden')

    if(e.target===IGuess){

        secListMode[0].classList.remove('hidden')

    } else if(e.target===compGuesses){
      
        secListMode[1].classList.remove('hidden')
      

    } else if(e.target===btnGameOfTwo){
        secListMode[2].classList.remove('hidden')

    } 

}


IGuess.addEventListener('click',() => {
Math.ceil(Math.log(100)/Math.log(2))
    let numInp =+inpNum.value

    if (numInp>100) {
    error.innerText= "The number isn't from 1 to 100"
    return ' ';
    } else if (numInp<=100) {
       error.innerText = '';
       if (numInp === 24) {
       return out.innerText="This is my num! You won!" 
       }
       else if (numInp<24) {
       return  out.innerText="My number is bigger!" 
       }
       else if (numInp>24) {
       return out.innerText="My number is smaller!" 
       } 
    } 
})    

let min=1, max=100, middle = Math.floor((max+min)/2)

function play2(ev) {
    
    if (ev.target.innerText === "The computer guesses") {
        min=1, max=100, middle = Math.floor((max+min)/2)
        out1.innerText = middle+'?'}
    if (ev.target.innerText==='This is my num! You won'){
    return out1.innerText = "Yaaa, I won! your number is " + middle
    } else if (ev.target.innerText==='My num is greater'){
       min=middle+1, middle = Math.floor((max+min)/2)
    return out1.innerText = middle + "?"
    } else if (ev.target.innerText==='My num is smaller'){
        max=middle-1, middle= Math.floor((max+min)/2)
    return out1.innerText = middle + '?'
       }
}

compGuesses.addEventListener('click', play2)
btnGreater.addEventListener('click', play2)
btnSmaller.addEventListener('click', play2)
btnIsEven.addEventListener('click', play2)

    
let numPlayer, numGuess;

const gameThree= () => {
    numPlayer =+(inpNumPlayer.value);
    inpNumPlayer.value='';
    
};


//let inpNumV3;
const checkIfRandom2=()=>{
    numGuess = +(inpGuess.value);
    numPlayer=+(inpNumPlayer.value);
    inpGuess.value='';
    inpNumPlayer.value='';

    //inpGuess.value = '';
    //inpNumV3= +inpNumPlayer.value;
   
  if (numGuess < numPlayer) {
    out2.innerText = `Your number is bigger`;
  } else if (numGuess > numPlayer) {
    out2.innerText = `Your number is smaller`;
  } else {
    out2.innerText = `Your number is equal! You won`;
  }
};

btnGreater1.addEventListener('click', checkIfRandom2);
btnSmaller1.addEventListener('click', checkIfRandom2);
btnIsEven1.addEventListener('click', checkIfRandom2);
