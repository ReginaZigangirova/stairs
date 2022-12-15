const popupOpenButton = document.querySelector('.footer__button');  
const popup = document.querySelector('.popup'); 

function openPopup() { 
    popup.classList.add('popup_opened'); 
    document.addEventListener("keydown", closeOnEsc); 
} 

function closeModal(popup) { 
    popup.classList.remove('popup_opened'); 
    document.removeEventListener("keydown", closeOnEsc); 

} 

function closeOnEsc(evt) { 
    if (evt.key === 'Escape' || evt.key === 'Esc') { 
        const modalOpened = document.querySelector('.popup_opened'); 
        closeModal(modalOpened); 
    } 

} 

popupOpenButton.addEventListener('click', openPopup); 