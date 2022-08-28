var links = document.getElementById("icon-logo");
links.onclick = function() { if (document.querySelector(".header .links ul").style.display === "none"){
    document.querySelector(".header .links ul").style.display = "block";
} 
else{document.querySelector(".header .links ul").style.display = "none"}};

var btn = document.querySelector(".up");

window.onscroll = function(){
    if(window.scrollY >= 600) {
        btn.style.display = "inline";
        btn.style.right = "10px";
    }
    else {
        btn.style.display = "none";
    }
}
btn.onclick = function() {window.scroll(0,0)}
