//comentarios en js
console.log("hola mundo")

const button= document.querySelector(".profile__button");
const popupNode= document.querySelector(".popup");
const popupCloseButton= document.querySelector(".popup__close")

button.addEventListener("click", function(event){
    popupNode.classList.add(".popup__show");
}
)

popupCloseButton.addEventListener("click", function(){
    popupNode.classList.remove(".popup__close");
})
