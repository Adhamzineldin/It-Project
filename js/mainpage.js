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


var searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    var query = searchInput.value.toLowerCase();

    var animalSections = document.querySelectorAll('.Adham-Zineldin-animal-section');


    var mainContentSection = document.getElementById('intro');

    var isFirstMatchingSection = false;


    if (query) {
      mainContentSection.style.display = 'none';

      animalSections.forEach(function (section) {
        var sectionType = section.getAttribute('data-type').toLowerCase();
        if (sectionType.includes(query)) {
          section.style.display = 'block';

          if (!isFirstMatchingSection) {
            section.style.marginTop = '75px';
            isFirstMatchingSection = true;
          } else {

            section.style.marginTop = '0';
          }
        } else {
          section.style.display = 'none';
        }
      });
    } else {
      mainContentSection.style.display = 'flex';
      animalSections.forEach(function (section) {
        section.style.display = 'block';
        section.style.marginTop = '0';
      });
    }
  });
}


var elements = {
  modal: document.getElementById('loginModal'),
  openModalBtn: document.getElementById('openModalBtn'),
  closeBtn: document.getElementById('closeBtn'),
  userAvatar: document.getElementById('userAvatar'),
  logoutBtn: document.getElementById('logoutBtn'),
};


function checkAuthenticationStatus() {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    elements.openModalBtn.style.display = 'none';
    elements.userAvatar.src = '../resources/img/avatar.jpg';
    elements.userAvatar.style.display = 'block';
    elements.modal.style.display = 'none';
    elements.logoutBtn.style.display = 'block';
  } else {
    elements.openModalBtn.style.display = 'block';
    elements.userAvatar.style.display = 'none';
    elements.logoutBtn.style.display = 'none';
  }
}


checkAuthenticationStatus();

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

      localStorage.setItem('isLoggedIn', 'true');
      elements.openModalBtn.style.display = 'none';
      elements.userAvatar.src = 'resources/img/avatar.jpg';
      elements.userAvatar.style.display = 'block';
      elements.modal.style.display = 'none';
      elements.logoutBtn.style.display = 'block';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
}


if (elements.logoutBtn) {
  elements.logoutBtn.onclick = function () {

    localStorage.removeItem('isLoggedIn');
    checkAuthenticationStatus();
  };
}


var searchIconBtn = document.getElementById('searchIconBtn');
var searchInput = document.getElementById('searchInput');

// Add an event listener to the search icon button
if (searchIconBtn) {
  searchIconBtn.addEventListener('click', function () {
    // Toggle the display of the search input
    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block'; // Show the search input
      searchInput.focus(); // Focus on the search input
    } else {
      searchInput.style.display = 'none'; // Hide the search input
    }
  });
}
