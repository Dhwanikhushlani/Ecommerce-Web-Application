document.getElementById('userForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const message = `Thank you for submitting, ${name}!`;
});