document.getElementById("button").addEventListener("click",
    function(){
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("Non Verbal Skills"));
        ul.appendChild(li);
    })