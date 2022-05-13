const img = document.querySelector('.hero__img');

function myFunction(x) {
  if (x.matches) { // If media query matches
    img.setAttribute('src', 'images/image-hero-mobile.png');
  } else {
   
   img.setAttribute('src', 'images/image-hero-desktop.png');
  }
}

var x = window.matchMedia("(max-width: 750px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)


// const features = document.querySelector('.nav__features');
// const fdropdown = document.querySelector('.f-dropdown-menu');
// features.addEventListener('click',()=>{
//   fdropdown.classList.toggle('hidden');
// })

// // features.addEventListener('mouseout',()=>{
// //   fdropdown.classList.add('hidden');
// // })


const c_btn = document.querySelector('.mynav__btn__container');
const mobilenav = document.querySelector('.mobile__nav');
c_btn.addEventListener('click',()=>{
  document.body.classList.toggle('overlay');
  mobilenav.classList.toggle('active');
})

