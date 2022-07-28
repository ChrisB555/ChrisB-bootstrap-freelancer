window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.padding = "10px ";
  
  } else {
    document.getElementById("nav").style.padding = "30px ";
   
  }
}
