let participants = [];

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    alert("All fields are required!");
    return false;
  }
  return true;
}

function updateRegistrationCount() {
  let countElement = document.getElementById("registrationCount");
  countElement.textContent = "Total Registrations: " + participants.length;
}

function confirmRegistration() {
  let confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.textContent = "Registration Successful!";
}

function changeBackgroundColor(event) {
  event.target.style.backgroundColor = "#f0f0f0";
}

function resetBackgroundColor(event) {
  event.target.style.backgroundColor = "";
}

document.getElementById("registrationForm").addEventListener("mouseover", changeBackgroundColor);
document.getElementById("registrationForm").addEventListener("mouseout", resetBackgroundColor);

document.getElementById("name").addEventListener("blur", function() {
  let name = document.getElementById("name").value;
  if (name === "") {
    alert("Name field must not be empty.");
  }
});

document.getElementById("email").addEventListener("blur", function() {
  let email = document.getElementById("email").value;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
  }
});

document.getElementById("password").addEventListener("focus", function() {
  let tooltip = document.createElement("span");
  tooltip.id = "passwordTooltip";
  tooltip.textContent = "Password must be at least 6 characters long.";
  tooltip.style.position = "absolute";
  tooltip.style.backgroundColor = "#ffcc00";
  tooltip.style.padding = "5px";
  document.body.appendChild(tooltip);
});

document.getElementById("password").addEventListener("blur", function() {
  let tooltip = document.getElementById("passwordTooltip");
  if (tooltip) {
    tooltip.remove();
  }
});

// On form submission, validate and register participant
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (validateForm()) {
    let name = document.getElementById("name").value;
    participants.push(name);

    updateRegistrationCount();
    confirmRegistration();
    displayParticipants();
  }
});

function displayParticipants() {
  let participantList = document.getElementById("participantList");
  participantList.innerHTML = ''; // Clear current list
  participants.forEach(function(participant) {
    let listItem = document.createElement("li");
    listItem.textContent = participant;
    participantList.appendChild(listItem);
  });
}
