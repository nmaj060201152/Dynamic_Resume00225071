function submitForm() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value,
        education: Array.from(document.getElementById("education-list").children).map(
            li => li.textContent
        ),
        experience: Array.from(document.getElementById("experience-list").children).map(
            li => li.textContent
        ),
        skills: Array.from(document.getElementById("skills-list").children).map(
            li => li.textContent
        ),
        profileImage: document.getElementById("profile-image").src,
    };
    localStorage.setItem("cvData", JSON.stringify(formData));
    window.location.href = "cv.html";
}


function addEducation() {
    const educationInput = document.getElementById("education");
    const li = document.createElement("li");
    li.textContent = educationInput.value;
    document.getElementById("education-list").appendChild(li);
    educationInput.value = "";
}

function addExperience() {
    const experienceInput = document.getElementById("experience");
    const li = document.createElement("li");
    li.textContent = experienceInput.value;
    document.getElementById("experience-list").appendChild(li);
    experienceInput.value = "";
}

function addSkills() {
    const skillsInput = document.getElementById("skills");
    const li = document.createElement("li");
    li.textContent = skillsInput.value;
    document.getElementById("skills-list").appendChild(li);
    skillsInput.value = "";
}

function previewImage() {
    const file = document.getElementById("image").files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        const img = document.getElementById("profile-image");
        img.src = reader.result;
        img.style.display = "block";
        document.getElementById("imageURL").value = "";
    };
    if (file) {
        reader.readAsDataURL(file);
    }
}

function updateImageFromURL() {
    const imageURL = document.getElementById("imageURL").value;
    const img = document.getElementById("profile-image");
    img.src = imageURL;
    img.style.display = imageURL ? "block" : "none";
    document.getElementById("image").value = "";
}

function updatePreview() {
    document.getElementById("personal-info").children[0].textContent = "Name: " + document.getElementById("name").value;
    document.getElementById("personal-info").children[1].textContent = "Email: " + document.getElementById("email").value;
    document.getElementById("personal-info").children[2].textContent = "Contact No: " + document.getElementById("contact").value;
    document.getElementById("personal-info").children[3].textContent = "Address: " + document.getElementById("address").value;
}
