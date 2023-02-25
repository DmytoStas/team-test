let inputElement = document.getElementById('telInput');

const maskOption = {
  mask: '+ {\\3\\8} (000) 000-00-00',
};

const mask = IMask(inputElement, maskOption);
