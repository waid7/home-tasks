var elems = document.getElementsByTagName('p');

for (var i=0; i < elems.length; i++) {
    elems[i].addEventListener('click', (function() {
        return function(){
            this.parentElement.style.background === "red" ? this.parentElement.style.background = "gray" : this.parentElement.style.background = "red";
            console.log(this.innerText);
        }
    }()));
};