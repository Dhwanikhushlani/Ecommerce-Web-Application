
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const users = await response.json();
        
        const userList = document.getElementById('user-list');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.className = 'user-item';

            listItem.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.street}, ${user.address.city}</p>`;

            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchUsers();
