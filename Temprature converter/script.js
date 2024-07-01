let farEl=document.getElementById("far");
let kelEl=document.getElementById("kel");

console.log(typeof(farEl))
function tofar(){
   let tempEl=+document.getElementById("inp").value; // + for accessing inp as integer 
   farEl.innerText=tempEl*(9/5)+32
}

function tokel(){
let tempEl=+document.getElementById("inp").value;
kelEl.innerText=tempEl+273.15
}

function reset(){
   document.location.reload()
}