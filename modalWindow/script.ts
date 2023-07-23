import { escape } from 'querystring';

const modal = document.querySelector('.modal') as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;
const closeModalButton = document.querySelector(
  '.close-modal'
) as HTMLButtonElement;

const openModalButtons = document.querySelectorAll('.show-modal');
openModalButtons.forEach(openModalButtons => {
  openModalButtons.addEventListener('click', function () {
    console.log(openModalButtons);
  });
});

function openModal() {
  console.log('open modal button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  console.log('close modal button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < openModalButtons.length; i++) {
  openModalButtons[i].addEventListener('click', openModal);
}

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
