// ARRAY (LISTA)
const listElem = ["pane", "carne", "insalata", "latte", "frutta"]

// PRENDO ELEMENTI DALLA LISTA
let i = 0;
while (i < listElem.length) {
    console.log(listElem[i]);
    document.getElementById("items-list").innerHTML +=`<li>${listElem[i]}</li>`
    i++;
}


// OUTPUT