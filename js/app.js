// Main Page (Adham Zineldin)
function goBack() {
  window.history.back();
}

document.querySelectorAll('.Adham-Zineldin-animal-section').forEach(section => {
  section.addEventListener('click', function () {
    window.location.href = this.getAttribute('data-link');
  });
})

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  const headerOffset = document.querySelector('.Adham-Zineldin-header').offsetHeight;
  // Calculate target position
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  window.scrollTo({top: targetPosition, behavior: 'smooth'});

}

document.querySelectorAll('.Adham-Zineldin-nav, .Adham-Zineldin-navigation a[href^="#"]').forEach(link => {
  link.addEventListener('click', scrollToSection);
});

var elements = {
  modal: document.getElementById('loginModal'),
  openModalBtn: document.getElementById('openModalBtn'),
  closeBtn: document.getElementById('closeBtn'),
  userAvatar: document.getElementById('userAvatar'),
};


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


var loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'test' && password === 'test') {
      elements.openModalBtn.style.display = 'none';
      elements.userAvatar.src = '../resources/img/avatar.jpg';
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



//Adham Mostafa
function togglePhoto() {
    var photo = document.getElementById("AMSphoto");
    if (photo.style.display === "none") {
      photo.style.display = "block";
    } else {
      photo.style.display = "none";
    }
  }
