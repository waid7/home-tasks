var elems = document.getElementsByTagName('p');

for (var i=0; i < elems.length; i++) {
    elems[i].parentElement.addEventListener('click', (function() {
        return function(){
            this.style.background === "red" ? this.style.background = "gray" : this.style.background = "red";
            console.log(this.firstChild.innerText);
        }
    }()));
};