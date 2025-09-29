const validationConfig = {formSelector:".popup__form", inputSelector:".popup__input", submitButtonSelector:".popup-buton"};
const enableValidation = ({ formSelector, ...rest }) => { 
    const formList = document.querySelectorAll(formSelector);
    formList.forEach(function(element){
        const inputList = element.querySelectorAll(rest.inputSelector);
        inputList.forEach(function(inputElement){
        inputElement.addEventListener("input", function(popupName){
            console.log(popupName.target.value);
            const validationName = element.querySelector(".popup__validation__text");
            console.log(popupName.target.validity.valid);
            console.log(popupName.target.validationMessage);
            validationName.textContent = popupName.target.validationMessage;
        });
        });
    });
};


 // validationText.textContent = popupInput.validationMessage;

export{validationConfig, enableValidation};
