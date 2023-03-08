let inputElement = document.querySelector('[data-tel-numb-validate]');

const maskOption = {
  mask: '+ {38} (000) 000-00-00',
};

const mask = IMask(inputElement, maskOption);
