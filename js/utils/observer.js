const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('img-animation');
    }
  });
});
observer.observe(document.querySelector('.order__bg-img'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('img-animation-2');
    }
  });
});
observer2.observe(document.querySelector('.gallery__bg'));
