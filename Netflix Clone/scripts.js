// Simple Login Validation
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful! (Add real validation in production)');
});

// Simple Subscription Alert
document.getElementById('subscribe-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const plan = document.getElementById('plan').value;
    alert(`Subscribed to the ${plan} plan!`);
});
