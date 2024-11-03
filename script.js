// Function to show the selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }
}

// Example file upload function
function uploadFile() {
  const fileInput = document.getElementById('fileUpload');
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    alert(`File "${file.name}" uploaded successfully!`);
    // In a real application, you would handle file upload here
  } else {
    alert("Please select a file to upload.");
  }
}

// Initialize with the Overview section displayed
document.addEventListener("DOMContentLoaded", () => {
  showSection('overview');
});
