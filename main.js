const input = document.querySelector('.input-name');
const submitBtn = document.querySelector('.btn-submit');
const nameText = document.querySelector('.name');
const genderText = document.querySelector('.gender');

const findGender = function (e) {
  let name = input.value;
  e.preventDefault();

  fetch(`https://api.genderize.io?name=${name}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const { name, gender } = data;
      nameText.textContent = name;
      genderText.textContent = gender;
    })
    .catch(error => console.log(error));
};

submitBtn.addEventListener('click', function (e) {
  findGender(e);
});
