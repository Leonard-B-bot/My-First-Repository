// Get all dropdown headers
const dropdownHeaders = document.querySelectorAll('.dropdown-header');

dropdownHeaders.forEach(header => {
    // Add click event listener to each header
    header.addEventListener('click', function () {
        // Toggle the open class on the parent section
        this.parentElement.classList.toggle('open');
    });
});
