function onChange() {
  selectElement = document.getElementById('nightsSelect');
  numbOfNights = Number(selectElement.value);

  console.log(numbOfNights);
  let cost = 1000;

  switch (numbOfNights) {
    case 1:
      cost *= numbOfNights;
      break;

    case 2:
      cost *= numbOfNights;
      break;

    case 3:
      cost *= numbOfNights;
      break;

    case 4:
      cost *= numbOfNights;
      break;

    case 5:
      cost *= numbOfNights;
      break;

    case 6:
      cost *= numbOfNights;
      break;

    case 7:
      cost *= numbOfNights;
      break;
  }

  document.getElementById('price').value = cost;
}

document.getElementById('nightsSelect').addEventListener('change', onChange);
