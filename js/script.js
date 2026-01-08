console.log("Portfolio loaded successfully");
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("message").value;

  if (name === "" || email === "" || text === "") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
  } else {
    message.style.color = "green";
    message.textContent = "Message sent successfully!";
    form.reset();
  }
});
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
