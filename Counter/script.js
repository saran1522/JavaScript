let cntEl=document.getElementById("inc-el");
let savedEl=document.getElementById("saved-ent")
let cnt=0
function increment(){
    cnt++
    cntEl.innerText=cnt
}
function reset(){
    cntEl.innerText=0
    cnt=0
}
function decrement(){
    cnt--
    cntEl.innerText=cnt
}
function save(){
savedEl.textContent+=cnt+ ", ";
}