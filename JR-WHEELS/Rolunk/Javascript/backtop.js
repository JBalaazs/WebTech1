window.onscroll = function() {scrollFunction()}; /*Scroll pozíció ellenőrzése.*/

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").classList.add("show");
  } else {
    document.getElementById("myBtn").classList.remove("show");
  }
}

function topFunction() {
  const scrollStep = -window.scrollY / (500 / 15);
  const scrollInterval = setInterval(function(){
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    }
    else clearInterval(scrollInterval);
  },15);
}