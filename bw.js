alert("This is my B&W colloction!")
var pics = [
    "imgs/img1.JPG",
    "imgs/img2.JPG",
    "imgs/img3.JPG",
    "imgs/img4.JPG",
    "imgs/img5.JPG",
    "imgs/img6.JPG",
    "imgs/img7.JPG",
    "imgs/img8.JPG",
    "imgs/img9.JPG",
    "imgs/img10.JPG",
    "imgs/img11.JPG",
    "imgs/img12.JPG"
]

var firstBtn = document.querySelector("button");
var img = document.querySelector("img");
var i = 1;

firstBtn.addEventListener("click", function(){
    if(i === 12){
        i = 0;
    }
    // alert(img.src)
    img.src = pics[i++]
}); 