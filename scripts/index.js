let popupBoxCloseButton = document.querySelector(".popup__close-button");
let popupBox = document.querySelector(".popup");
let popupOpenButton = document.querySelector(".profile__edit-button");
let userNameInfo = document.querySelector(".profile__name");
let userOccupationInfo = document.querySelector(".profile__occupation");
let inputName = document.querySelector(".popup__name");
let inputOccupation = document.querySelector(".popup__about");
let formElement = document.querySelector(".popup__form");

function openPopupBox() {
  let userName = userNameInfo.textContent;
  let userOccupation = userOccupationInfo.textContent;

  inputName.value = userName;
  inputOccupation.value = userOccupation;

  popupBox.classList.add("popup_opened");
}

function closePopupBox() {
  popupBox.classList.remove("popup_opened");
}

popupOpenButton.addEventListener("click", openPopupBox);
popupBoxCloseButton.addEventListener("click", closePopupBox);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let inputNameValue = inputName.value;
  let inputOccupationValue = inputOccupation.value;

  userNameInfo.textContent = inputNameValue;
  userOccupationInfo.textContent = inputOccupationValue;

  closePopupBox();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
