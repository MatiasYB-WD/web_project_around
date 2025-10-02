const validationConfig = {formSelector:".popup__form", inputSelector:".popup__input", submitButtonSelector:".popup__buton"};
const enableValidation = ({ formSelector, ...rest }) => {  //toma todos los valores de la L1 
    const formList = document.querySelectorAll(formSelector);//tomar todos los formularios y guardarlos en formList
    formList.forEach(function(element){ //recorre los formularios
        const inputList = element.querySelectorAll(rest.inputSelector); //selecciona todos los input
        inputList.forEach(function(inputElement){ //recorre todos los input
        inputElement.addEventListener("input", function(e){ //evento input = reconoce cambios al escribir
            const elDiv = inputElement.nextElementSibling
            const elP = elDiv.querySelector(".text-error")
            elP.textContent = e.target.validationMessage;
            validationMessages(); 
          });
            const saveButonProfile = document.querySelector("#boton-1");
            const createButonCard = document.querySelector("#boton-2");
            function validationMessages () {
                //document.querySelector("#input__name").validity.valid;
                //document.querySelector("#input__text").validity.valid;
                 if (document.querySelector("#input__name").validity.valid && document.querySelector("#input__text").validity.valid) {
                   //console.log("no se cumple condicion");
                   saveButonProfile.classList.remove("popup__buton_disabled");
                } else {
                   //console.log("se cumple condicion");
                   saveButonProfile.classList.add("popup__buton_disabled");
                };
                   //console.log("fin del condicional");
                 if (document.querySelector("#input__title").validity.valid && document.querySelector("#input__link").validity.valid) {
                 //  console.log("no se cumple condicion");
                    createButonCard.classList.remove("popup__buton_disabled");
                } else {
                //console.log("se cumple condicion");
                   createButonCard.classList.add("popup__buton_disabled");
                };
            };     
        });
    });
};

export{validationConfig, enableValidation};
