alert("This is my colour colloction!")
var pics = [
    "imgs/img_1.JPG",
    "imgs/img_2.JPG",
    "imgs/img_3.JPG",
    "imgs/img_4.JPG",
    "imgs/img_5.JPG",
    "imgs/img_6.JPG"
]

var firstBtn = document.querySelector("button");
var img = document.querySelector("img");
var i = 1;

firstBtn.addEventListener("click", function(){
    if(i === 6){
        i = 0;
    }
    // alert(img.src)
    img.src = pics[i++]
}); 
