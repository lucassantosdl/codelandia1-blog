const heart = document.querySelector('header input');
const texts = document.getElementsByClassName('texts');

filterElement.addEventListener('input', filterText)


function filterText() {
  if(filterElement.value != '') {

    for(let text of texts) {
      let title = title.textContent.toLowerCase();
      console.log(title);
    }
  }
}



const sr = ScrollReveal({
    origin: "top",
    distance: "25px",
    duration: 500,
    reset: true,
  });
  
  ScrollReveal().reveal(".article", { delay: 75 });
  ScrollReveal().reveal(".div-data-heart", { delay: 125 });
  ScrollReveal().reveal(".article-title", { delay: 125 });
  ScrollReveal().reveal(".article-content", { delay: 125 });    





 function like() {
  heart.style.width = "34px";
  heart.style.boxShadow = "box-shadow: 8px 11px 28px -4px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,255,0.5);"
 }