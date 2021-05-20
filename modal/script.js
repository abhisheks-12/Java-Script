"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// console.log(modal);
// console.log(overlay);
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

function openModal(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for(let i=0; i<btnShowModal.length; i++){
  btnShowModal[i].addEventListener('click',openModal);
}

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

// handling Esc Key
document.addEventListener('keydown',function(event){
  // console.log(event.key);

  if(event.key === 'Escape' && !modal.classList.contains('hidden')){
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
      closeModal();
    
  }
});



/*

Without using functions

for(let i=0; i<btnShowModal.length; i++){
   btnShowModal[i].addEventListener('click',function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
   });
}

btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

});
*/

