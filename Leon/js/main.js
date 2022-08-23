var links = document.getElementById("icon-logo");
links.onclick = function() { if (document.querySelector(".header .links ul").style.display === "none"){
    document.querySelector(".header .links ul").style.display = "block";
} 
else{document.querySelector(".header .links ul").style.display = "none"}};

var clickhere = document.getElementById("portfolio-content");
clickhere.onclick = function(){location.href = "#"};
