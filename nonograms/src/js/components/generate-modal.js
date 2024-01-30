import { createHtmlElement } from "../helpers/create-html-element";
import { getThemeLs } from "../helpers/get-theme-ls";
import { newGame } from "../app";
import { generateTemplateForModal } from "./generate-template-for-modal";

const STYLES_DARK = {
  modalDark: "modal-dark",
  modalDarkContent: "modal-dark__content",
  modalDarkTitle: "modal-dark__title",
  modalDarkButton: "modal-dark__button",
  modalDarkShow: "modal-dark__show",
  modalDarkHide: "modal-dark__hide",
  modalDarkFade: "modal-dark__fade",
};

const STYLES_LIGHT = {
  modalLight: "modal-light",
  modalLightContent: "modal-light__content",
  modalLightTitle: "modal-light__title",
  modalLightButton: "modal-light__button",
  modalLightShow: "modal-light__show",
  modalLightHide: "modal-light__hide",
  modalLightFade: "modal-light__fade",
};

export const openModal = (cell) => {
  const body = document.querySelector("body");
  const parent = cell.parentElement;
  const id = +parent.id;
  const level = parent.dataset.level;
  const template = generateTemplateForModal(id, level);
  const modal = generateModal(template);
  body.append(modal);
  body.classList.add("body__hidden");
};

const closeModalAndNewGame = () => {
  const body = document.querySelector("body");
  const modalTheme = getThemeLs({
    light: STYLES_LIGHT.modalLight,
    dark: STYLES_DARK.modalDark,
  });
  const modal = document.querySelector(`.${modalTheme}`);
  const hide = getThemeLs({
    light: STYLES_LIGHT.modalLightHide,
    dark: STYLES_DARK.modalDarkHide,
  });
  const show = getThemeLs({
    light: STYLES_LIGHT.modalLightShow,
    dark: STYLES_DARK.modalDarkShow,
  });
  modal.classList.add(hide);
  modal.classList.remove(show);
  body.classList.remove("body__hidden");
  body.innerHTML = "";
  newGame();
};

export const generateModal = (template = null) => {
  const modalTheme = getThemeLs({
    light: STYLES_LIGHT.modalLight,
    dark: STYLES_DARK.modalDark,
  });
  const modalShowTheme = getThemeLs({
    light: STYLES_LIGHT.modalLightShow,
    dark: STYLES_DARK.modalDarkShow,
  });
  const modalContentTheme = getThemeLs({
    light: STYLES_LIGHT.modalLightContent,
    dark: STYLES_DARK.modalDarkContent,
  });

  const modalTitleTheme = getThemeLs({
    light: STYLES_LIGHT.modalLightTitle,
    dark: STYLES_DARK.modalDarkTitle,
  });

  const buttonTheme = getThemeLs({
    light: STYLES_LIGHT.modalLightButton,
    dark: STYLES_DARK.modalDarkButton,
  });

  const modal = createHtmlElement("div", [modalTheme, modalShowTheme]);
  const modalContent = createHtmlElement("div", modalContentTheme);

  const textContent = "Great! You have solved the nonogram!";

  const modalTitle = createHtmlElement(
    "h3",
    modalTitleTheme,
    textContent.toLocaleUpperCase(),
  );
  modalContent.append(modalTitle);
  if (template) {
    modalContent.append(template);
  }

  const button = createHtmlElement("button", buttonTheme, "New Game");

  button.addEventListener("click", closeModalAndNewGame);

  modalContent.append(button);
  modal.append(modalContent);

  return modal;
};
