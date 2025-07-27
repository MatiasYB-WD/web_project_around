//comentarios en js

const button= document.querySelector(".profile__button");
const popup= document.querySelector(".popup");
const popupCloseButton= document.querySelector(".popup__close");
const form= document.querySelector(".popup__form");
const profileName= document.querySelector(".profile__name");
const profileProfesion= document.querySelector(".profile__profesion");
const popupName= document.querySelector(".popup__name");
const popupInput= document.querySelector(".popup__input");
const addButton= document.querySelector(".profile__add-button");
const popupPlace= document.querySelector(".popup-place");
const popupClosePlaceButton= document.querySelector(".popup-place__close");
const popupPlaceName= document.querySelector(".popup-place__name");
const popupPlaceLink= document.querySelector(".poppu-place__link");

button.addEventListener("click", function(){
    popup.classList.add("popup__show");
}
)

function closePopup(){
    popup.classList.remove("popup__show");
}

popupCloseButton.addEventListener("click", closePopup
)

function submitForm(evt){
    evt.preventDefault()
    profileName.textContent = popupName.value;
    profileProfesion.textContent = popupInput.value;
    closePopup()
}

form.addEventListener("submit", submitForm);

addButton.addEventListener("click", function (){
    popupPlace.classList.add("popup-place__show");
}
)

function closePlacePopup(){
    popupPlace.classList.remove("popup-place__show");
}

popupClosePlaceButton.addEventListener("click", closePlacePopup);