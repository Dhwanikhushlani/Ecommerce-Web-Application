// let myDiv = document.getElementById("main");

// console.log(myDiv.getAttribute("id"));

// myDiv.id = "container";
// myDiv.className = "head";
// myDiv.style.width = "200px";
// myDiv.style.height = "200px";
// myDiv.style.backgroundColor = "green";

// console.log(myDiv.getAttribute("class"));
// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("style"));

// myDiv.setAttribute("id" , "text");
// console.log(myDiv.getAttribute("id"));

// myDiv.setAttribute("style" , "width : 300px ; height : 300px : background : red");


// ONLY BG COLOR IS SET
// THIS CHANGE WILL SHOW IN INSPECT IN ELEMENTS---? STYLE REPLACES AND CHANGES IN IT AS SETTING ONLY BGCOLOR 
// AND HEIGHT WIDTH CHANGES

// WHILE USING DOT PROPERTY ABOVE AS MYdIV.STYLE.PROPERTY IT ONLY REPLACES ID BUT NOT STYLES AS STYLES REMAIN SAME 
// IN SETATTRIBUTE WE CAN REPLACE BOTH ID AND STYLE BUT USING DPT ONLY ID IS REPLACES WHY?
// BECAUSE ID IS STRING AND STYLE IS OBJECT AS IN STRING WHOLE VALUE REPLACES BUT IN OBJECT VALUE DOESNT REPLACES 
// AS WE CAN ACCESS KEYS IN OBJECT

// myDiv.setAttribute("style" , "backgroundColor : red");
// console.log(myDiv.getAttribute("style"));

// IN DETAIL AS

// let obj ={
//     id : "main",
//     style : {
//         width :"200px";
//         height:"200px";
//         backgroundColor:"green"
//     }
// }
// IN DOT METHOD IT DOESNT REPLACES VALUE

// obj.is = "container";
// obj.style.borderRadius = "20px";


// IN SET ATTRIBUTE
// IN SET ATTRIBUTE IT CHANGES WHOLE OBJECT AND REPLACES VALUES

// obj.id = "head";
// obj.style = {
//     backgroundColor : "red"
// }


// INNER HTML, 
// console.log(myDiv.innerHTML);
// console.log(myDiv.innerText);
// myDiv.innerHTML = <input type = "password" placeholder = "enter password"> <button>Submit</button></input>
// console.log(myDiv.innerText);
// console.log(myDiv.textContent);  // console the hidden text also but not innerTxt can do


// SELECTING USING CLASS
// CLASSES CAN CONTAIN MULTIPLE ELEMTS IE WHY WE GET ARRAY WITH THIS GET METHOD 
// CAN ACCESS THROUGH INDEXING AS IT GIVES ARRAY



// 2. GET ATTRIBUTE IN CLASSNAME
// let myDiv = document.getElementsByClassName("head");

// ACCESS TAGS WITH IT AS DIV -->TOTAL DIVS
// let myDiv = document.getElementsByTagName("div");

// console.log(myDiv);

// for(let i =0 ; i< myDiv.length ; i++){
//     myDiv[i].style.padding = "20px";
//     myDiv[i].style.margin = "10px";
//     if(i%2==0){
//         myDiv[i].style.backgroundColor = "yellow";
//     }
//     else{
//         myDiv[i].style.backgroundColor = "red";
//     }
// }


// GIVES COLOR TO DIV USING ARRAY AND STYLES USING GET ATTRIBUTE FOR CLASSNAME

// let colorArr = ["red","green","yellow","blue","violet","grey","indigo","orange"];
// for(let i =0 ; i<myDiv.length ; i++){
//     myDiv[i].style.padding = "20px";
//     myDiv[i].style.margin = "10px";
//     myDiv[i].style.backgroundColor = colorArr[i];
//     myDiv[i].style.borderRadius = `$(i*10)px`;
    // IN PIXEL
    // myDiv[i].style.borderRadius = "20px";
    // IN PERCENT
    // myDiv[i].style.borderRadius = "20%";
// }

// IT IS USEDD TO ACCESS OR ACCESS "ID CLASS TAG" OF ANY ELEMENT ---> IT IS UNIVERSAL SELECTOR
// WE CAN DO IT BY GIVING REFERENCE AS IN PARENTHESIS AS FOR E.G ===> ("#IDNAME")
// let myDiv = document.querySelector("#main");
// console.log(myDiv);


// ALWAYS RETURN ONLY ONE OR FIRST ELEMENT OF THAT ATTRIBUTE IN QUERY SELECTOR LIKE IN CLASS 8 ELEMENTS 
// BUT SHOW ONLY ONE THAT IS FIRST
// let myDiv = document.querySelector(".head");
// console.log(myDiv);

// let myDiv = document.querySelector("div");
// console.log(myDiv);


// IMPORTANT
// QUERYSELECTORALL ---> USED TO SELECT ALL 8 ELEMTS OF ATTRIBUTE AS
// QUERYSELECTOR LAWAYS RETURN ---> NODELIST

let myDiv = document.querySelectorAll(".head");
// console.log(myDiv);


// WHILE GETELEMENTBY CLASS RETURNS ---> HTML COLLECTION AS
// let myDiv1 = document.getElementsByClassName("head");
// console.log(myDiv1);


// HTML COLLECTION AND NODELIST BOTH ARE ARRAY LIKE STRUCTURE BUT ARE NOT PURE ARRAY


// IN NODELIST ONLY FOREACH IS VALID
// JAVASCRIPT KNOWS THIS INFORMATION USING ITS PROTOTYPE IN INSPECT IN CONSOLE AND IN DROPDOWN 
// ARROW THERE IS PROPTOTYPE IN WHICH ALLL FUNXTIONS ARE SEARCHED AND FIND FUNCTIONS OR PROPERTIES 
// IN IT IN THIS PRTOTYPE THERE IS ALSO ONE PROTOTYPE OF OBJECT IN WHICH IT ALSO SEARCHES FOR IT AND THEN W
// HEN ALL PROTOTYPES ENDS BUT WE DO NOT DEFIND THAT FUNCTION OR PROPERTY THEN IT GIVES ERROR ===> HIS PROCESS 
// IS KNOWN AS "PROTOYPE INHERITANCE"

// myDiv.map((item)=>{item.style.backgroundColor ="yellow"});
// console.log(myDiv);
// myDiv1.map((item)=>{item.style.backgroundColor ="yellow"});
// console.log(myDiv);
// myDiv.foreach((item)=>{item.style.backgroundColor ="yellow"});
// console.log(myDiv);
// myDiv.forEach((item)=>{item.style.backgroundColor ="yellow"});
// console.log(myDiv);



// CREATING ELEMENT

// document.createElement("div");
// let newDiv = document.createElement("div");
// console.log(newDiv);
// newDiv.id = "heading";
// newDiv.className = "container";
// newDiv.style.backgroundColor = "red";
// newDiv.style.width = "400px";
// newDiv.style.height = "400px";
// newDiv.innerHTML = "Hello Techno"

// document.body.appendChild(newDiv);
// document.body.removeChild(newDiv);


// let myDiv2 = document.getElementById("main");
// myDiv2.appendChild(newDiv);

// let myDiv3 = document.getElementById("container");


// INERST DIV BEFORE GIVEN ID SUCH AS INSERT NEWDIV BEFORE NYDIV3 I.E OF ITEM-8
// let parentDiv = document.getElementById("heading");
// parentDiv.insertBefore(newDiv,myDiv3);




// *EVENTS* ---> USING MOUSE OR KEYBOARD OR ANY ACTION SOME TASK PERFORMED AS DOUBLE CLICK OF MOUSE --> OPEN


// WHEN CONSOLED SHOW OUTPUT IN CONSOLE AS TIMES ON HOW MAY TIME W CONSOLE IT
// document.getElementById("button").onclick = function(){
//     console.log("Hello Techno \n Button clicked");
// }


// WHEN CLICKED THE BUTTON ---> DIV APPEARS THE TIMES WE CLICKED THE BUTTON 
// document.getElementById("button").onclick = function(){
//     let newDiv = document.createElement("div");
//     newDiv.style.height = "200px";
//     newDiv.style.width = "200px";
//     newDiv.style.backgroundColor = "yellow";
//     document.body.appendChild(newDiv);
// }

// WE DO NOT USE EVENTS LIKE THIS WE USE EVENNT LISTENERS TO CALL THEM AS
// addEventlistener("EVENT TYPR",FUNCTION); AS :
// IT TAKES TWO PARAETERS 1. EVENT TYPE---> ABORT, ONCLICK, DBLCLICK ,DRAG AND DROP , SUBMIT, ONCHANGE, MOUSEENTER, MOUSEEXIT , 
//                          KEYUP, KEYDOWNETC.
//                        2. FUNCTION NAME ---> IN WHICH WHAT YOU WANT TO DO


// ONCLICK AND CLICK BOTH ARE SAME EVENT
// document.getElementById("button").addEventListener("click",
//     function(){
//     let newDiv = document.createElement("div");
//         newDiv.style.height = "200px";
//         newDiv.style.width = "200px";
//         newDiv.style.backgroundColor = "yellow";
//         document.body.appendChild(newDiv);
// })

// document.getElementById("box").addEventListener("mouseenter",
//     function(){
//             document.getElementById("box").style.backgroundColor="Blue";
//     }
// )

// document.getElementById("name").addEventListener("change",
//     function(){
//         let fieldValue = document.getElementById("name").value;
//         console.log(fieldValue);
//     }
// )


// USING IT CAN SEE EVENT IN CONSOLE IN WHICH TARGET WHICH SHOW ID AND VALUE OF TAG
document.getElementById("name").addEventListener("change",
    function(event){
        console.log(event);
    }
)

let obj ={};

// USED TO ACCESS EVENT IN WHICH TARGET IN WHICH FIND NAME AS ATTRIBUTE
//  ONLY ONE SINGLE EVENT CAN BE ACCESSED
// function getValue(a){
//     console.log(a);
// }


// USED TO ACCESS EVENT IN WHICH TARGET IN WHICH WE CAN GET NAME AS ATTRIBUTE
// SHOW EVENT FOR BOTH THE ID'S
function getValue(a){
    obj[a.target.name] = a.target.value;
    console.log(obj);
}


// TO ACCES FIRSTNAME AS OBJECT IN CONSOLE ----> USED IN REACT ALOTT
document.getElementById("name").addEventListener("change",
    function(event){
        getValue(event);
    }
)


// TO ACCES LASTNAME AS OBJECT IN CONSOLE ----> USED IN REACT ALOTT
document.getElementById("name1").addEventListener("change",
    function(event){
        getValue(event);
    }
)