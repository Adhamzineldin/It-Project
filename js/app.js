// Main Page (Adham Zineldin)
function goBack() {
  window.history.back();
}

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the preference to local storage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

// Check the user's preference on page load
  document.addEventListener('DOMContentLoaded', () => {
    const userPreference = localStorage.getItem('theme');

    if (userPreference === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });
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
