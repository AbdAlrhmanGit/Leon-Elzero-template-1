let header = document.querySelector("header")
let vh = document.scrollingElement.clientHeight
let scrollHeight = document.scrollingElement.scrollHeight
window.onscroll = function() {
    if (window.scrollY >= vh && window.scrollY <= (scrollHeight - vh)){
        header.style.backgroundColor = "white"
    }else{
        header.style.backgroundColor = "transparent"
    }
}
