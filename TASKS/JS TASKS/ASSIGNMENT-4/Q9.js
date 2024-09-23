function displayInnerHTML() {
    var innerHTMLValue = document.getElementById('myElement').innerHTML;
    document.getElementById('innerHTMLDisplay').innerText = innerHTMLValue;
}

function displayTextContent() {
    var textContentValue = document.getElementById('myElement').textContent;
    document.getElementById('textContentDisplay').innerText = textContentValue;
}