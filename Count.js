let count=0;
let counter=document.querySelector("#counter");


function addCounter(){
    count++;
    console.log(count);
    counter.textContent=count;
}
function removeCounter(){
    count--;
    counter.textContent=count;
}