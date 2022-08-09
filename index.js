
/////DOM ////////////
const num = document.getElementById('number');
const btn = document.getElementById('btn');
const quote= document.getElementById('quote');

function adviceGenerator(){
fetch('https://api.adviceslip.com/advice')
.then(res=>res.json())
.then(data=>{
    console.log(data.slip.advice)
    quote.innerHTML=data.slip.advice;
    console.log(data.slip.id)
    num.innerHTML=data.slip.id;
}).catch((err)=>{
   quote.innerHTML="No internet connection,Try later"
})
}

adviceGenerator()

btn.addEventListener('click',adviceGenerator);