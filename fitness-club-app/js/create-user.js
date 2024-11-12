// Function to save a new user to localStorage
function saveUser(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get user input values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subscriptionType = document.getElementById('subscriptionType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Create a new user object
    const newUser = {
        name,
        age,
        gender,
        address,
        email,
        phoneNumber,
        subscriptionType,
        startDate,
        endDate
    };

    // Get existing users from localStorage or create an empty array if none exist
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to the users page after saving the new user
    window.location.href = 'users.html';
}

// Attach the saveUser function to the form submission event
document.getElementById('createUserForm').addEventListener('submit', saveUser);