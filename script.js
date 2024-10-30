// Dropdown functionality
const dropdownBtn = document.getElementById('category-btn');
const dropdownContent = document.getElementById('category-list');
const searchInput = document.getElementById('search-input'); // Reference to the search input field

// Set default placeholder to 'Select...'
searchInput.placeholder = 'Select...';

// Toggle dropdown on button click
dropdownBtn.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent dropdown from closing immediately
  dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', function() {
  if (dropdownContent.classList.contains('show')) {
    dropdownContent.classList.remove('show');
  }
});

// Update button text, update search input placeholder, and close dropdown on option click
const options = document.querySelectorAll('.dropdown-content a');
options.forEach(option => {
  option.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const selectedCategory = this.textContent;
    if (selectedCategory === 'Select') {
      // If "Select" is chosen, reset placeholder to 'Select...'
      dropdownBtn.textContent = 'Select';
      searchInput.placeholder = 'Select...';
    } else {
      // Otherwise, show "Search in [Category]"
      dropdownBtn.textContent = selectedCategory;
      searchInput.placeholder = `Search in ${selectedCategory}`;
    }
    
    // Change background based on selected category
    document.body.className = ''; // Reset any existing background class
    if (selectedCategory === 'Software Development') {
      document.body.classList.add('background-software');
    } else if (selectedCategory === 'Web Development') {
      document.body.classList.add('background-web');
    } else if (selectedCategory === 'Data Analyst') {
      document.body.classList.add('background-data');
    } else if (selectedCategory === 'IT Consultant') {
      document.body.classList.add('background-it');
    } else if (selectedCategory === 'Network Administrator') {
      document.body.classList.add('background-netadmin');
    } else if (selectedCategory === 'Everything') {
      document.body.classList.add('background-everything');
    }
    dropdownContent.classList.remove('show'); // Close the dropdown
  });
});
