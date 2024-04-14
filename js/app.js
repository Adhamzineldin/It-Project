document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.animal-section').forEach(section => {
  section.addEventListener('click', function () {
    window.location.href = this.getAttribute('data-link');
  });
})
