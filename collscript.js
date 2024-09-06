var ser=""
var collections=document.querySelector(".imgscon")
var elements=collections.querySelectorAll("div")
function search(event){
    var ser=event.target.value.toUpperCase()
    for(var i=0;i<elements.length;i++){
        var current=elements[i].querySelector("p").textContent
        if(current.toUpperCase().indexOf(ser)<0){
            elements[i].style.display="none"
        }
        else{
            elements[i].style.display="block"
        }
    }
}
var popup=document.querySelector(".overlay")
function pop(){
    popup.style.left="0%"
}
function closer(){
    popup.style.left="-50%"
}


