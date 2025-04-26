//Menu toggle
function toggleMenu() {
  let sidebar = document.getElementById("portfolioNav");
  if (sidebar.style.width === "100%") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "100%";
  }
}

//Full screen navbar

function closeNav() {
  document.getElementById("portfolioNav").style.width = "0";
  document.querySelector(".overlay").style.width = "0%";
}

//Email validation
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I'd appreciate you adding an email address");
  } else {
    email.setCustomValidity("");
  }
});

//Submitting form data to Google Sheets

window.addEventListener("load", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
      window.location.replace("/");
    });
  });
});
