// Default users to add if localStorage is empty
const defaultUsers = [
    {
        name: 'John Doe',
        age: 25,
        gender: 'Male',
        address: '123 Main Street',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        subscriptionType: 'Premium',
        startDate: '2024-01-01',
        endDate: '2024-12-31'
    },
    {
        name: 'Jane Smith',
        age: 30,
        gender: 'Female',
        address: '456 Oak Avenue',
        email: 'jane.smith@example.com',
        phoneNumber: '987-654-3210',
        subscriptionType: 'Basic',
        startDate: '2024-02-01',
        endDate: '2024-11-30'
    },
    {
        name: 'Alice Johnson',
        age: 35,
        gender: 'Female',
        address: '789 Pine Road',
        email: 'alice.johnson@example.com',
        phoneNumber: '555-123-4567',
        subscriptionType: 'Premium',
        startDate: '2024-03-01',
        endDate: '2024-12-31'
    }
];

// Function to load users from localStorage or initialize with default users
function loadUsers() {
    // Check if there are users in localStorage, if not, initialize with default users
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = ''; // Clear the table first

    // Loop through the users and create a table row for each
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.email}</td>
            <td>${user.subscriptionType}</td>
            <td>
                        <button class="btn btn-warning" onclick="editUser(${index})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
                    </td>
        `;
        userTableBody.appendChild(row);
    });
}

function editUser(index) {
    localStorage.setItem('editUserIndex', index); // Store the index for editing
    window.location.href = 'edit-user.html'; // Redirect to edit page
}

// Function to delete a user
function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1); // Remove user from array
    localStorage.setItem('users', JSON.stringify(users)); // Update localStorage
    loadUsers(); // Re-render the table after deletion
}

// Load users when the page is loaded
document.addEventListener('DOMContentLoaded', loadUsers);
