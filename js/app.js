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

// Get the modal, button, and close button
    var modal = document.getElementById('loginModal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeBtn = document.getElementById('closeBtn');
    var userAvatar = document.getElementById('userAvatar');

    // Function to open the modal
    openModalBtn.onclick = function() {
        modal.style.display = 'block';
    };

    // Function to close the modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal when the user clicks outside the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
          }
    };

    // Handle form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'test' && password === 'test') {
            openModalBtn.style.display = 'none';
            userAvatar.src = 'img/avatar.jpg';
            userAvatar.style.display = 'block';
            modal.style.display = 'none';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
