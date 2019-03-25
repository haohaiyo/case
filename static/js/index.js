window.onload = function() {
	var img =document.getElementsByTagName("img");
	var son= document.getElementsByClassName("son")[0];
	for(var i=0; i<img.length;i++){
		(function(i){
			img[i].onmousedown=function(){
				son.style.backgroundImage="url(./img/0"+(i+1)+"big.jpg)";
				son.style.border="1px solid red";
				son.style.transition="2.5s";
				img[i].style.opacity=0.5;
				img[i].style.border="1px solid red"
			}
		 })(i);
	}
	}