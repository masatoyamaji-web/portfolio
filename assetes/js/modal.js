const openButtons = document.querySelectorAll(".js-modal-open");
const closeButtons = document.querySelectorAll(".js-modal-close");

const openModal = (modal) => {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = (modal) => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modalTarget;
    const modal = document.getElementById(modalId);

    if (modal) {
      openModal(modal);
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(button.closest(".modal"));
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const openModalElement = document.querySelector(".modal.is-open");
  if (openModalElement) {
    closeModal(openModalElement);
  }
});
