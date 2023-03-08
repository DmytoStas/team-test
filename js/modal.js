(() => {
  const bookTableRefs = {
    openModalBtn: document.querySelector('[data-table-modal-open]'),
    closeModalBtn: document.querySelector('[data-table-modal-close]'),
    modal: document.querySelector('[data-table-modal]'),
  };

  bookTableRefs.openModalBtn.addEventListener('click', toggleModal);
  bookTableRefs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    bookTableRefs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const bookRoomRefs = {
    openModalBtn: document.querySelector('[data-room-modal-open]'),
    closeModalBtn: document.querySelector('[data-room-modal-close]'),
    modal: document.querySelector('[data-room-modal]'),
  };

  bookRoomRefs.openModalBtn.addEventListener('click', toggleModal);
  bookRoomRefs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    bookRoomRefs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const pricePerRoomRefs = {
    openModalBtn: document.querySelector('[data-price-modal-open]'),
    closeModalBtn: document.querySelector('[data-price-modal-close]'),
    modal: document.querySelector('[data-price-modal]'),
  };

  pricePerRoomRefs.openModalBtn.addEventListener('click', toggleModal);
  pricePerRoomRefs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    pricePerRoomRefs.modal.classList.toggle('is-hidden');
  }
})();
