//navbar and toggle button//
var toggleButton =document.querySelector(".toggle-button");
var navbarLinks = document.querySelector(".navbar-links");
var navbarItems= document.querySelectorAll('.navbar-item');
var navbar = document.querySelector("nav");





toggleButton.addEventListener('click', function()  {

  toggleButton.classList.toggle("active");


  navbarLinks.classList.toggle("active");

  navbar.classList.toggle("active");
});

// active nav link //
const currentLocation=location.href;

navbarItems.forEach( item => {
  if(item.href===currentLocation){
    // console.log(item.href);
    item.classList.add('active');
  }
})



// video play and pause on hover//
var vids = document.querySelectorAll('.text');

vids.forEach(function(e) {
  e.addEventListener('mouseover', function() {
    e.parentElement.parentElement.querySelector('video').play();

  });
  e.addEventListener('mouseleave', function() {
    e.parentElement.parentElement.querySelector('video').pause();

  })
});

//  navbar hide and show on scroll//
const header = document.querySelector('nav');
const homeMain = document.querySelector('.vid-holder');
const homeMainOptions = {
  rootMargin: "-150px 0px 0px 0px",

};


const navObserver = new IntersectionObserver(function(entries, navObserver) {
  entries.forEach(entry => {

    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  })
}, homeMainOptions)

navObserver.observe(homeMain);

// animations on scroll //
var call = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  });
}
const content = document.querySelector(".content");
const conts = document.querySelectorAll(".catergory");
const about = document.querySelectorAll(".about");
const awards = document.querySelectorAll(".main-awards-list")
const mid = document.getElementById('middle');
const cards= document.querySelectorAll(".card");
const observer = new IntersectionObserver(call, {
  threshold: .2,
})
conts.forEach(cont => {
  observer.observe(cont);
})




awards.forEach(award => {
  observer.observe(award);

})

observer.observe(content);

observer.observe(mid);

about.forEach(ab => {
  observer.observe(ab);

})
cards.forEach(card=>{
  observer.observe(card);
})
