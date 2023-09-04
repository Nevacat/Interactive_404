const setZeroAppear = () => {
  document.getElementById('number-0-hide').removeEventListener('animationend', setZeroAppear);
  document.getElementById('number-0-hide').setAttribute('id', 'number-0');
  document.getElementById('UFO-beam-hide').setAttribute('id', 'UFO-beam');
  document.getElementById('number-0').addEventListener('animationend', setZeroDisppear);
};

const setZeroDisppear = () => {
  document.getElementById('number-0').removeEventListener('animationend', setZeroDisppear);
  document.getElementById('number-0').setAttribute('id', 'number-0-hide');
  document.getElementById('UFO-beam').setAttribute('id', 'UFO-beam-hide');
  document.getElementById('number-0-hide').addEventListener('animationend', setZeroAppear);
};

document.getElementById('number-0').addEventListener('animationend', setZeroDisppear);
