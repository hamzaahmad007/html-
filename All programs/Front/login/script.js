const singinbtn = document.querySelector(".singinbtn");
const singupbtn = document.querySelector(".singupbtn");
const formbox = document.querySelector(".form-box");
const body = document.querySelector("body");
singupbtn.onclick = function(){
    formbox.classList.add("active")
        body.classList.add("active")
}
singinbtn.onclick = function(){
    formbox.classList.remove("active")
            body.classList.remove("active")
}