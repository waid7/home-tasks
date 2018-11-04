var elems = document. getElementsByTagName('p');

for (var i=0; i < elems.length; i++) {
    elems[i].addEventListener('click', (function(temp) {
        return function(){
            console.log(this.innerText);
        }
    }()));
} 