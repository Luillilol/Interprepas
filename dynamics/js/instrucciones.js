let desplegables = document.getElementsByClassName("desplegable");

console.log(desplegables[0]);

let childlist = desplegables[0].childNodes;

console.log(childlist);

childlist.forEach(child => {
    child.style.visibility = "hidden";
})