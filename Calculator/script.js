let inputEl=document.getElementById("inp")
let expression=""
function printme(btn_val){
    let last_char=expression[expression.length-1]
    if(
    (btn_val=='+' || btn_val=='-' || btn_val=='*' || btn_val=='/' || btn_val=='%' || btn_val=='.') 
    && 
    (last_char=='+' || last_char=='-' || last_char=='*' || last_char=='/' ||last_char=='%' || last_char=='.')
    )
      return;
    expression+=btn_val
    inputEl.value=expression
}

function calculate()
{
    inputEl.value=eval(expression)
    expression=inputEl.value
}

function removeAll(){
    inputEl.value=""
    expression=""
}

function deleteLast(){
    expression=expression.slice(0, -1)
    inputEl.value=expression
}

