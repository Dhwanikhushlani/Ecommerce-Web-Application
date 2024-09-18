// LOAD DOCUMENT ON INSPECT WINDOW
// console.log(document);

// CONSOLE WINDOW OBJECT ---> MEANS BROWSER FUNCTIONALITIES SUCH AS ALERT ETC
// console.log(window);


// DOCUMENT IS OBJECT HAVE DIFFERENT METHODS AS :
// 1. TO GET ID OR CHANGE DIV WITH ID USING JASVASCRIPT AS :
let myDiv = document.getElementById("main");
// console.log(myDiv);

// CAN ACCESS DIV PROPERTIES USING . DOT OPERATOR
// TO GET ID
console.log(myDiv.id);

// TO CHANGE ID OR MANIPULATE IT
// console.log(myDiv.id="container");
myDiv.id="container";

// THERE IS NO CLASS IN JS IT IS CLASSNAME
// console.log(myDiv.class);

// IN DOM THERE IS CLASS SO CLASSNAME IS BLANK
// console.log(myDiv.className);



// 2. GIVE CLASSNAME 
// console.log(myDiv.className = "header");
myDiv.className = "heading";

// CONSOLE THE CHANGES  
console.log(myDiv);




// 3. *STYLE* ---> STYLING ON ELEMENTS
// MANIPULATE STYLE WITH .STYLE
console.log(myDiv.style);

// SET WIDTH USING STYLE
myDiv.style.width = "200px";

// SET HEIGHT
myDiv.style.height = "200px";

// SET BACKGROUND COLOR
myDiv.style.backgroundColor = "red";

// SET BORDER RADIUS
myDiv.style.borderRadius = "40px";

// SET BORDER
myDiv.style.border = "2px solid black";



// 4. GETATTRIBUTE :
// TO GET VALUES OF DIFFRENT ATTRIBUTES
// console.log(myDiv.getAttribute("id"));

// GET DETAILS OF STYLE
// console.log(myDiv.getAttribute("style"));

// HERE CLASS CAN BE ACCESSED BY GETATTRIBUTE BUT NOT DIRECTLY AS TO ACCESS DIRECTLY USE CLASSNAME INSTEAD OF CLASS

// console.log(myDiv.getAttribute("class"));
// console.log(myDiv.className);




// 5. SET ATTRIBUTE FUNXTION :
// TO SET NEW VALUES AS
myDiv.setAttribute("id", "title");
console.log(myDiv);