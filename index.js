// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");

//User event (click) expands image
for(var i=0; i<document.querySelectorAll(".modalImg").length; i++){
  document.querySelectorAll(".modalImg")[i].addEventListener("click",function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
}

// Get <span> element
var span = document.getElementsByClassName("close")[0];

// Clicks on <span> (x) will close the modal
span.onclick = function() {
  modal.style.display = "none";
}
