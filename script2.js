document.addEventListener("keyup", function () {
   var textLength= document.querySelector("textarea").value.length;
   console.log(textLength)
   document.querySelector(".char-count").innerHTML=textLength;
   document.querySelector(".remain-char").innherHTML=50-length;
})
document.querySelector("input").addEventListener("click",function(){
    if(document.querySelector("input").checked){
        document.querySelector("body").style.backgroundColor= "#000" ;
        document.querySelector("h3").style.color="black";
        
    }
    else{
        document.querySelector("body").style.backgroundColor= "rgb(156, 156, 207)" ;
        document.querySelector("h3").style.color="grey";

    }
})