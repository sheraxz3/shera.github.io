const sex3 = document.getElementById('sex3');

sex3.addEventListener('click', () => {
  // 👇️ hide button
  sex3.style.display = 'none';

  // 👇️ show div
  const box = document.getElementById('box');
  box.style.display = 'block';
});