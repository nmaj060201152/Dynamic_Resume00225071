// TYPESCRIPT
// Function to toggle visibility of sections
const showhidee = (sectionId: string): void => {
    const section = document.getElementById(sectionId) as HTMLElement;
    if (section) {
        const isVisible = section.style.display === 'block';
        section.style.display = isVisible ? 'none' : 'block';

        // Adjust bulb button color based on visibility
        const button = document.querySelector(`button[onclick="showhidee('${sectionId}')"]`);
        if (button) {
            button.classList.toggle('on', !isVisible); // Toggle yellow color when visible
        }
    }
};

// Function to change the theme color
const changeTheme = (): void => {
    const themes = ['#FF5733', '#C70039', '#900C3F', '#581845', '#1ABC9C', '#16A085', '#F1C40F', '#F39C12', '#3498DB', '#2980B9', '#9B59B6', '#8E44AD', '#2ECC71', '#27AE60', '#E74C3C', '#C0392B', '#E67E22', '#D35400', '#34495E', '#2C3E50'];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.backgroundColor = randomTheme;
};

// Function to toggle dark mode
const toggleDarkMode = (): void => {
    document.body.classList.toggle('dark-mode');
};

// Persistent bulb color toggle on each button
document.querySelectorAll('.bulb').forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('on'); // Toggle persistent "on" state
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const cvData = JSON.parse(localStorage.getItem("cvData") || '{}');

    // Personal Info
    document.getElementById("personal-info").innerHTML = `
        <li>Name: ${cvData.name || ''}</li>
        <li>Email: ${cvData.email || ''}</li>
        <li>Contact No: ${cvData.contact || ''}</li>
        <li>Address: ${cvData.address || ''}</li>
    `;

    // Education
    const educationList = document.getElementById("education-list");
    cvData.education?.forEach((item: string) => {
        const li = document.createElement("li");
        li.textContent = item;
        educationList.appendChild(li);
    });

    // Experience
    const experienceList = document.getElementById("experience-list");
    cvData.experience?.forEach((item: string) => {
        const li = document.createElement("li");
        li.textContent = item;
        experienceList.appendChild(li);
    });

    // Skills
    const skillsList = document.getElementById("skills-list");
    cvData.skills?.forEach((item: string) => {
        const li = document.createElement("li");
        li.textContent = item;
        skillsList.appendChild(li);
    });

    // Profile Image
    const profileImage = document.getElementById("profile-image") as HTMLImageElement;
    if (cvData.profileImage) {
        profileImage.src = cvData.profileImage;
        profileImage.style.display = "block";
    }
});
