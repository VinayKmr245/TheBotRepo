console.log("JavaScript is running");
let inc=document.getElementById('increase');
let dec=document.getElementById('decrease');
let reset=document.getElementById('reset');
//console.log(inc);
let count=document.getElementById('count');
inc.addEventListener('click',function(){    
    count.innerHTML=parseInt(count.innerHTML)+1;
});
dec.addEventListener('click',function(){
    count.innerHTML=parseInt(count.innerHTML)-1;
});
reset.addEventListener('click',function(){
    count.innerHTML=0;
});     
    
