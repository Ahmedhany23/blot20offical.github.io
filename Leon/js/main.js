var links = document.getElementById("icon-logo");
links.onclick = function() { if (document.querySelector(".header .links ul").style.display === "none"){
    document.querySelector(".header .links ul").style.display = "block";
} 
else{document.querySelector(".header .links ul").style.display = "none"}};

var btn = document.querySelector(".upe");

window.onscroll = function(){
   if(window.scrollY >= 200) {
        btn.style.opacity = 0.5;
        if(window.scrollY >= 300){btn.style.opacity = 1;}
    }
    
    else {
        btn.style.opacity = 0;
    }
}
btn.onclick = function() {window.scroll(0,0)}
