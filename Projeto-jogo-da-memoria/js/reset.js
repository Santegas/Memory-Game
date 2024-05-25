const btnReset = document.querySelectorAll('.btn-reset');

btnReset.forEach(btn => {
  btn.addEventListener('click', () => {
    location.reload();
  });
});