let count=0;
let counter=document.querySelector("#counter");
counter.textContent=count;


function addCounter(){
    count++;
    console.log(count);
    counter.textContent=count;
}
function removeCounter(){
    count--;
    counter.textContent=count;
}
function resetCounter(){
    count=0;
    counter.textContent=count;
}
function changecolor(){
 document.getElementsByTagName("body")[0].style.backgroundColor="black";
 document.getElementsByTagName("body")[0].style.color= "white";

}