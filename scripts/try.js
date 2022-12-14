const track =document.querySelector('.carousel__track');
const slides= Array.from(track.children);
const nextButton= document.querySelector('.carousel__button--next') ;
const prevButton= document.querySelector('.carousel__button--prev') ;
const dotsNav= document.querySelector('.carousel__nav');



const slideWidth=slides[0].getBoundingClientRect().width;
// create new carousel__indicator button//
slides.forEach(slide =>{
let newDot= document.createElement('button');
newDot.classList.add('carousel__indicator');


dotsNav.appendChild(newDot);

});
const dots= Array.from(dotsNav.children);
dots[0].classList.add('selected');
//arrange slides next to each other//
// slides[0].style.left=slideWidth*0+'px';
// slides[1].style.left=slideWidth*1+'px';
// slides[2].style.left=slideWidth*2+'px';


const setSlidePosition = (slide , index) =>{
  slide.style.left= slideWidth * index + 'px';
}


slides.forEach(setSlidePosition);
const moveToSlide= (track , currentSlide , targetSlide) =>{
  track.style.transform = 'translateX( -'  + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot,targetDot) => {
  currentDot.classList.remove('selected');
  targetDot.classList.add('selected');
}

const hideShowArrows = (slides,prevButton,nextButton,targetIndex) =>{
  if(targetIndex === 0 ){
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');

  }
  else if (targetIndex === slides.length-1){
    nextButton.classList.add('is-hidden');
    prevButton.classList.remove('is-hidden');
  }else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}
// click left, move slides to left//
prevButton.addEventListener('click',e =>{
  const currentSlide=track.querySelector('.current-slide');
  const prevSlide=currentSlide.previousElementSibling;
  const currentDot=dotsNav.querySelector('.selected');
  const prevDot= currentDot.previousElementSibling;
  const prevIndex= slides.findIndex(slide => slide===prevSlide);
  moveToSlide( track, currentSlide ,prevSlide);

updateDots(currentDot,prevDot);
hideShowArrows(slides,prevButton,nextButton,prevIndex);
});
// click right , move slides to right //
nextButton.addEventListener('click', e =>{
  const currentSlide=track.querySelector('.current-slide');
  const currentDot=dotsNav.querySelector('.selected');
  const nextDot= currentDot.nextElementSibling;
  const nextSlide=currentSlide.nextElementSibling;
  const nextIndex= slides.findIndex(slide => slide===nextSlide);
moveToSlide(track, currentSlide , nextSlide);
updateDots(currentDot,nextDot);
hideShowArrows(slides,prevButton,nextButton,nextIndex);
});


//click on nav indicators , move to the slide//

dotsNav.addEventListener('click',e =>{
  //what indicator was clicked ?
  const targetDot=e.target.closest('button');

if(!targetDot) return;
const currentSlide= track.querySelector('.current-slide');
const currentDot= dotsNav.querySelector('.selected')
const targetIndex= dots.findIndex(dot => dot ===targetDot);
const targetSlide=slides[targetIndex];

moveToSlide( track ,currentSlide , targetSlide);
updateDots(currentDot,targetDot);
hideShowArrows(slides,prevButton,nextButton,targetIndex);

})
