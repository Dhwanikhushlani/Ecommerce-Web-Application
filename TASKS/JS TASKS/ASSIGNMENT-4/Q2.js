let myDiv = document.getElementById("color");
myDiv.style.height="200px";
myDiv.style.width="200px";
myDiv.style.backgroundColor="yellow";
document.getElementById("color").addEventListener("mouseenter",
    function(){
        myDiv.style.backgroundColor="blue";
})
document.getElementById("color").addEventListener("mouseleave",
    function(){
        myDiv.style.backgroundColor="yellow";
})