window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {

  if (window.pageYOffset > 150) {
    header.classList.add("add-color");
  } else {
      if (header) {
          header.classList.remove("add-color");
      }
  }
}

// $(document).ready(function(){

//     $('#itemslider').carousel({ interval: 3000 });
    
//     $('.carousel-showmanymoveone .item').each(function(){
//     var itemToClone = $(this);
    
//     for (var i=1;i<6;i++) {
//     itemToClone = itemToClone.next();
    
//     if (!itemToClone.length) {
//     itemToClone = $(this).siblings(':first');
//     }
    
//     itemToClone.children(':first-child').clone()
//     .addClass("cloneditem-"+(i))
//     .appendTo($(this));
//     }
//     });
//     });
    