document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

document.getElementById("ayman-reptiles-feedback").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var feedback = document.getElementById("feedback").value;
  if (name && email && feedback) {
    document.getElementById("message").innerHTML = "Feedback submitted successfully!";
    document.getElementById("message").style.color = "green";
    document.getElementById("ayman-reptiles-feedback").reset();

    // Display submitted feedback
    var feedbackList = document.getElementById("ayman-feedback-list");

    var nameItem = document.createElement("li");
    nameItem.textContent = "Name: " + name;

    var emailItem = document.createElement("li");
    emailItem.textContent = "Email: " + email;

    var feedbackItem = document.createElement("li");
    feedbackItem.textContent = "Feedback: " + feedback;

    feedbackList.appendChild(nameItem);
    feedbackList.appendChild(emailItem);
    feedbackList.appendChild(feedbackItem);
  } else {
    document.getElementById("message").innerHTML = "Please fill in all fields.";
    document.getElementById("message").style.color = "red";
  }
});
