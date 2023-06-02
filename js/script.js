const listaDePromocao = [];

const modalContainer = document.querySelector(".container-modal");
const closeModalBtn = document.querySelector(".button-close-modal");
const formModal = document.getElementById("formModal");

formModal.addEventListener("submit", handleSubmit);

closeModalBtn.addEventListener("click", closeModal);

modalContainer.addEventListener("click", handleClickModal);

function closeModal() {
  modalContainer.classList.remove("open");
}

function handleClickModal(event) {
  if (event.target == this) {
    modalContainer.classList.remove("open");
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");

  listaDePromocao.push({ nome: nomeInput.value, email: emailInput.value });
  nomeInput.value = "";
  emailInput.value = "";
}
