// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("navbar").style.padding = "12px 10px";
    document.getElementById("logo").style.fontSize = "24px";
  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  }
} 

// Burger change 
function burgerChange(x){
  x.classList.toggle('change');
}

function openNav(){
  document.getElementById('navbar-right').classList.toggle('showNav');

}
var nav_link = document.querySelectorAll('nav-link');

window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;

  if(scroll > 0 && scroll < 600){
    nav_link.forEach(link => link.classList.remove('active'));
    item3.classList.remove('active');
    item2.classList.remove('active');
    item1.classList.add('active');
  }else if(scroll > 600 && scroll < 1200){
    nav_link.forEach(link => link.classList.remove('active'));
    item3.classList.remove('active');
    item1.classList.remove('active');
    item2.classList.add('active');
  } else if(scroll > 1200 && scroll < 2000){
    nav_link.forEach(link => link.classList.remove('active'));
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.add('active');
  }

})

nav_link.forEach( nav_link =>{
  nav_link.addEventListener('click', (e)=>{
    nav_link.forEach(link => link.classList.remove('active'))
    item31classList.remove('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    
    e.target.classList.add('active')
  })
})

// window.onresize = () => {
//   const active = document.querySelector('.active');
//       underlinelink(active);
//   }
  
//   function underlinelink(elem) {
//       const underline = document.getElementById('underline');
//       underline.style.left = `${elem.offsetLeft}px`;
//       underline.style.width = `${elem.offsetWidth}px`;
  
//   }