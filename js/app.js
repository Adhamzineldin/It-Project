// Main Page (Adham Zineldin)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'

    });
  });
});

document.querySelectorAll('.Adham-Zineldin-animal-section').forEach(section => {
  section.addEventListener('click', function () {
    window.location.href = this.getAttribute('data-link');
  });
})

var elements = {
  modal: document.getElementById('loginModal'),
  openModalBtn: document.getElementById('openModalBtn'),
  closeBtn: document.getElementById('closeBtn'),
  userAvatar: document.getElementById('userAvatar'),
};

// Check if the required elements exist before using them
if (elements.openModalBtn && elements.modal) {
  elements.openModalBtn.onclick = function () {
    elements.modal.style.display = 'block';
  };
}

if (elements.closeBtn && elements.modal) {
  elements.closeBtn.onclick = function () {
    elements.modal.style.display = 'none';
  };
}

// Handle form submission
var loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'test' && password === 'test') {
      elements.openModalBtn.style.display = 'none';
      elements.userAvatar.src = 'img/avatar.jpg';
      elements.userAvatar.style.display = 'block';
      elements.modal.style.display = 'none';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
}

//Birds Adham Zineldin
document.querySelectorAll('.Adham-Zineldin-read-more-button').forEach(section => {
  section.addEventListener('click', function () {
    window.location.href = this.getAttribute('data-link');
  });
})
