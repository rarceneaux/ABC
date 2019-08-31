const redBtn = document.getElementById('red');
const letterDiv = document.getElementById('abc');

let alphabets = ['A','B','C','D','E'];

const PTD = (stringToPrint,divId) =>{
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
}

const pickLetter = () => {
 let abcString = '';
let letters = alphabets[Math.floor(Math.random() *alphabets.length)];
// console.log(letters);
abcString += letters;
PTD(abcString,'abc');
}



const BtnClicked = () => {
  redBtn.addEventListener('click',pickLetter);
}
BtnClicked();