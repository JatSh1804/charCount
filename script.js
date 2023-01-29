var count = 0;
document.addEventListener("keyup", function (event) {
    // console.log(event)
    count++;
    if (event.key === "Backspace" && count>1) {
        count = count - 2;
    }
    if (event.key === "Control" || event.key === "Shift") {
        count--;
    }
    if (count>50 ) {
        document.querySelector(".remain-char").innerHTML = 0;
        document.querySelector(".char-count").innerHTML = 50;

    }

    else {
        document.querySelector(".char-count").innerHTML = count;
        document.querySelector(".remain-char").innerHTML = 50 - count;
    }
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