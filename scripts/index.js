let popupBoxCloseButton = document.querySelector(".popup__close-button");
let popupBox = document.querySelector(".popup");
let popupOpenButton = document.querySelector(".profile__edit-button");

function togglePopupBox() {
  popupBox.classList.toggle("popup_opened");
}

popupOpenButton.addEventListener("click", togglePopupBox);
popupBoxCloseButton.addEventListener("click", togglePopupBox);
