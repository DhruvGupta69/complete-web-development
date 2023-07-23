var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var closeModalButton = document.querySelector('.close-modal');
var openModalButtons = document.querySelectorAll('.show-modal');
openModalButtons.forEach(function (openModalButtons) {
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
for (var i = 0; i < openModalButtons.length; i++) {
    openModalButtons[i].addEventListener('click', openModal);
}
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
