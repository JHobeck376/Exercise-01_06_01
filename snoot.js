/*
    snoot.js
    Form Validation code for snoot.html
    
    Author: Jacob H. Hobeck
    Date:   8.6.18
*/

'use strict';

// function to remove select defaults

function removeSelectDefaults(){
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists: " + emptyBoxes);
}

// page load event handlers

if(window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
}else if (window.attachEvent){
    window.attachEvent("onload", removeSelectDefaults);
}