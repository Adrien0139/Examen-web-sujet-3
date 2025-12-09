const bonneréponce = document.querySelector('#buttontrue');
if (bonneréponce) {
  bonneréponce.addEventListener('click', () => {
    document.body.classList.toggle('true');
  });
}
const mauvaiseréponce1 = document.querySelector('#buttonwrong1');
if (mauvaiseréponce1) {
  mauvaiseréponce1.addEventListener('click', () => {
    document.body.classList.toggle('wrong');
  });
}
const mauvaiseréponce2 = document.querySelector('#buttonwrong2');
if (mauvaiseréponce2) {
  mauvaiseréponce2.addEventListener('click', () => {
    document.body.classList.toggle('wrong');
  });
}