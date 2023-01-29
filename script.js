var count = 0;
document.addEventListener("keyup", function (event) {
    // console.log(event)
    count++;
    if (event.key === "Backspace") {
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










    // count++;
    // document.querySelector(".char-count").innerHTML = count;

    // if (event.key === "Backspace" || event.key === "Delete") {
    //     count--;
    // }

    // document.querySelector(".remain-char").innerHTML = 50 - count;
    // if (50-count<0) {
    //     document.querySelector(".remain-char").innerHTML = 0;
}
)
