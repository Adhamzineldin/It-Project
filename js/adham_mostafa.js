//Adham Mostafa
function togglePhoto() {
  var photo = document.getElementById("AMSphoto");
  if (photo.style.display === "none") {
    photo.style.display = "block";
  } else {
    photo.style.display = "none";
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}
