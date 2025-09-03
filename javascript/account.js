if (!localStorage.getItem("LoggedIn")) {
    window.location.href = "login.html";
}

const editBtn = document.getElementById("editBtn");
const cancelBtn = document.getElementById("cancelBtn");
const inputs = document.querySelectorAll(".details input");
const uploadPic = document.getElementById("uploadPic");
const profilePic = document.getElementById("profilePic");

let isEditing = false;
let originalValues = {};

editBtn.addEventListener("click", () => {
  isEditing = !isEditing;

  if (isEditing) {
    inputs.forEach(input => {
      originalValues[input.id] = input.value;
      input.disabled = false;
    });

    uploadPic.disabled = false;

    editBtn.textContent = "Save";
    cancelBtn.style.display = "inline-block";
  } else {
    inputs.forEach(input => input.disabled = true);
    uploadPic.disabled = true;

    editBtn.textContent = "Edit";
    cancelBtn.style.display = "none";
  }
});

cancelBtn.addEventListener("click", () => {
  inputs.forEach(input => {
    if (originalValues[input.id] !== undefined) {
      input.value = originalValues[input.id];
    }
    input.disabled = true;
  });

  uploadPic.disabled = true;

  editBtn.textContent = "Edit";
  cancelBtn.style.display = "none";
  isEditing = false;
});

uploadPic.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => profilePic.src = e.target.result;
    reader.readAsDataURL(file);
  }
});
