import { dinnerPartyGuests } from '/data.js'

const showGuests=document.getElementById('show-guests')
function guests(){
    let guestList=``
    
    for (const guest of dinnerPartyGuests){
        guestList+= `<li>${guest}</li>`
    }
    showGuests.innerHTML=guestList
}

guests()
console.log(dinnerPartyGuests)