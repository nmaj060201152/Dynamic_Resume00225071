// TYPESCRIPT
// Function to toggle visibility of sections
var showhidee = function (sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var isVisible = section.style.display === 'block';
        section.style.display = isVisible ? 'none' : 'block';
        // Adjust bulb button color based on visibility
        var button = document.querySelector("button[onclick=\"showhidee('".concat(sectionId, "')\"]"));
        if (button) {
            button.classList.toggle('on', !isVisible); // Toggle yellow color when visible
        }
    }
};
// Function to change the theme color
var changeTheme = function () {
    var themes = ['#FF5733', '#C70039', '#900C3F', '#581845', '#1ABC9C', '#16A085', '#F1C40F', '#F39C12', '#3498DB', '#2980B9', '#9B59B6', '#8E44AD', '#2ECC71', '#27AE60', '#E74C3C', '#C0392B', '#E67E22', '#D35400', '#34495E', '#2C3E50'];
    var randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.backgroundColor = randomTheme;
};
// Function to toggle dark mode
var toggleDarkMode = function () {
    document.body.classList.toggle('dark-mode');
};
// Persistent bulb color toggle on each button
document.querySelectorAll('.bulb').forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.toggle('on'); // Toggle persistent "on" state
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c;
    var cvData = JSON.parse(localStorage.getItem("cvData") || '{}');
    // Personal Info
    document.getElementById("personal-info").innerHTML = "\n        <li>Name: ".concat(cvData.name || '', "</li>\n        <li>Email: ").concat(cvData.email || '', "</li>\n        <li>Contact No: ").concat(cvData.contact || '', "</li>\n        <li>Address: ").concat(cvData.address || '', "</li>\n    ");
    // Education
    var educationList = document.getElementById("education-list");
    (_a = cvData.education) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        educationList.appendChild(li);
    });
    // Experience
    var experienceList = document.getElementById("experience-list");
    (_b = cvData.experience) === null || _b === void 0 ? void 0 : _b.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        experienceList.appendChild(li);
    });
    // Skills
    var skillsList = document.getElementById("skills-list");
    (_c = cvData.skills) === null || _c === void 0 ? void 0 : _c.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        skillsList.appendChild(li);
    });
    // Profile Image
    var profileImage = document.getElementById("profile-image");
    if (cvData.profileImage) {
        profileImage.src = cvData.profileImage;
        profileImage.style.display = "block";
    }
});
