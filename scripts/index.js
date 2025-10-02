//comentarios en js
import {validationConfig, enableValidation} from "./validate.js";
const button = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const form = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileProfesion = document.querySelector(".profile__profesion");
const popupName = document.querySelector("#input__name");
const popupInput = document.querySelector("#input__text");
const addButton = document.querySelector(".profile__add-button");
const popupPlace = document.querySelector(".popup-place");
const popupClosePlaceButton = document.querySelector(".popup-place__close");
const templateCard = document.querySelector("#template-card");
const sectionCards = document.querySelector(".elements");
const saveButonProfile = document.querySelector("#boton-1");
const createButonCard = document.querySelector("#boton-2");
const inputTitle = document.querySelector("#input__title");
const inputLink = document.querySelector("#input__link");
const modalOverlay = document.querySelector(".popup__overlay");
const modalPlaceOverlay = document.querySelector(".popup-place__overlay");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

button.addEventListener("click", function(){
    popup.classList.add("popup__show");
});

function closePopup(){
    popup.classList.remove("popup__show");
};

popupCloseButton.addEventListener("click", closePopup)

function submitForm(evt){
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileProfesion.textContent = popupInput.value;
    closePopup();
};

function popupCreateCard(){
    inputTitle.value;
    inputLink.value;
    createCard(inputTitle.value, inputLink.value);
    closePlacePopup();
};

//form.addEventListener("submit", submitForm);

addButton.addEventListener("click", function (){
    popupPlace.classList.add("popup-place__show");
});

function closePlacePopup(){
    popupPlace.classList.remove("popup-place__show");
};

popupClosePlaceButton.addEventListener("click", closePlacePopup);

document.addEventListener("mousedown", (evt)=>{
 if (evt.target === modalOverlay) {
  closePopup();
};
});
document.addEventListener("mousedown", (evt)=>{
  if (evt.target === modalPlaceOverlay) {
    closePlacePopup();
  };
});

document.addEventListener("keydown", (evt)=>{
  if (evt.key === "Escape") {
    if (popup){
      closePopup();
    };
  };
});

document.addEventListener("keydown", (evt)=>{
  if (evt.key === "Escape") {
    if (popupPlace){
      closePlacePopup();
    };
  };
});

//iteracion de creacion de cartas
initialCards.forEach(function(element) {
    createCard(element.name, element.link);
} );

function createCard(name, link) {
  const card = templateCard.content.querySelector(".elements__card").cloneNode(true);
  const cardTitle = card.querySelector(".elements__title");
  const cardImage = card.querySelector(".elements__image");
  const deleteCard = card.querySelector(".elements__trash");
  const likeButton = card.querySelector(".elements__like");
  const popupImage = document.querySelector(".popup__img");
  const popupImageContainer= document.querySelector(".popup-image");
  const popupImageClose = document.querySelector(".popup-image__close");

  deleteCard.addEventListener("click", function() {
    card.remove();
  } )

  likeButton.addEventListener("click", function(){
    likeButton.classList.toggle("elements__like-active")
  } )

  cardImage.addEventListener("click", function(){
    popupImage.src = link;
    popupImageContainer.classList.add("popup-image__show");
  } )

  function closePopupImage () {
    popupImageContainer.classList.remove("popup-image__show")
  }

  popupImageClose.addEventListener("click", closePopupImage);
  
  cardTitle.textContent = name;
  cardImage.src = link;
  sectionCards.append(card);
};

enableValidation(validationConfig);
//console.log(validationConfig);

saveButonProfile.addEventListener("click", (evt)=>submitForm(evt));
createButonCard.addEventListener("click", (evt)=>popupCreateCard(evt));